import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class UpdateEspecieDto {
  @IsOptional()
  @IsString()
  nombre_especie?: string;
  
}