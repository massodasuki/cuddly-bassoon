import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationService } from './applications.service';
import { ApplicationEntityController } from './applications.controller';
import { ApplicationEntity } from './application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity])],
  controllers: [ApplicationEntityController],
  providers: [ApplicationService],
  exports: [ApplicationService],
})
export class ApplicationModule {}