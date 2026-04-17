import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  getUserByUsername(username: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({ name: username });
  }
}
