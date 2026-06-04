import { Repository } from 'typeorm';
import { Especie } from './especie.entity';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
export declare class EspeciesService {
    private readonly especieRepository;
    constructor(especieRepository: Repository<Especie>);
    create(createEspecieDto: CreateEspecieDto): Promise<Especie>;
    findAll(): Promise<Especie[]>;
    findOne(id: string): Promise<Especie>;
    update(id: string, updateEspecieDto: UpdateEspecieDto): Promise<Especie>;
    remove(id: string): Promise<Especie>;
}
