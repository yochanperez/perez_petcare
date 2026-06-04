import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especie } from './especie.entity';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';

@Injectable()
export class EspeciesService {
  constructor(
    @InjectRepository(Especie)
    private readonly especieRepository: Repository<Especie>,
  ) {}

  create(createEspecieDto: CreateEspecieDto) {
    const especie = this.especieRepository.create(createEspecieDto);
    return this.especieRepository.save(especie);
  }

  findAll() {
    return this.especieRepository.find({ relations: { mascotas: true } });
  }

  async findOne(id: string) {
    const especie = await this.especieRepository.findOne({ where: { id }, relations: { mascotas: true } });
    if (!especie) throw new NotFoundException('Especie no encontrada');
    return especie;
  }

  async update(id: string, updateEspecieDto: UpdateEspecieDto) {
    const especie = await this.findOne(id);
    Object.assign(especie, updateEspecieDto);
    return this.especieRepository.save(especie);
  }

  async remove(id: string) {
    const especie = await this.especieRepository.findOne({ where: { id }, relations: { mascotas: true } });
    if (!especie) throw new NotFoundException('Especie no encontrada');
    if (especie.mascotas && especie.mascotas.length > 0)
      throw new BadRequestException('No se puede eliminar un especie con mascotas activas');
    return this.especieRepository.remove(especie);
  }
}