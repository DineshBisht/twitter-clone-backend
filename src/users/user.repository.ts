import { BaseRepository } from 'src/repository/base.repository';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(entityManager: EntityManager) {
    super(UserEntity, entityManager); // ✅ pass manually
  }
}
