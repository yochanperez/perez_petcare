import { IsString, IsNumber} from 'class-validator';
import { FindOperator } from 'typeorm';

export class CreateMascotaDto {
  @IsString()
  nombre?: string;

  @IsNumber()
  peso_kg?: number;

  @IsNumber()
  edad_años?: number;

  estado_vacunado?: boolean;
  
  especieId: string | FindOperator<string> | undefined;
    
}