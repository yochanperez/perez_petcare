import { IsString, IsNumber, IsOptional, IsDecimal } from 'class-validator';
import { FindOperator } from 'typeorm';


export class UpdateMascotaDto {
  @IsOptional()
  @IsString()
  especieId: string | FindOperator<string> | undefined;
  
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