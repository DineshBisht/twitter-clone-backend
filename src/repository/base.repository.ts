import { EntityManager } from 'typeorm';
import type { EntityTarget } from 'typeorm';
import { IBaseRepository } from './base.repository.interface';
import { Injectable } from '@nestjs/common';
type BaseEntity = {
  id: string;
};
@Injectable()
export class BaseRepository<
  T extends BaseEntity,
> implements IBaseRepository<T> {
  constructor(
    private readonly entity: EntityTarget<T>,
    private readonly entityManager: EntityManager,
  ) {}
  create(createDto: any): Promise<T> {
    const entity = this.entityManager.create(this.entity, createDto);
    return this.entityManager.save(entity);
  }
  async update(id: string, updateDto: any): Promise<T> {
    const entity = await this.entityManager.findOne(this.entity, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      where: { id } as any,
    });
    if (!entity) throw new Error('Entity not found.');
    Object.assign(entity, updateDto);
    return this.entityManager.save(entity);
  }
  async delete(id: string): Promise<void> {
    const entity = await this.entityManager.findOne(this.entity, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      where: { id } as any,
    });
    if (!entity) throw new Error('Entity not found.');
    await this.entityManager.remove(entity);
  }
  async findOne(condition: any): Promise<T> {
    const entity = await this.entityManager.findOne(this.entity, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      where: condition,
    });
    if (!entity) throw new Error('Entity not found.');
    return entity;
  }
  async findAll(): Promise<T[]> {
    return this.entityManager.find(this.entity);
  }
}
