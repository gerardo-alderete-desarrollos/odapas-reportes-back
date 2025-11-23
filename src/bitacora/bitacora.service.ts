import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bitacora } from './bitacora.entity';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
import { OdapasReporte } from 'src/reportes/odapas-reporte.entity';

@Injectable()
export class BitacoraService {
    constructor(
        @InjectRepository(Bitacora)
        private bitacoraRepo: Repository<Bitacora>,

        @InjectRepository(OdapasReporte)
        private reporteRepo: Repository<OdapasReporte>,
    ) { }

    // Crear comentario en el reporte
    async create(dto: CreateBitacoraDto) {
        const reporte = await this.reporteRepo.findOne({
            where: { id: dto.reporteId },
        });

        if (!reporte) {
            throw new NotFoundException('Reporte no encontrado');
        }

        const registro = this.bitacoraRepo.create({
            comentario: dto.comentario,
            reporte,
        });

        return this.bitacoraRepo.save(registro);
    }

    // Obtener todos los comentarios
    findAll() {
        return this.bitacoraRepo.find({ relations: ['reporte'] });
    }

    // Obtener comentarios por reporte
    async findByReporte(reporteId: number) {
        return this.bitacoraRepo.find({
            where: { reporte: { id: reporteId } },
            order: { fecha_creacion: 'ASC' },
        });
    }

    // Obtener un registro específico
    async findOne(id: number) {
        const registro = await this.bitacoraRepo.findOne({
            where: { id },
        });

        if (!registro) {
            throw new NotFoundException('Registro de bitácora no encontrado');
        }

        return registro;
    }

    // Actualizar comentario
    async update(id: number, dto: UpdateBitacoraDto) {
        const registro = await this.findOne(id);

        Object.assign(registro, dto);

        return this.bitacoraRepo.save(registro);
    }

    // Eliminar comentario
    async remove(id: number) {
        const registro = await this.findOne(id);
        return this.bitacoraRepo.remove(registro);
    }
}
