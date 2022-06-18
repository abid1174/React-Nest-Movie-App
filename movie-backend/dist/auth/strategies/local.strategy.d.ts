import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { IUser } from '../interfaces/user.interface';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<IUser>;
}
export {};
