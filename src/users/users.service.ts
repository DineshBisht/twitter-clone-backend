import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  /**
   * @description: This method retrieves a user from the database based on their username.
   * @param username
   * @returns {Promise<UserEntity>} - A promise that resolves to the user entity if found, or null if not found.
   */
  getUserByUsername(username: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({ name: username });
  }

  /**
   * @description: This method creates a new user in the database.
   * @param {CreateUserDto} createUserDto - The data transfer object containing the user's information.
   * @returns {Promise<UserEntity>} - A promise that resolves to the created user entity.
   */
  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.create(createUserDto);
  }
}
