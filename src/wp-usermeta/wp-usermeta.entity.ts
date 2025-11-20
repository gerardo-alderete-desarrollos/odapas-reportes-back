// src/wp-usermeta/wp-usermeta.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { WpUser } from '../wp-users/wp-user.entity';

@Entity('wp_usermeta')
export class WpUsermeta {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, name: 'umeta_id' })
  umeta_id: string;

  @Column({ type: 'bigint', name: 'user_id' })
  user_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  meta_key: string | null;

  @Column({ type: 'longtext', nullable: true })
  meta_value: string | null;

  @ManyToOne(() => WpUser, (user) => user.usermeta, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: WpUser;
}
