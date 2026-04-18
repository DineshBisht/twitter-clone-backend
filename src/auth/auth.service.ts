import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly bcrypt: typeof bcrypt;

  constructor() {
    this.bcrypt = bcrypt;
  }
  async hashPassword(password: string): Promise<string> {
    const saltRounds = this.bcrypt.genSaltSync();
    return await this.bcrypt.hash(password, saltRounds);
  }
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await this.bcrypt.compare(password, hash);
  }
}
