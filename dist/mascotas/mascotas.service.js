"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mascota_entity_1 = require("./mascota.entity");
const especie_entity_1 = require("../especies/especie.entity");
let MascotasService = class MascotasService {
    mascotasRepository;
    especieRepository;
    constructor(mascotasRepository, especieRepository) {
        this.mascotasRepository = mascotasRepository;
        this.especieRepository = especieRepository;
    }
    async create(createMascotaDto) {
        const especie = await this.especieRepository.findOne({ where: { id: createMascotaDto.especieId } });
        if (!especie)
            throw new common_1.NotFoundException('Especie no encontrada');
        const Mascota = this.mascotasRepository.create({
            nombre: createMascotaDto.nombre,
            peso_kg: createMascotaDto.peso_kg,
            edad_años: createMascotaDto.edad_años ?? 0,
            estado_vacunado: createMascotaDto.estado_vacunado ?? true,
            especie: especie,
        });
        return this.mascotasRepository.save(Mascota);
    }
    findAll() {
        return this.mascotasRepository.find();
    }
    async findOne(id) {
        const Mascotas = await this.mascotasRepository.findOne({ where: { id } });
        if (!Mascotas)
            throw new common_1.NotFoundException('Mascotas no encontrado');
        return Mascotas;
    }
    async update(id, updateMascotaDto) {
        const mascotas = await this.findOne(id);
        if (updateMascotaDto.especieId) {
            const especie = await this.especieRepository.findOne({ where: { id: updateMascotaDto.especieId } });
            if (!especie)
                throw new common_1.NotFoundException('Especie no encontrada');
            mascotas.especie = especie;
        }
        Object.assign(mascotas, updateMascotaDto);
        return this.mascotasRepository.save(mascotas);
    }
    async remove(id) {
        const Mascotas = await this.findOne(id);
        return this.mascotasRepository.remove(Mascotas);
    }
};
exports.MascotasService = MascotasService;
exports.MascotasService = MascotasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mascota_entity_1.Mascota)),
    __param(1, (0, typeorm_1.InjectRepository)(especie_entity_1.Especie)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MascotasService);
//# sourceMappingURL=mascotas.service.js.map