import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async create(dto: CreateUsuarioDto) {
    const hashed = await bcrypt.hash(dto.password, 10);

    const usuario = this.usuarioRepo.create({
      ...dto,
      password: hashed,
    });

    return this.usuarioRepo.save(usuario);
  }

  async login(dto: LoginDto) {
  const user = await this.usuarioRepo.findOne({
    where: { email: dto.email },
  });

  if (!user) throw new UnauthorizedException('Usuario no encontrado');

  const valid = await bcrypt.compare(dto.password, user.password);
  if (!valid) throw new UnauthorizedException('Credenciales incorrectas');

  const payload = {
    sub: user.id,
    email: user.email,
    rol: user.rol,
  };

  const token = await this.jwtService.signAsync(payload);

  // Eliminamos el password de la respuesta
  const { password, ...userWithoutPassword } = user;

  return {
    message: 'Login correcto',
    access_token: token,
    usuario: userWithoutPassword,
  };
}


  findAll() {
    return this.usuarioRepo.find();
  }
}
