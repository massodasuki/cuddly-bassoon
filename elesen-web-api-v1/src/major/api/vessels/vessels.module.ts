import { Module } from '@nestjs/common';


@Module({
  imports: [
          TypeOrmModule.forFeature([VesselEntity])
        ],
  controllers: [VesselsController],
  providers: [VesselsService],
})
export class VesselsModule {}
