import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
@Entity('posts')
export class PostEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'text', length: 240, nullable: true })
  text!: string;

  @Column({ type: 'json', name: 'images', nullable: true, default: [] })
  images!: string[];

  @Column({ type: 'int', name: 'like_count', default: 0 })
  likeCount!: number;

  @Column({ type: 'int', name: 'repost_count', default: 0 })
  repostCount!: number;

  @Column({ type: 'json', name: 'hash_tags', default: [] })
  hashTags!: string[];

  @Column({ type: 'json', name: 'mentions', default: [] })
  mentions!: Mention[];

  @OneToOne(() => PostEntity, { nullable: true })
  @JoinColumn({ name: 'orig_post_id' })
  origPost!: PostEntity;

  @OneToOne(() => PostEntity, { nullable: true })
  @JoinColumn({ name: 'reply_to_id' })
  replyTo!: PostEntity;
}

class Mention {
  name!: string;
  id!: string;
}
