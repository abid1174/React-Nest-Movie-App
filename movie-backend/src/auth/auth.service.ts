import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CredentialsDto } from './dto/credentials.dto';
import { IUser } from './interfaces/user.interface';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: CredentialsDto): Promise<void> {
    const { name, email, password } = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      name,
      email,
      password: hashedPassword,
    });

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async signIn(user: UserDocument) {
    const payload = { email: user.email, sub: user._id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, pass: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return null;
    }
    const valid = await bcrypt.compare(pass, user.password);
    if (valid) {
      return user;
    }
    return null;
  }
}
