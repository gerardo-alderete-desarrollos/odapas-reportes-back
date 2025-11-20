import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdapasReportesService } from './odapas-reportes.service';
import { OdapasReportesController } from './odapas-reportes.controller';
import { OdapasReporte } from './odapas-reporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdapasReporte])],
  controllers: [OdapasReportesController],
  providers: [OdapasReportesService],
})
export class OdapasReportesModule {}
