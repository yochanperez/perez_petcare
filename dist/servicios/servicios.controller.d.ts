import { ServiciosService } from './servicios.service';
import { CobrosDto } from './dto/cobros.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    calcularCobros(cobrosDto: CobrosDto): {
        total_mascotas: number;
        total_general: number;
        detalle: any[];
    };
}
