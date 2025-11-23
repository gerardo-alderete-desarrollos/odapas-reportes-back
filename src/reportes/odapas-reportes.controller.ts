import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OdapasReportesService } from './odapas-reportes.service';
import { CreateOdapasReporteDto } from './dto/create-odapas-reporte.dto';
import { UpdateOdapasReporteDto } from './dto/update-odapas-reporte.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('reportes')
export class OdapasReportesController {
  constructor(private readonly service: OdapasReportesService) { }

  @Post()
  create(@Body() dto: CreateOdapasReporteDto) {
    return this.service.create(dto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateOdapasReporteDto) {
    return this.service.update(Number(id), dto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
