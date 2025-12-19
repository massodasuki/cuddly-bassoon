// Main API module that groups all major/api functionality
import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ProfilesGroupModule } from './groups/profiles-group.module';
import { VesselsGroupModule } from './groups/vessels-group.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    CoreModule,
    // VesselsGroupModule,
    // ProfilesGroupModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    CoreModule,
    // VesselsGroupModule,
    // ProfilesGroupModule,
  ],
})
export class ApiModule {}