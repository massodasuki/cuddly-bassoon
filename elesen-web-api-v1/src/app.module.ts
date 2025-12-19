import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AppointmentsLPIModule } from './applications/appointment/appointments/appointments.module';
import { AppointmentsInspectionsModule } from './applications/appointment/appointments-inspections/appointments-inspections.module';
import { CodeMastersModule } from './applications/common/code-masters/code-masters.module';
import { DeviceRegistrationModule } from './applications/common/device-registration/device-registration.module';
import { EntitieModule } from './applications/common/entities/entities.module';
import { DaratVeselLpiFormModule } from './applications/darat/darat-vesel-lpi-form/darat-vesel-lpi-form.module';
import { DaratVesselInspectionModule } from './applications/darat/darat-vessel-inspections/darat-vessel-inspections.module';
import { DaratVesselModule } from './applications/darat/darat-vessels/darat-vessels.module';
import { VesselDetailsModule } from './applications/marin/vessel-details/vessel-details.module';
import { VesselsModule } from './applications/marin/vessels/vessels.module';
import { FcmModule } from './applications/notification/fcm/fcm.module';
import { AuthModule } from './applications/users/auth/auth.module';
import { ProfileUserDetailsModule } from './applications/users/profile-user-details/profile-user-details.module';
import { ProfileUserModule } from './applications/users/profile-users/profile-users.module';
import { UsersModule } from './applications/users/users/users.module';

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

    //APPLICATIONS
    AppointmentsLPIModule,
    AppointmentsInspectionsModule,
    CodeMastersModule,
    DeviceRegistrationModule,
    EntitieModule,
    DaratVeselLpiFormModule,
    DaratVesselInspectionModule,
    DaratVesselModule,
    VesselDetailsModule,
    VesselsModule,
    FcmModule,
    AuthModule,
    ProfileUserDetailsModule,
    ProfileUserModule,
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}
