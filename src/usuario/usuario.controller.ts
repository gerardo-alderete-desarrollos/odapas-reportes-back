import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('register')
  create(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.create(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.usuarioService.login(dto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
}
