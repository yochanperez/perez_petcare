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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
const typeorm_1 = require("typeorm");
const especie_entity_1 = require("../especies/especie.entity");
let Mascota = class Mascota {
    id;
    especie;
    nombre;
    peso_kg;
    edad_años;
    estado_vacunado;
};
exports.Mascota = Mascota;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Mascota.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => especie_entity_1.Especie, (especies) => especies.mascotas, { eager: true, onDelete: 'RESTRICT' }),
    __metadata("design:type", especie_entity_1.Especie)
], Mascota.prototype, "especie", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mascota.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', scale: 2 }),
    __metadata("design:type", Number)
], Mascota.prototype, "peso_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Mascota.prototype, "edad_a\u00F1os", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Mascota.prototype, "estado_vacunado", void 0);
exports.Mascota = Mascota = __decorate([
    (0, typeorm_1.Entity)('mascotas')
], Mascota);
//# sourceMappingURL=mascota.entity.js.map