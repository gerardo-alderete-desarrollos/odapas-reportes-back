// src/wp-users/wp-user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { WpUsermeta } from '../wp-usermeta/wp-usermeta.entity';

@Entity('wp_users')
export class WpUser {
  // Uso string para bigint para evitar problemas con números muy grandes en JS
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, name: 'ID' })
  ID: string;

  @Column({ type: 'varchar', length: 60 })
  user_login: string;

  @Column({ type: 'varchar', length: 255 })
  user_pass: string;

  @Column({ type: 'varchar', length: 50 })
  user_nicename: string;

  @Column({ type: 'varchar', length: 100 })
  user_email: string;

  @Column({ type: 'varchar', length: 100 })
  user_url: string;

  @Column({ type: 'datetime' })
  user_registered: Date;

  @Column({ type: 'varchar', length: 255 })
  user_activation_key: string;

  @Column({ type: 'int' })
  user_status: number;

  @Column({ type: 'varchar', length: 250 })
  display_name: string;

  @OneToMany(() => WpUsermeta, (meta) => meta.user, {
    cascade: false,
  })
  usermeta: WpUsermeta[];
}
