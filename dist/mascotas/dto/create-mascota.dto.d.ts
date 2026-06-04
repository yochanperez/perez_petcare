import { FindOperator } from 'typeorm';
export declare class CreateMascotaDto {
    nombre?: string;
    peso_kg?: number;
    edad_años?: number;
    estado_vacunado?: boolean;
    especieId: string | FindOperator<string> | undefined;
}
