import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/User.schema';
import * as bcrypt from 'bcrypt';
import { SignInUserDto } from './dto/signin_user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.UserModel.findOne({
        email: createUserDto.email,
      }).exec();

      if (user) {
        throw new HttpException('Email already in use', HttpStatus.CONFLICT);
      }
      const saltOrRounds = 10;
      const password = createUserDto.password;
      const hash = await bcrypt.hash(password, saltOrRounds);
      const createdUser = await this.UserModel.create({
        email: createUserDto.email,
        name: createUserDto.name,
        password: hash,
      });
      await createdUser.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async signin(signInUserDto: SignInUserDto) {
    try {
      const user = await this.UserModel.findOne({
        email: signInUserDto.email,
      }).exec();

      if (!user) {
        throw new HttpException(
          'Wrong email or password',
          HttpStatus.NOT_FOUND,
        );
      }
      const isMatch = await bcrypt.compare(
        signInUserDto.password,
        user.password,
      );
      if (isMatch) {
        // instead of returning a message generate a token using jwt and return a token 
        // how to use token is nest js 
        return { message: 'authenticated' };
      }
      throw new HttpException('Wrong email or password', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
