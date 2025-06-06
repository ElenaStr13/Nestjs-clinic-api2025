import { Token } from './token.entity';
export declare enum UserRole {
    ADMIN = "admin",
    DOCTOR = "doctor",
    USER = "user"
}
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    tokens: Token[];
    validatePassword(password: string): Promise<boolean>;
}
