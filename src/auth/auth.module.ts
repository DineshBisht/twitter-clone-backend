import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordRepository } from './password.repository';

@Module({
  exports: [AuthService],
  controllers: [AuthController],
  providers: [PasswordRepository, AuthService],
})
export class AuthModule {}
