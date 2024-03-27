import { Module } from '@nestjs/common';

import { UsersModule } from './components/user/user.module';
@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
