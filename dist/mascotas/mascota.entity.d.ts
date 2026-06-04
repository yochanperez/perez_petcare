import { Especie } from '../especies/especie.entity';
export declare class Mascota {
    id: string;
    especie: Especie;
    nombre: string;
    peso_kg: number;
    edad_años: number;
    estado_vacunado: boolean;
}
