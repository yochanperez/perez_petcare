import { EspeciesService } from './especies.service';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
export declare class EspeciesController {
    private readonly especiesService;
    constructor(especiesService: EspeciesService);
    create(createEspecieDto: CreateEspecieDto): Promise<import("./especie.entity").Especie>;
    findAll(): Promise<import("./especie.entity").Especie[]>;
    findOne(id: string): Promise<import("./especie.entity").Especie>;
    update(id: string, updateEspecieDto: UpdateEspecieDto): Promise<import("./especie.entity").Especie>;
    remove(id: string): Promise<import("./especie.entity").Especie>;
}
