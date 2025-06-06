import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Token } from './entities/token.entity';
import { Repository } from 'typeorm';
import { IJWTPayload } from './interfaces/jwt-payload.interface';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly tokenRepository;
    constructor(configService: ConfigService, tokenRepository: Repository<Token>);
    validate(payload: IJWTPayload): Promise<{
        id: number;
        email: string;
        role: import("./entities/user.entity").UserRole;
    }>;
}
export {};
