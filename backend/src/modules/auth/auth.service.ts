import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entities/user.entity';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Token } from './entities/token.entity';
import { ConfigService } from '@nestjs/config';
import { ITokens } from './interfaces/token.interface';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { IJWTPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  private readonly accessTokenExpiresIn: number;
  private readonly refreshTokenExpiresIn: number;

  constructor(
    @InjectRepository(UserEntity)
    private usersRepo: Repository<UserEntity>,
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.accessTokenExpiresIn =
      this.configService.get<number>('ACCESS_TOKEN_EXPIRATION_TIME') || 0;
    this.refreshTokenExpiresIn =
      this.configService.get<number>('REFRESH_TOKEN_EXPIRATION_TIME') || 0;
  }

  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const existing = await this.usersRepo.findOneBy({
      email: registerDto.email,
    });
    if (existing) {
      throw new BadRequestException('Користувач з таким email вже існує');
    }
    const user = this.usersRepo.create({
      ...registerDto,
      password: hashedPassword,
    });
    return this.usersRepo.save(user);
  }

  async login(loginDto: LoginDto): Promise<ITokens> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    const jti = Math.random().toString(36).substring(10);
    const payload = { userId: user.id, email: user.email, jti };
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: `${this.accessTokenExpiresIn}s`,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: `${this.refreshTokenExpiresIn}s`,
    });
    await this.saveTokens(
      user,
      accessToken,
      refreshToken,
      this.accessTokenExpiresIn,
      this.refreshTokenExpiresIn,
      jti,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async refresh(refreshTokenDto: RefreshTokenDto): Promise<ITokens> {
    const { refreshToken } = refreshTokenDto;

    try {
      this.jwtService.verify<IJWTPayload>(refreshToken);

      const tokenEntity = await this.tokenRepository.findOne({
        where: { refreshToken, isBlocked: false },
        //витягаємо разом з токеном дані про  user
        relations: ['user'],
      });

      if (!tokenEntity || tokenEntity.refreshTokenExpiresAt < new Date()) {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }
      tokenEntity.isBlocked = true;
      await this.tokenRepository.save(tokenEntity);

      const jti = Math.random().toString(36).substring(3);
      const payload = {
        userId: tokenEntity.user.id,
        email: tokenEntity.user.email,
        jti,
      };

      const newAccessToken = this.jwtService.sign(payload, {
        expiresIn: `${this.accessTokenExpiresIn}s`,
      });
      const newRefreshToken = this.jwtService.sign(payload, {
        expiresIn: `${this.refreshTokenExpiresIn}s`,
      });

      await this.saveTokens(
        tokenEntity.user,
        newAccessToken,
        newRefreshToken,
        this.accessTokenExpiresIn,
        this.refreshTokenExpiresIn,
        jti,
      );

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async logOut(refreshTokenDto: RefreshTokenDto): Promise<void> {
    const { refreshToken } = refreshTokenDto;

    const tokenEntity = await this.tokenRepository.findOne({
      where: { refreshToken, isBlocked: false },
    });

    if (tokenEntity) {
      tokenEntity.isBlocked = true;
      await this.tokenRepository.save(tokenEntity);
    }
  }

  private async saveTokens(
    user: UserEntity,
    accessToken: string,
    refreshToken: string,
    accessTokenExpiresIn: number,
    refreshTokenExpiresIn: number,
    jti: string,
  ): Promise<void> {
    const tokenEntity = this.tokenRepository.create({
      accessToken,
      refreshToken,
      accessTokenExpiresAt: new Date(Date.now() + accessTokenExpiresIn * 1000),
      refreshTokenExpiresAt: new Date(
        Date.now() + refreshTokenExpiresIn * 1000,
      ),
      user,
      jti,
    });
    await this.tokenRepository.save(tokenEntity);
  }

  private async validateUser(
    email: string,
    password: string,
  ): Promise<UserEntity> {
    const user = await this.usersRepo.findOneBy({ email });

    if (!user || !(await user.validatePassword(password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
