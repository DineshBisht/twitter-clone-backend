import { UserEntity } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('passwords')
export class PasswordEntity extends BaseEntity {
  @OneToOne(() => UserEntity, (user) => user.password, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;
  @Column({ type: 'varchar', name: 'password', length: 255, nullable: false })
  password!: string;
}
