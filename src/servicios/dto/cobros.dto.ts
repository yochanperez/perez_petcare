import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class MascotaCobroDto {

  @IsString()
  nombre?: string;

  @IsNumber() 
  peso_kg?: number;
}

export class CobrosDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MascotaCobroDto)
  mascotas?: MascotaCobroDto[];
}