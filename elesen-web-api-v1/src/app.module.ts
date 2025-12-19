import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

// MAJOR API MODULES - REFACTORED STRUCTURE
// Using the new ApiModule that groups all major/api functionality
import { ApiModule } from './major/api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get<string>('DB_USERNAME', 'root'),
        password: configService.get<string>('DB_PASSWORD', ''),
        database: configService.get<string>('DB_DATABASE', 'elesen2024_dev'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE', false),
        logging: ['error', 'warn', 'query', 'schema']
      }),
      inject: [ConfigService],
    }),

    // MAJOR API MODULE - REFACTORED STRUCTURE
    // This single module contains all major/api functionality:
    // - CoreModule (Auth, Users, FCM)
    // - VesselsGroupModule (Vessels, VesselDetails, VesselListing)
    // - ProfilesGroupModule (ProfileUserDetails)
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}