import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { User } from 'src/Users/entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtSerivce: JwtService,
  ) {}
  // async login(loginDTO: LoginDTO): Promise<User> {
  //   const user = await this.userService.findOne(loginDTO); // 1.
  //   const passwordMatched = await bcrypt.compare(
  //     loginDTO.password,
  //     user.password,
  //   ); // 2.
  //   if (passwordMatched) {
  //     // 3.
  //     delete user.password; // 4.
  //     return user;
  //   } else {
  //     throw new UnauthorizedException('Password does not match'); // 5.
  //   }
  // }
  async login(loginDTO: LoginDTO): Promise<{ accessToken: String }> {
    const user = await this.userService.findOne(loginDTO); // 1.
    const passwordMatched = await bcrypt.compare(
      loginDTO.password,
      user.password,
    ); // 2.
    if (passwordMatched) {
      const payload = { email: user.email, sub: user.id };
      return { accessToken: this.jwtSerivce.sign(payload) };
    } else {
      throw new UnauthorizedException('Password does not match'); // 5.
    }
  }
}
