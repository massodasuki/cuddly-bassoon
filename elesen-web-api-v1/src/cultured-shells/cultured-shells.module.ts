import { Module } from '@nestjs/common';
import { CulturedShellService } from './cultured-shells.service';
import { CulturedShellEntityController } from './cultured-shells.controller';
import { CulturedShellEntity } from './cultured-shells.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CulturedShellEntity])],
  providers: [CulturedShellService],
  controllers: [CulturedShellEntityController],
  exports: [CulturedShellService],
})
export class CulturedShellModule {}
