import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PasswordRepository } from './password.repository';
import { CreatePasswordDto } from './dtos/create-password.dto';
import { PasswordEntity } from './password.entity';
@Injectable()
export class AuthService {
  private readonly bcrypt: typeof bcrypt;

  constructor(private readonly passwordRepository: PasswordRepository) {
    this.bcrypt = bcrypt;
  }
  /**
   * @description: This method takes a plain text password and returns a hashed version of it using bcrypt.
   * @param password
   * @returns {Promise<string>} - A promise that resolves to the hashed password.
   */
  async hashPassword(password: string): Promise<string> {
    const saltRounds = this.bcrypt.genSaltSync();
    return await this.bcrypt.hash(password, saltRounds);
  }
  /**
   * @description: This method compares a plain text password with a hashed password to check if they match.
   * @param password
   * @param hash
   * @returns {Promise<boolean>} - A promise that resolves to true if the passwords match, or false if they do not.
   */
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await this.bcrypt.compare(password, hash);
  }
  /**
   * @description: This method is intended to save a user's password to the database. However, the implementation is incomplete and currently does not perform any operations.
   * @param createPasswordDto
   * @returns {Promise<PasswordEntity>} - A promise that resolves to the saved password entity.
   */
  savePassword(passwordDto: CreatePasswordDto): Promise<PasswordEntity> {
    return this.passwordRepository.create(passwordDto);
  }
}
