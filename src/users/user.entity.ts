import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { PostEntity } from 'src/posts/post.entity';
import { PasswordEntity } from 'src/auth/password.entity';
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
  @Column({ type: 'varchar', name: 'avatar', length: 255, nullable: true })
  avatar!: string;
  @Column({ type: 'text', name: 'bio', nullable: true })
  bio!: string;
  @Column({ type: 'int', name: 'follower_count', default: 0 })
  followerCount!: number;
  @Column({ type: 'int', name: 'followee_count', default: 0 })
  followeeCount!: number;
  @Column({ type: 'boolean', name: 'varified', default: false })
  varified!: boolean;
  @ManyToOne(() => PostEntity, (post) => post.author)
  @JoinColumn({ name: 'posts' })
  posts!: PostEntity[];

  @OneToOne(() => PasswordEntity, (password) => password.user, {
    cascade: true,
  })
  password!: PasswordEntity;
}
