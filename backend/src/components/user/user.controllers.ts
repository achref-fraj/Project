import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './user.service';
import { SignInUserDto } from './dto/signin_user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/signin')
  async signin(@Body() signinUserDto: SignInUserDto) {
    return this.usersService.signin(signinUserDto);
  }
}
