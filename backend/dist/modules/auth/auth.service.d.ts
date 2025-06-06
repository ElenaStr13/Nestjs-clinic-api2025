import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Token } from './entities/token.entity';
import { ConfigService } from '@nestjs/config';
import { ITokens } from './interfaces/token.interface';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthService {
    private usersRepo;
    private readonly tokenRepository;
    private readonly jwtService;
    private readonly configService;
    private readonly accessTokenExpiresIn;
    private readonly refreshTokenExpiresIn;
    constructor(usersRepo: Repository<UserEntity>, tokenRepository: Repository<Token>, jwtService: JwtService, configService: ConfigService);
    register(registerDto: RegisterDto): Promise<UserEntity>;
    login(loginDto: LoginDto): Promise<ITokens>;
    refresh(refreshTokenDto: RefreshTokenDto): Promise<ITokens>;
    logOut(refreshTokenDto: RefreshTokenDto): Promise<void>;
    private saveTokens;
    private validateUser;
}
