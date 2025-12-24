import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { Applications } from './entities/applications.entity';
import { Inspections } from './entities/inspections.entity';
import { Vessels } from './entities/vessels.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Applications, Inspections, Vessels]),
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}