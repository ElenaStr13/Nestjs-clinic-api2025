import { UserEntity } from './user.entity';
export declare class Token {
    id: number;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
    refreshTokenExpiresAt: Date;
    isBlocked: boolean;
    jti: string;
    user: UserEntity;
}
