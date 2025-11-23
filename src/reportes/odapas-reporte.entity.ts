import { Bitacora } from 'src/bitacora/bitacora.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('odapas_reportes')
export class OdapasReporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  folio: string;

  @Column({ length: 15 })
  nombre: string;

  @Column({ length: 15 })
  telefono: string;

  @Column({ length: 100 })
  categoria: string;

  @Column({ length: 150 })
  subcategoria: string;

  @Column({ length: 255 })
  ubicacion: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ length: 255 })
  evidencia_url: string;

  @Column({ length: 20 })
  estado: string;

  @Column({ type: 'datetime' })
  fecha: Date;

  @Column({ length: 100 })
  usuario_asignado: string;

  @Column({ length: 100 })
  area: string;

  @OneToMany(() => Bitacora, (bitacora) => bitacora.reporte)
  bitacoras: Bitacora[];

}
