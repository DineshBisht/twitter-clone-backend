import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  exports: [UserRepository],
  controllers: [UsersController],
  providers: [UserRepository, UsersService],
})
export class UsersModule {}
