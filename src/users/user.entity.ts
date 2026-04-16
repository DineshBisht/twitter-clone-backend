import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    name: 'user_name',
    length: 30,
    nullable: false,
    unique: true,
  })
  userName!: string;
  @Column({ type: 'varchar', name: 'name', length: 100 })
  name!: string;
  @Column({ type: 'varchar', name: 'avatar', length: 255 })
  avatar!: string;
  @Column({ type: 'text', name: 'bio' })
  bio!: string;
  @Column({ type: 'int', name: 'follower_count', default: 0 })
  followerCount!: number;
  @Column({ type: 'int', name: 'followee_count', default: 0 })
  followeeCount!: number;
  @Column({ type: 'boolean', name: 'varified', default: false })
  varified!: boolean;
}
