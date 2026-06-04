import { Mascota } from '../mascotas/mascota.entity';
export declare class Especie {
    id: string;
    nombre_especie: string;
    mascotas: Mascota[] | undefined;
}
