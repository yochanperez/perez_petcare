"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspeciesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const especies_service_1 = require("./especies.service");
const especies_controller_1 = require("./especies.controller");
const especie_entity_1 = require("./especie.entity");
let EspeciesModule = class EspeciesModule {
};
exports.EspeciesModule = EspeciesModule;
exports.EspeciesModule = EspeciesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([especie_entity_1.Especie])],
        controllers: [especies_controller_1.EspeciesController],
        providers: [especies_service_1.EspeciesService],
        exports: [especies_service_1.EspeciesService],
    })
], EspeciesModule);
//# sourceMappingURL=especies.module.js.map