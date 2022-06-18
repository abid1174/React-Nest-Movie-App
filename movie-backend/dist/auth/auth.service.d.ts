import { Model } from 'mongoose';
import { CredentialsDto } from './dto/credentials.dto';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    signUp(authCredentialsDto: CredentialsDto): Promise<void>;
    signIn(user: UserDocument): Promise<{
        accessToken: string;
    }>;
    validateUser(email: string, pass: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
