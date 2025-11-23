import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateBitacoraDto {
    @IsString()
    @IsNotEmpty()
    comentario: string;

    @IsNumber()
    reporteId: number;
}
