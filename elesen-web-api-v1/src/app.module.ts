import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AmPangkalanModule } from './am-pangkalan/am-pangkalan.module';
import { AmVesselModule } from './am-vessel/am-vessel.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { ApplicationEshNdModule } from './application-esh-nd/application-esh-nd.module';
import { ApplicationEshNdDokumenModule } from './application-esh-nd-dokumen/application-esh-nd-dokumen.module';
import { ApplicationV2ProfileUserModule } from './application-v2-profile-user/application-v2-profile-user.module';
import { ApplicationV2VesselModule } from './application-v2-vessel/application-v2-vessel.module';
import { ApplicationsModule } from './applications/applications.module';
import { ApplicationsV2Module } from './applications-v2/applications-v2.module';
import { AppointmentApprovesModule } from './appointment-approves/appointment-approves.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ApprovalsModule } from './approvals/approvals.module';
import { AttachmentsModule } from './attachments/attachments.module';

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
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AmPangkalanModule,
    AmVesselModule,
    AnnouncementsModule,
    ApplicationEshNdModule,
    ApplicationEshNdDokumenModule,
    ApplicationV2ProfileUserModule,
    ApplicationV2VesselModule,
    ApplicationsModule,
    ApplicationsV2Module,
    AppointmentApprovesModule,
    AppointmentsModule,
    ApprovalsModule,
    AttachmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
