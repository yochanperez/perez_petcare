import { IsString, IsNumber, IsOptional, IsDecimal } from 'class-validator';

export class UpdateMascotaDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsNumber()
  peso_kg?: number;

  @IsOptional()
  @IsDecimal()
  edad_años?: number;


  @IsOptional()
  estado_vacunado?: boolean;
  
}