import { CobrosDto } from './dto/cobros.dto';
export declare class ServiciosService {
    calcularCobroVacunacion(cobrosDto: CobrosDto): {
        total_mascotas: number;
        total_general: number;
        detalle: any[];
    };
}
