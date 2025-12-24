import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { Applications } from './entities/applications.entity';
import { Inspections } from './entities/inspections.entity';
import { DaratVessels } from './entities/darat-vessels.entity';
import { DaratVesselInspections } from './entities/darat-vessel-inspections.entity';
import { Vessels } from './entities/vessels.entity';
import { UsersModule } from '../users/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Applications, Inspections, DaratVessels, DaratVesselInspections, Vessels]),
    UsersModule,
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}