"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
const token_entity_1 = require("./entities/token.entity");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    usersRepo;
    tokenRepository;
    jwtService;
    configService;
    accessTokenExpiresIn;
    refreshTokenExpiresIn;
    constructor(usersRepo, tokenRepository, jwtService, configService) {
        this.usersRepo = usersRepo;
        this.tokenRepository = tokenRepository;
        this.jwtService = jwtService;
        this.configService = configService;
        this.accessTokenExpiresIn =
            this.configService.get('ACCESS_TOKEN_EXPIRATION_TIME') || 0;
        this.refreshTokenExpiresIn =
            this.configService.get('REFRESH_TOKEN_EXPIRATION_TIME') || 0;
    }
    async register(registerDto) {
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const existing = await this.usersRepo.findOneBy({
            email: registerDto.email,
        });
        if (existing) {
            throw new common_1.BadRequestException('Користувач з таким email вже існує');
        }
        const user = this.usersRepo.create({
            ...registerDto,
            password: hashedPassword,
        });
        return this.usersRepo.save(user);
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto.email, loginDto.password);
        const jti = Math.random().toString(36).substring(10);
        const payload = { userId: user.id, email: user.email, jti };
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: `${this.accessTokenExpiresIn}s`,
        });
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: `${this.refreshTokenExpiresIn}s`,
        });
        await this.saveTokens(user, accessToken, refreshToken, this.accessTokenExpiresIn, this.refreshTokenExpiresIn, jti);
        return {
            accessToken,
            refreshToken,
        };
    }
    async refresh(refreshTokenDto) {
        const { refreshToken } = refreshTokenDto;
        try {
            this.jwtService.verify(refreshToken);
            const tokenEntity = await this.tokenRepository.findOne({
                where: { refreshToken, isBlocked: false },
                relations: ['user'],
            });
            if (!tokenEntity || tokenEntity.refreshTokenExpiresAt < new Date()) {
                throw new common_1.UnauthorizedException('Invalid or expired refresh token');
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
            await this.saveTokens(tokenEntity.user, newAccessToken, newRefreshToken, this.accessTokenExpiresIn, this.refreshTokenExpiresIn, jti);
            return {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            };
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
    }
    async logOut(refreshTokenDto) {
        const { refreshToken } = refreshTokenDto;
        const tokenEntity = await this.tokenRepository.findOne({
            where: { refreshToken, isBlocked: false },
        });
        if (tokenEntity) {
            tokenEntity.isBlocked = true;
            await this.tokenRepository.save(tokenEntity);
        }
    }
    async saveTokens(user, accessToken, refreshToken, accessTokenExpiresIn, refreshTokenExpiresIn, jti) {
        const tokenEntity = this.tokenRepository.create({
            accessToken,
            refreshToken,
            accessTokenExpiresAt: new Date(Date.now() + accessTokenExpiresIn * 1000),
            refreshTokenExpiresAt: new Date(Date.now() + refreshTokenExpiresIn * 1000),
            user,
            jti,
        });
        await this.tokenRepository.save(tokenEntity);
    }
    async validateUser(email, password) {
        const user = await this.usersRepo.findOneBy({ email });
        if (!user || !(await user.validatePassword(password))) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(token_entity_1.Token)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map