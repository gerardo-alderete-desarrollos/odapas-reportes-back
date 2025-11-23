import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bitacora } from './bitacora.entity';
import { BitacoraService } from './bitacora.service';
import { BitacoraController } from './bitacora.controller';
import { OdapasReporte } from 'src/reportes/odapas-reporte.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bitacora, OdapasReporte])],
    controllers: [BitacoraController],
    providers: [BitacoraService],
    exports: [BitacoraService],
})
export class BitacoraModule { }
