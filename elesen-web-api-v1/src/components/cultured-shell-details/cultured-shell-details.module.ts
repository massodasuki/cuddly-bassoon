import { Module } from '@nestjs/common';
import { CulturedShellDetailService } from './cultured-shell-details.service';
import { CulturedShellDetailEntityController } from './cultured-shell-details.controller';
import { CulturedShellDetailEntity } from './cultured-shell-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CulturedShellDetailEntity])],
  providers: [CulturedShellDetailService],
  controllers: [CulturedShellDetailEntityController],
  exports: [CulturedShellDetailService],
})
export class CulturedShellDetailModule {}
