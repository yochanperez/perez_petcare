import { IsString, IsNumber, IsBoolean} from 'class-validator';
import { FindOperator } from 'typeorm';

export class CreateMascotaDto {
    
  @IsString()
  especieId: string | FindOperator<string> | undefined;

  @IsString()
  nombre?: string;

  @IsNumber() 
  peso_kg?: number;

  @IsNumber()
  edad_años?: number;
  @IsBoolean()
  estado_vacunado?: boolean;

    
}