// src/wp-usermeta/wp-usermeta.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WpUsermetaService } from './wp-usermeta.service';
import { CreateUsermetaDto } from './dto/create-usermeta.dto';
import { UpdateUsermetaDto } from './dto/update-usermeta.dto';

@Controller('usermeta')
export class WpUsermetaController {
  constructor(private readonly metaService: WpUsermetaService) {}

  @Get()
  findAll() {
    return this.metaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metaService.findOne(id);
  }

  @Get('by-user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.metaService.findByUserId(userId);
  }

  @Post()
  create(@Body() dto: CreateUsermetaDto) {
    return this.metaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUsermetaDto) {
    return this.metaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metaService.remove(id);
  }
}
