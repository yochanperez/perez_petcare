import { MascotasService } from './mascotas.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
export declare class MascotasController {
    private readonly mascotasService;
    constructor(mascotasService: MascotasService);
    create(createMascotaDto: CreateMascotaDto): Promise<import("./mascota.entity").Mascota>;
    findAll(): Promise<import("./mascota.entity").Mascota[]>;
    findOne(id: string): Promise<import("./mascota.entity").Mascota>;
    update(id: string, updateMascotaDto: UpdateMascotaDto): Promise<import("./mascota.entity").Mascota>;
    remove(id: string): Promise<import("./mascota.entity").Mascota>;
}
