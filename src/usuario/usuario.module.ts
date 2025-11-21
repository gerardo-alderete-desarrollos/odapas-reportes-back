import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'SECRET123',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, JwtStrategy],
  exports: [UsuarioService],
})
export class UsuarioModule {}
