import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Especie } from '../especies/especie.entity';

@Entity('mascotas')
export class Mascota {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Especie, (especies) => especies.mascotas, { eager: true, onDelete: 'RESTRICT' })
  especie!: Especie;

  @Column()
  nombre!: string;

  @Column({type: 'decimal', scale: 2})
  peso_kg!: number;

  @Column({ type: 'int' })
  edad_años!: number;

  @Column()
  estado_vacunado!: boolean;

}