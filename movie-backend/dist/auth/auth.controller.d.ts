import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: CredentialsDto): Promise<void>;
    signIn(req: any): Promise<{
        accessToken: string;
    }>;
    getMe(req: any): any;
}
