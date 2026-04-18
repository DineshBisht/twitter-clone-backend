import { BaseRepository } from 'src/repository/base.repository';
import { PasswordEntity } from './password.entity';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class PasswordRepository extends BaseRepository<PasswordEntity> {
  constructor(entityManager: EntityManager) {
    super(PasswordEntity, entityManager);
  }
}
