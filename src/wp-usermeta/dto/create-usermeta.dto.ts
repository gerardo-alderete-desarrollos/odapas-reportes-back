// src/wp-usermeta/dto/create-usermeta.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class CreateUsermetaDto {
  // user_id puede llegarte como string (bigint)
  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  meta_key?: string | null;

  @IsOptional()
  @IsString()
  meta_value?: string | null;
}


