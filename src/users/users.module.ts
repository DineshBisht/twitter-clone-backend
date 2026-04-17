import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [],
  exports: [UserRepository],
  controllers: [UsersController],
  providers: [UserRepository, UsersService],
})
export class UsersModule {}
