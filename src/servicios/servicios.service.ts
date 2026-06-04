import { Injectable, BadRequestException } from '@nestjs/common';
import { CobrosDto } from './dto/cobros.dto';

@Injectable()
export class ServiciosService {

  calcularCobroVacunacion(cobrosDto: CobrosDto) {
    if (!cobrosDto.mascotas || cobrosDto.mascotas.length === 0) {
      throw new BadRequestException('Debe enviar al menos una mascota para calcular el cobro.');
    }

    let total_general = 0;
    const detalle: any[] = [];

    for (const mascota of cobrosDto.mascotas) {
      const peso = mascota.peso_kg ?? 0;
      let costo_vacuna = 0;

      if (peso <= 5) {
        costo_vacuna = 8;
      } else if (peso > 5 && peso <= 15) {
        costo_vacuna = 12;
      } else {
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
}