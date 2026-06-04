import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PlanesModule } from './especie/especie.module';
import { SociosModule } from './socios/socios.module';
import { ServicesModule } from './services/services.module';
import { EspeciesModule } from './especies/especies.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PlanesModule,
    SociosModule,
    ServicesModule,
    EspeciesModule,
    MascotasModule,
    ServiciosModule,
  ],
})
export class AppModule {}