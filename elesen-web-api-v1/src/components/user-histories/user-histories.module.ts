import { Module } from '@nestjs/common';
import { UserHistorieService } from './user-histories.service';
import { UserHistorieEntityController } from './user-histories.controller';
import { UserHistorieEntity } from './user-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserHistorieEntity])],
  providers: [UserHistorieService],
  controllers: [UserHistorieEntityController],
  exports: [UserHistorieService],
})
export class UserHistorieModule {}
