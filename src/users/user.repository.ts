import { BaseRepository } from 'src/repository/base.repository';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    super(UserEntity, null as any);
  }
}
