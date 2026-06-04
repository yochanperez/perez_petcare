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
exports.EspeciesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const especie_entity_1 = require("./especie.entity");
let EspeciesService = class EspeciesService {
    especieRepository;
    constructor(especieRepository) {
        this.especieRepository = especieRepository;
    }
    create(createEspecieDto) {
        const especie = this.especieRepository.create(createEspecieDto);
        return this.especieRepository.save(especie);
    }
    findAll() {
        return this.especieRepository.find({ relations: { mascotas: true } });
    }
    async findOne(id) {
        const especie = await this.especieRepository.findOne({ where: { id }, relations: { mascotas: true } });
        if (!especie)
            throw new common_1.NotFoundException('Especie no encontrada');
        return especie;
    }
    async update(id, updateEspecieDto) {
        const especie = await this.findOne(id);
        Object.assign(especie, updateEspecieDto);
        return this.especieRepository.save(especie);
    }
    async remove(id) {
        const especie = await this.especieRepository.findOne({ where: { id }, relations: { mascotas: true } });
        if (!especie)
            throw new common_1.NotFoundException('Especie no encontrada');
        if (especie.mascotas && especie.mascotas.length > 0)
            throw new common_1.BadRequestException('No se puede eliminar un especie con mascotas activas');
        return this.especieRepository.remove(especie);
    }
};
exports.EspeciesService = EspeciesService;
exports.EspeciesService = EspeciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(especie_entity_1.Especie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EspeciesService);
//# sourceMappingURL=especies.service.js.map