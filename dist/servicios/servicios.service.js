"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosService = void 0;
const common_1 = require("@nestjs/common");
let ServiciosService = class ServiciosService {
    calcularCobroVacunacion(cobrosDto) {
        if (!cobrosDto.mascotas || cobrosDto.mascotas.length === 0) {
            throw new common_1.BadRequestException('Debe enviar al menos una mascota para calcular el cobro.');
        }
        let total_general = 0;
        const detalle = [];
        for (const mascota of cobrosDto.mascotas) {
            const peso = mascota.peso_kg ?? 0;
            let costo_vacuna = 0;
            if (peso <= 5) {
                costo_vacuna = 8;
            }
            else if (peso > 5 && peso <= 15) {
                costo_vacuna = 12;
            }
            else {
                costo_vacuna = 18;
            }
            total_general += costo_vacuna;
            detalle.push({
                nombre: mascota.nombre ?? 'Sin nombre',
                peso_kg: peso,
                costo_vacuna: costo_vacuna,
            });
        }
        return {
            total_mascotas: detalle.length,
            total_general: +total_general.toFixed(2),
            detalle,
        };
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)()
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map