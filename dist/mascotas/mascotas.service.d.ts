import { Repository } from 'typeorm';
import { Mascota } from './mascota.entity';
import { Especie } from '../especies/especie.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
export declare class MascotasService {
    private readonly mascotasRepository;
    private readonly especieRepository;
    constructor(mascotasRepository: Repository<Mascota>, especieRepository: Repository<Especie>);
    create(createMascotaDto: CreateMascotaDto): Promise<Mascota>;
    findAll(): Promise<Mascota[]>;
    findOne(id: string): Promise<Mascota>;
    update(id: string, updateMascotaDto: UpdateMascotaDto): Promise<Mascota>;
    remove(id: string): Promise<Mascota>;
}
