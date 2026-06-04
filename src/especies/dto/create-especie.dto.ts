import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateEspecieDto {
  @IsString()
  nombre_especie?: string;

}