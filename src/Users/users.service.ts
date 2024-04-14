import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/createUserDto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(userDTO: CreateUserDTO): Promise<User> {
    console.log('awoo');
    const salt = await bcrypt.genSalt(); // 2.
    userDTO.password = await bcrypt.hash(userDTO.password, salt); // 3.
    const user = await this.userRepo.save(userDTO); // 4.
    // delete user.password; // 5.
    return user; // 6. }
  }

  async findOne(data: Partial<User>): Promise<User> {
    const user = await this.userRepo.findOneBy({ email: data.email });
    if (!user) {
      throw new UnauthorizedException('Could not find user');
    }
    return user;
  }
}
