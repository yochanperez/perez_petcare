import { FindOperator } from 'typeorm';
export declare class UpdateMascotaDto {
    especieId: string | FindOperator<string> | undefined;
    nombre?: string;
    peso_kg?: number;
    edad_años?: number;
    estado_vacunado?: boolean;
}
