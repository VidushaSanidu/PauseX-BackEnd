import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/Users/dto/createUserDto';
import { User } from 'src/Users/entity/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService) {}

  @Post('signup')
  signUp(@Body() userDto: CreateUserDTO): Promise<User> {
    return this.userService.create(userDto);
  }
}
