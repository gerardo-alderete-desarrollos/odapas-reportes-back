import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdapasReportesService } from './odapas-reportes.service';
import { CreateOdapasReporteDto } from './dto/create-odapas-reporte.dto';
import { UpdateOdapasReporteDto } from './dto/update-odapas-reporte.dto';

@Controller('odapas-reportes')
export class OdapasReportesController {
  constructor(private readonly service: OdapasReportesService) {}

  @Post()
  create(@Body() dto: CreateOdapasReporteDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateOdapasReporteDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
