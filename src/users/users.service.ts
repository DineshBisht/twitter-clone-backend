import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  getUserByUsername(username: string) {
    return this.userRepository.findOne(username);
  }
}
