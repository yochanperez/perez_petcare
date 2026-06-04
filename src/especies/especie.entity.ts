import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mascota } from '../mascotas/mascota.entity';

@Entity('especies')
export class Especie {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  nombre_especie!: string;

  @OneToMany(() => Mascota, (mascotas) => mascotas.especie)
  mascotas: Mascota[] | undefined;
}