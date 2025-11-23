import { OdapasReporte } from 'src/reportes/odapas-reporte.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bitacora')
export class Bitacora {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    comentario: string;

    @CreateDateColumn()
    fecha_creacion: Date;

    @ManyToOne(() => OdapasReporte, reporte => reporte.bitacoras, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'reporte_id' })   // 👈 AQUÍ SE SOLUCIONA
    reporte: OdapasReporte;
}
