import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascota } from './mascota.entity';
import { Especie } from '../especies/especie.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Mascota)
    private readonly mascotasRepository: Repository<Mascota>,

    @InjectRepository(Especie)
    private readonly especieRepository: Repository<Especie>,
  ) {}

  async create(createMascotaDto: CreateMascotaDto) {
  if (!createMascotaDto.especieId) {
    throw new BadRequestException('El campo especieId es obligatorio.');
  }

  const especie = await this.especieRepository.findOne({ where: { id: createMascotaDto.especieId } });
  if (!especie) throw new NotFoundException('Especie no encontrada');

  const Mascota = this.mascotasRepository.create({
    nombre:          createMascotaDto.nombre,
    peso_kg:         createMascotaDto.peso_kg,
    edad_años:       createMascotaDto.edad_años ?? 0,
    estado_vacunado: createMascotaDto.estado_vacunado ?? true,
    especie:         especie,
  });
  
  return this.mascotasRepository.save(Mascota);
}

  findAll() {
    return this.mascotasRepository.find();
  }

  async findOne(id: string) {
    const Mascotas = await this.mascotasRepository.findOne({ where: { id } });
    if (!Mascotas) throw new NotFoundException('Mascotas no encontrado');
    return Mascotas;
  }

  async update(id: string, updateMascotaDto: UpdateMascotaDto) {
    const mascotas = await this.findOne(id);

    if (updateMascotaDto.especieId) {
      const especie = await this.especieRepository.findOne({ where: { id: updateMascotaDto.especieId } });
      if (!especie) throw new NotFoundException('Especie no encontrada');
      mascotas.especie = especie;
    }

    Object.assign(mascotas, updateMascotaDto);
    return this.mascotasRepository.save(mascotas);
  }

  async remove(id: string) {
    const Mascotas = await this.findOne(id);
    return this.mascotasRepository.remove(Mascotas);
  }
}