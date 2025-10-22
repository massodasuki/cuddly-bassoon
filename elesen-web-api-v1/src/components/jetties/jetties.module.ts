import { Module } from '@nestjs/common';
import { JettieService } from './jetties.service';
import { JettieEntityController } from './jetties.controller';
import { JettieEntity } from './jetties.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JettieEntity])],
  providers: [JettieService],
  controllers: [JettieEntityController],
  exports: [JettieService],
})
export class JettieModule {}
