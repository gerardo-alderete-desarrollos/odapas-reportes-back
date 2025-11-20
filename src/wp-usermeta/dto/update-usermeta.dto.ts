// src/wp-usermeta/dto/update-usermeta.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsermetaDto } from './create-usermeta.dto';

export class UpdateUsermetaDto extends PartialType(CreateUsermetaDto) {}