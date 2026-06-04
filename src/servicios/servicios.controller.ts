import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CobrosDto } from './dto/cobros.dto';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post('cobros')
  @HttpCode(HttpStatus.OK)
  calcularCobros(@Body() cobrosDto: CobrosDto) {
    return this.serviciosService.calcularCobroVacunacion(cobrosDto);
  }
}