import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmPangkalanService } from './am-pangkalan.service';
import { AmPangkalanController } from './am-pangkalan.controller';
import { AmPangkalan } from './am-pangkalan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AmPangkalan])],
  controllers: [AmPangkalanController],
  providers: [AmPangkalanService],
  exports: [AmPangkalanService],
})
export class AmPangkalanModule {}
