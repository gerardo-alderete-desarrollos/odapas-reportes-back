import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Rol } from './enums/rol.enum';
import { Area } from './enums/area.enum';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Rol,
    default: Rol.CALLCENTER,
  })
  rol: Rol;

  @Column({
    type: 'enum',
    enum: Area,
    default: Area.FUGAS,
  })
  area: Area;
}
