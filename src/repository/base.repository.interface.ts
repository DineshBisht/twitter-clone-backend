export interface IBaseRepository<T> {
  create(createDto: any): Promise<T>;
  update(id: string, updateDto: any): Promise<T>;
  delete(id: string): Promise<void>;
  findOne(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}
