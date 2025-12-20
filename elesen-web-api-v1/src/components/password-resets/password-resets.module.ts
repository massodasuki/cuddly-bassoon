import { Module } from '@nestjs/common';
import { PasswordResetService } from './password-resets.service';
import { PasswordResetEntityController } from './password-resets.controller';
import { PasswordResetEntity } from './password-resets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PasswordResetEntity])],
  providers: [PasswordResetService],
  controllers: [PasswordResetEntityController],
  exports: [PasswordResetService],
})
export class PasswordResetModule {}

