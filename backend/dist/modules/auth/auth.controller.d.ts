import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { UserRequest } from './interfaces/user.request.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<import("./entities/user.entity").UserEntity>;
    login(dto: LoginDto): Promise<import("./interfaces/token.interface").ITokens>;
    refresh(refreshTokenDto: RefreshTokenDto): Promise<import("./interfaces/token.interface").ITokens>;
    logOut(refreshTokenDto: RefreshTokenDto): Promise<void>;
    getProfile(req: UserRequest): import("./interfaces/jwt-payload.interface").IJWTPayload;
}
