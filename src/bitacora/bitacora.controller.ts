import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BitacoraService } from './bitacora.service';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';

@Controller('bitacora')
export class BitacoraController {
    constructor(private readonly bitacoraService: BitacoraService) { }

    @Post()
    create(@Body() dto: CreateBitacoraDto) {
        return this.bitacoraService.create(dto);
    }

    @Get()
    findAll() {
        return this.bitacoraService.findAll();
    }

    @Get('reporte/:id')
    findByReporte(@Param('id') reporteId: number) {
        return this.bitacoraService.findByReporte(reporteId);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.bitacoraService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: UpdateBitacoraDto) {
        return this.bitacoraService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.bitacoraService.remove(id);
    }
}
