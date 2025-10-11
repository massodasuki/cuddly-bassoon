import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// Entities
import { VesselInspection } from './shared/entities/vessel-inspection.entity';
import { EmpunyaVesel } from './shared/entities/embedded/empunya-vesel.entity';
import { Nakhoda } from './shared/entities/embedded/nakhoda.entity';
import { PenandaanVesel } from './shared/entities/embedded/penandaan-vesel.entity';
import { PukatTunda } from './shared/entities/embedded/pukat-tunda.entity';
import { ButiranVesel } from './shared/entities/embedded/butiran-vesel.entity';
import { ButiranEnjin } from './shared/entities/embedded/butiran-enjin.entity';
import { AlatKeselamatan } from './shared/entities/embedded/alat-keselamatan.entity';
import { PeralatanMenangkap } from './shared/entities/embedded/peralatan-menangkap.entity';
import { PeralatanTambahanUtama } from './shared/entities/embedded/peralatan-tambahan-utama.entity';
import { PeralatanTambahanTambahan } from './shared/entities/embedded/peralatan-tambahan-tambahan.entity';
import { InfoVessel } from './shared/entities/embedded/info-vessel.entity';

// module import
import { LpiFormModule } from './lpi-form/lpi-form.module';
import { BorangLPIModule } from './borang-lpi/borang-lpi.module';


//Base
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { User } from './users/entities/user.entity';
import { SearchModule } from './search/search.module';
import { ImageModule } from './image/image.module';
import { DeviceRegistrationModule } from './device-registration/device-registration.module';
import { Search } from './search/entities/search.entity';
import { DeviceRegistration } from './device-registration/entities/device-registration.entity';
import { PushNotificationModule } from './push-notification/push-notification.module';
import { DigitalIdModule } from './digital-id/digital-id.module';
import { VesselsModule } from './vessels/vessels.module';
import { Vessels } from './vessels/entities/vessel.entity';
import { ProfileUser } from './users/entities/profile-user.entity';
import { CodeMaster } from './users/entities/code-master.entity';
import { Role } from './users/entities/role.entity';
import { Entities } from './users/entities/entities.entity';
import { LpiForm } from './lpi-form/entities/lpi-form.entity';
import { LpiFormImage } from './lpi-form/entities/lpi-form-image.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ProfilePentadbirHartas } from './vessels/entities/profile-pentadbir-hartas.entity';
import { AppointmentModule } from './appointment/appointment.module';
import { Appointment } from './appointment/entities/appointment.entity';
import { ProfileModule } from './profile/profile.module';
import { VesselDetailModule } from './vessel-detail/vessel-detail.module';
import { Profile } from './profile/entities/profile.entity';
import { MaklumatIndividu } from './profile/entities/maklumat-individu.entity';
import { MaklumatKewangan } from './profile/entities/maklumat-kewangan.entity';
import { PengkalanPendaratan } from './profile/entities/pengkalan-pendaratan.entity';
import { Vessel as ProfileVessel } from './profile/entities/vessel.entity';
import { Jeti } from './profile/entities/jeti.entity';
import { AktivitiPenangkapanIkan } from './profile/entities/aktiviti-penangkapan-ikan.entity';
import { Kesalahan as ProfileKesalahan } from './profile/entities/kesalahan.entity';
import { Kesalahan } from './vessels/entities/kesalahan.entity';
import { BorangLPI } from './borang-lpi/entities/borang-lpi.entity';
import { NoPendaftaranVesel } from './borang-lpi/entities/no-pendaftaran-vesel.entity';
import { TandaPenukulBesi } from './borang-lpi/entities/tanda-penukul-besi.entity';
import { TinPlate } from './borang-lpi/entities/tin-plate.entity';
import { RumahKemudi } from './borang-lpi/entities/rumah-kemudi.entity';
import { UkuranDimensiVesel } from './borang-lpi/entities/ukuran-dimensi-vesel.entity';


@Module({
  imports: [
      MulterModule.register({
      dest: './uploads', // Or any destination
    }),
  AuthModule,
  UsersModule,
  JwtModule,
  LpiFormModule,
  BorangLPIModule,
  DeviceRegistrationModule,
  SearchModule,
  ImageModule,
  PushNotificationModule,
  DigitalIdModule,
  VesselsModule,
  AppointmentModule,
  ProfileModule,
  VesselDetailModule,
  ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,       // ⚠️ your database name
      synchronize: false,         // Use migrations instead
      logging: true,
      migrationsRun: false,
      migrations: ['dist/migrations/*.js'],
      entities: [ User,
                  ProfileUser,
                  CodeMaster,
                  Role,
                  Entities,
                  ProfilePentadbirHartas,
                  Vessels,
                  VesselInspection,
                  LpiForm,
                  LpiFormImage,
                  EmpunyaVesel,
                  Nakhoda,
                  PenandaanVesel,
                  PukatTunda,
                  ButiranVesel,
                  ButiranEnjin,
                  AlatKeselamatan,
                  PeralatanMenangkap,
                  PeralatanTambahanUtama,
                  PeralatanTambahanTambahan,
                  InfoVessel,
                  Search,
                  DeviceRegistration,
                  Appointment,
                  Profile,
                  MaklumatIndividu,
                  MaklumatKewangan,
                  PengkalanPendaratan,
                  ProfileVessel,
                  Jeti,
                  AktivitiPenangkapanIkan,
                  ProfileKesalahan,
                  Kesalahan,
                  BorangLPI,
                  NoPendaftaranVesel,
                  TandaPenukulBesi,
                  TinPlate,
                  RumahKemudi,
                  UkuranDimensiVesel,
                ]}),
  
 
              ],
  controllers: [AppController],
  providers: [AppService, AuthService],
  
})

export class AppModule {}
