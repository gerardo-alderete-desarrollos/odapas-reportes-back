import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOdapasReporteDto } from './dto/create-odapas-reporte.dto';
import { UpdateOdapasReporteDto } from './dto/update-odapas-reporte.dto';
import { OdapasReporte } from './odapas-reporte.entity';

@Injectable()
export class OdapasReportesService {
  constructor(
    @InjectRepository(OdapasReporte)
    private readonly reportesRepo: Repository<OdapasReporte>,
  ) {}

  async create(dto: CreateOdapasReporteDto): Promise<OdapasReporte> {
    const entity = this.reportesRepo.create({
      ...dto,
      fecha: dto.fecha ?? new Date(),
    });

    return await this.reportesRepo.save(entity);
  }

  findAll(): Promise<OdapasReporte[]> {
    return this.reportesRepo.find();
  }

  async findOne(id: number): Promise<OdapasReporte> {
    const reporte = await this.reportesRepo.findOne({ where: { id } });
    if (!reporte) throw new NotFoundException('Reporte no encontrado');
    return reporte;
  }

  async update(id: number, dto: UpdateOdapasReporteDto): Promise<OdapasReporte> {
    const existente = await this.findOne(id);
    const actualizado = Object.assign(existente, dto);
    return this.reportesRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    const existente = await this.findOne(id);
    await this.reportesRepo.remove(existente);
  }
}
