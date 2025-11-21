import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Rol } from '../enums/rol.enum';
import { Area } from '../enums/area.enum';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsEnum(Rol)
  rol: Rol;

  @IsEnum(Area)
  area: Area;
}
