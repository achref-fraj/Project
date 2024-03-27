import { Module } from '@nestjs/common';
import { UsersController } from './user.controllers';
import { UsersService } from './user.service';
import { usersProviders } from './user.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule {}