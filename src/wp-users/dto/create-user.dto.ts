// src/wp-users/dto/create-user.dto.ts
import { IsEmail, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  user_login: string;

  @IsString()
  user_pass: string;

  @IsString()
  user_nicename: string;

  @IsEmail()
  user_email: string;

  @IsOptional()
  @IsString()
  user_url?: string;

  @IsOptional()
  user_registered?: Date;

  @IsOptional()
  @IsString()
  user_activation_key?: string;

  @IsOptional()
  @IsInt()
  user_status?: number;

  @IsOptional()
  @IsString()
  display_name?: string;
}

