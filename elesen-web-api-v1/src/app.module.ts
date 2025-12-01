import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AmPangkalanModule } from './components/am-pangkalan/am-pangkalan.module';
import { AmVesselModule } from './components/am-vessel/am-vessel.module';
import { AnnouncementModule } from './components/announcements/announcements.module';
import { ApplicationEshNdModule } from './components/application-esh-nd/application-esh-nd.module';
import { ApplicationEshNdDokumenModule } from './components/application-esh-nd-dokumen/application-esh-nd-dokumen.module';
import { ApplicationV2ProfileUserModule } from './components/application-v2-profile-user/application-v2-profile-user.module';
import { ApplicationV2VesselModule } from './components/application-v2-vessel/application-v2-vessel.module';
import { ApplicationModule } from './components/applications/applications.module';
import { ApplicationsV2Module } from './components/applications-v2/applications-v2.module';
import { AppointmentApprovesModule } from './components/appointment-approves/appointment-approves.module';
import { AppointmentsModule } from './components/appointments/appointments.module';
import { ApprovalsModule } from './components/approvals/approvals.module';
import { AttachmentsModule } from './components/attachments/attachments.module';
import { AuditLogsModule } from './components/audit-logs/audit-logs.module';
import { AuditsModule } from './components/audits/audits.module';
import { CatchingLocationNdsModule } from './components/catching-location-nds/catching-location-nds.module';
import { CfgLicensesModule } from './components/cfg-licenses/cfg-licenses.module';
import { CmEquipmentModule } from './components/cm-equipment/cm-equipment.module';
import { CodeMastersModule } from './components/code-masters/code-masters.module';
import { ComplaintLogModule } from './components/complaint-logs/complaint-logs.module';
import { ComplaintModule } from './components/complaints/complaints.module';
import { ConfiscationModule } from './components/confiscation/confiscation.module';
import { ConfiscationDocModule } from './components/confiscation-docs/confiscation-docs.module';
import { CulturedShellDetailModule } from './components/cultured-shell-details/cultured-shell-details.module';
import { CulturedShellHistorieModule } from './components/cultured-shell-histories/cultured-shell-histories.module';
import { CulturedShellModule } from './components/cultured-shells/cultured-shells.module';
import { DaratApplicationApprovedModule } from './components/darat-application-approveds/darat-application-approveds.module';
import { DaratApplicationLogModule } from './components/darat-application-logs/darat-application-logs.module';
import { DaratApplicationTempModule } from './components/darat-application-temps/darat-application-temps.module';
import { DaratApplicationModule } from './components/darat-applications/darat-applications.module';
import { DaratBaseJettieModule } from './components/darat-base-jetties/darat-base-jetties.module';
import { DaratBaseJettyHistorieModule } from './components/darat-base-jetty-histories/darat-base-jetty-histories.module';
import { DaratDocumentModule } from './components/darat-documents/darat-documents.module';
import { DaratEquipmentListModule } from './components/darat-equipment-lists/darat-equipment-lists.module';
import { DaratFaultRecordModule } from './components/darat-fault-records/darat-fault-records.module';
import { DaratHelpAgencyFishermanModule } from './components/darat-help-agency-fishermans/darat-help-agency-fishermans.module';
import { DaratInspectionEquipmentModule } from './components/darat-inspection-equipments/darat-inspection-equipments.module';
import { DaratItemFoundModule } from './components/darat-item-founds/darat-item-founds.module';
import { DaratPaymentReceiptItemModule } from './components/darat-payment-receipt-items/darat-payment-receipt-items.module';
import { DaratPaymentReceiptModule } from './components/darat-payment-receipts/darat-payment-receipts.module';
import { DaratTemporaryPinModule } from './components/darat-temporary-pins/darat-temporary-pins.module';
import { DaratUserDetailModule } from './components/darat-user-details/darat-user-details.module';
import { DaratUserEquipmentHistorieModule } from './components/darat-user-equipment-histories/darat-user-equipment-histories.module';
import { DaratUserEquipmentModule } from './components/darat-user-equipments/darat-user-equipments.module';
import { DaratUserFishermanInfoModule } from './components/darat-user-fisherman-infos/darat-user-fisherman-infos.module';
import { DaratVesselDisposalModule } from './components/darat-vessel-disposals/darat-vessel-disposals.module';
import { DaratVesselEngineHistorieModule } from './components/darat-vessel-engine-histories/darat-vessel-engine-histories.module';
import { DaratVesselEngineModule } from './components/darat-vessel-engines/darat-vessel-engines.module';
import { DaratVesselHistorieModule } from './components/darat-vessel-histories/darat-vessel-histories.module';
import { DaratVesselHullHistorieModule } from './components/darat-vessel-hull-histories/darat-vessel-hull-histories.module';
import { DaratVesselHullModule } from './components/darat-vessel-hulls/darat-vessel-hulls.module';
import { DaratVesselInspectionModule } from './components/darat-vessel-inspections/darat-vessel-inspections.module';
import { DaratVesselModule } from './components/darat-vessels/darat-vessels.module';
import { EnjinModule } from './components/enjin/enjin.module';
import { EntitieModule } from './components/entities/entities.module';
import { EshndQuotaModule } from './components/eshnd-quotas/eshnd-quotas.module';
import { FailedJobModule } from './components/failed-jobs/failed-jobs.module';
import { FishCatchNdModule } from './components/fish-catch-nds/fish-catch-nds.module';
import { FishLandingNdModule } from './components/fish-landing-nds/fish-landing-nds.module';
import { FishSpeciesNdModule } from './components/fish-species-nds/fish-species-nds.module';
import { FishingLogNdModule } from './components/fishing-log-nds/fishing-log-nds.module';
import { ForeignCrewModule } from './components/foreign-crews/foreign-crews.module';
import { HebahanModule } from './components/hebahans/hebahans.module';
import { ImmigrationGateModule } from './components/immigration-gates/immigration-gates.module';
import { ImmigrationOfficeModule } from './components/immigration-offices/immigration-offices.module';
import { JettieModule } from './components/jetties/jetties.module';
import { KesalahanModule } from './components/kesalahan/kesalahan.module';
import { KruModule } from './components/kru/kru.module';
import { KruApplicationDocumentModule } from './components/kru-application-documents/kru-application-documents.module';
import { KruApplicationForeignKruModule } from './components/kru-application-foreign-krus/kru-application-foreign-krus.module';
import { KruApplicationForeignModule } from './components/kru-application-foreigns/kru-application-foreigns.module';
import { KruApplicationKruModule } from './components/kru-application-krus/kru-application-krus.module';
import { KruApplicationLogModule } from './components/kru-application-logs/kru-application-logs.module';
import { KruApplicationTypeModule } from './components/kru-application-types/kru-application-types.module';
import { KruApplicationModule } from './components/kru-applications/kru-applications.module';
import { KruDocumentModule } from './components/kru-documents/kru-documents.module';
import { KruForeignDocumentModule } from './components/kru-foreign-documents/kru-foreign-documents.module';
import { Kru01ApplicationModule } from './components/kru01-applications/kru01-applications.module';
import { Kru04ApplicationModule } from './components/kru04-applications/kru04-applications.module';
import { KulitModule } from './components/kulit/kulit.module';
import { LandingActivitySpecieModule } from './components/landing-activity-species/landing-activity-species.module';
import { LandingActivityTypeModule } from './components/landing-activity-types/landing-activity-types.module';
import { LandingDeclarationLogModule } from './components/landing-declaration-logs/landing-declaration-logs.module';
import { LandingDeclarationMonthlieModule } from './components/landing-declaration-monthlies/landing-declaration-monthlies.module';
import { LandingDeclarationModule } from './components/landing-declarations/landing-declarations.module';
import { LandingDeclareMonthlyLogModule } from './components/landing-declare-monthly-logs/landing-declare-monthly-logs.module';
import { LandingDocumentModule } from './components/landing-documents/landing-documents.module';
import { LandingInfoActivitieModule } from './components/landing-info-activities/landing-info-activities.module';
import { LandingInfoModule } from './components/landing-infos/landing-infos.module';
import { LandingMonthlyDocumentModule } from './components/landing-monthly-documents/landing-monthly-documents.module';
import { LandingWaterTypeModule } from './components/landing-water-types/landing-water-types.module';
import { LesenModule } from './components/lesen/lesen.module';
import { ListingPendaratanModule } from './components/listing-pendaratan/listing-pendaratan.module';
import { MaklumatSyarikatModule } from './components/maklumat-syarikats/maklumat-syarikats.module';
import { MigrationModule } from './components/migrations/migrations.module';
import { ModulesModule } from './components/modules/modules.module';
import { Modules_20250312Module } from './components/modules-20250312/modules-20250312.module';
import { MuatanModule } from './components/muatan/muatan.module';
import { NelayanMarinModule } from './components/nelayan-marins/nelayan-marins.module';
import { ParliamentSeatModule } from './components/parliament-seats/parliament-seats.module';
import { ParliamentModule } from './components/parliaments/parliaments.module';
import { PasswordResetModule } from './components/password-resets/password-resets.module';
import { PaymentModule } from './components/payments/payments.module';
import { PekelilingModule } from './components/pekelilings/pekelilings.module';
import { PematuhanModule } from './components/pematuhan/pematuhan.module';
import { PemilikanModule } from './components/pemilikan/pemilikan.module';
import { PendaftaranAntarabangsaModule } from './components/pendaftaran-antarabangsa/pendaftaran-antarabangsa.module';
import { PendaftaranPerniagaanModule } from './components/pendaftaran-perniagaans/pendaftaran-perniagaans.module';
import { PengesahanModule } from './components/pengesahan/pengesahan.module';
import { PenglibatanSyarikatModule } from './components/penglibatan-syarikats/penglibatan-syarikats.module';
import { PermohonanModule } from './components/permohonans/permohonans.module';
import { PersonalAccessTokenModule } from './components/personal-access-tokens/personal-access-tokens.module';
import { ProfileCompanieModule } from './components/profile-companies/profile-companies.module';
import { ProfileCompanyAccountModule } from './components/profile-company-accounts/profile-company-accounts.module';
import { ProfileCompanyAlpModule } from './components/profile-company-alps/profile-company-alps.module';
import { ProfileCompanyAssetModule } from './components/profile-company-assets/profile-company-assets.module';
import { ProfilePengusahaSklModule } from './components/profile-pengusaha-skls/profile-pengusaha-skls.module';
import { ProfilePentadbirHartaVesselModule } from './components/profile-pentadbir-harta-vessel/profile-pentadbir-harta-vessel.module';
import { ProfilePentadbirHartaModule } from './components/profile-pentadbir-hartas/profile-pentadbir-hartas.module';
import { ProfilePentadbirSklModule } from './components/profile-pentadbir-skls/profile-pentadbir-skls.module';
import { ProfileUserVesselModule } from './components/profile-user-vessel/profile-user-vessel.module';
import { ProfileUserModule } from './components/profile-users/profile-users.module';
import { ReceiptItemModule } from './components/receipt-items/receipt-items.module';
import { ReceiptModule } from './components/receipts/receipts.module';
import { ReferenceNumberModule } from './components/reference-numbers/reference-numbers.module';
import { RiverModule } from './components/rivers/rivers.module';
import { RoleModuleModule } from './components/role-module/role-module.module';
import { RoleModule } from './components/roles/roles.module';
import { SalesRecordNdModule } from './components/sales-record-nds/sales-record-nds.module';
import { SampleAreaApplicationDetailModule } from './components/sample-area-application-details/sample-area-application-details.module';
import { SampleAreaApplicationHistorieModule } from './components/sample-area-application-histories/sample-area-application-histories.module';
import { SampleAreaApplicationModule } from './components/sample-area-applications/sample-area-applications.module';
import { SampleAreaHistorieModule } from './components/sample-area-histories/sample-area-histories.module';
import { SampleAreaItemModule } from './components/sample-area-items/sample-area-items.module';
import { SampleAreaLocationModule } from './components/sample-area-locations/sample-area-locations.module';
import { SampleAreaNoticeModule } from './components/sample-area-notices/sample-area-notices.module';
import { SampleAreaReportModule } from './components/sample-area-reports/sample-area-reports.module';
import { SampleAreaModule } from './components/sample-areas/sample-areas.module';
import { SerialNumberModule } from './components/serial-numbers/serial-numbers.module';
import { ShellsQuotaModule } from './components/shells-quota/shells-quota.module';
import { ShellsQuotaHistorieModule } from './components/shells-quota-histories/shells-quota-histories.module';
import { ShellsQuotaPaymentDetailModule } from './components/shells-quota-payment-details/shells-quota-payment-details.module';
import { ShellsQuotaPaymentModule } from './components/shells-quota-payments/shells-quota-payments.module';
import { SpecieModule } from './components/species/species.module';
import { SsdModule } from './components/ssds/ssds.module';
import { StateOfficeMappingModule } from './components/state-office-mappings/state-office-mappings.module';
import { SubsistenceApplicationModule } from './components/subsistence-application/subsistence-application.module';
import { SubsistenceAuditLogStatuModule } from './components/subsistence-audit-log-status/subsistence-audit-log-status.module';
import { SubsistenceDocModule } from './components/subsistence-doc/subsistence-doc.module';
import { SubsistenceListModule } from './components/subsistence-list/subsistence-list.module';
import { SubsistenceListHqModule } from './components/subsistence-list-hqs/subsistence-list-hqs.module';
import { SubsistenceListQuotaModule } from './components/subsistence-list-quota/subsistence-list-quota.module';
import { SubsistenceListQuotaHqModule } from './components/subsistence-list-quota-hqs/subsistence-list-quota-hqs.module';
import { SubsistencePaymentHqModule } from './components/subsistence-payment-hqs/subsistence-payment-hqs.module';
import { SubsistencePaymentPayeeModule } from './components/subsistence-payment-payees/subsistence-payment-payees.module';
import { SubsistencePaymentStateModule } from './components/subsistence-payment-states/subsistence-payment-states.module';
import { SubsistencePaymentModule } from './components/subsistence-payments/subsistence-payments.module';
import { UserHistorieModule } from './components/user-histories/user-histories.module';
import { UserModuleModule } from './components/user-module/user-module.module';
import { UserRoleModule } from './components/user-role/user-role.module';
import { UserModule } from './components/users/users.module';
import { VesselModule } from './components/vessels/vessels.module';


//MAJOR
import { ProfileUserDetailsModule } from './major/profile-user-details/profile-user-details.module';
import { DeviceRegistrationModule } from './major/device-registration/device-registration.module';
import { UsersModule } from './major/users/users.module';
import { AuthModule } from './major/auth/auth.module';
import { VesselsModule } from './major/vessels/vessels.module';
import { VesselDetailsModule } from './major/vessel-details/vessel-details.module';
import { DaratApplicationsModule } from './major/darat-applications/darat-applications.module';
import { DaratVeselLpiFormModule } from './major/darat-vesel-lpi-form/darat-vesel-lpi-form.module';
import { DaratVeselLpiFormV1Module } from './major/darat-vesel-lpi-form-v1/darat-vesel-lpi-form-v1.module';
import { AppointmentsLPIModule } from './major/appointments/appointments.module';
import { AppointmentsInspectionsModule } from './major/appointments-inspections/appointments-inspections.module';

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

    //COMPONENTS
    AmPangkalanModule,
    AmVesselModule,
    AnnouncementModule,
    ApplicationEshNdModule,
    ApplicationEshNdDokumenModule,
    ApplicationV2ProfileUserModule,
    ApplicationV2VesselModule,
    ApplicationModule,
    ApplicationsV2Module,
    AppointmentApprovesModule,
    AppointmentsModule,
    ApprovalsModule,
    AttachmentsModule,
    AuditLogsModule,
    AuditsModule,
    CatchingLocationNdsModule,
    CfgLicensesModule,
    CmEquipmentModule,
    CodeMastersModule,
    ComplaintLogModule,
    ComplaintModule,
    ConfiscationModule,
    ConfiscationDocModule,
    CulturedShellDetailModule,
    CulturedShellHistorieModule,
    CulturedShellModule,
    DaratApplicationApprovedModule,
    DaratApplicationLogModule,
    DaratApplicationTempModule,
    DaratApplicationModule,
    DaratBaseJettieModule,
    DaratBaseJettyHistorieModule,
    DaratDocumentModule,
    DaratEquipmentListModule,
    DaratFaultRecordModule,
    DaratHelpAgencyFishermanModule,
    DaratInspectionEquipmentModule,
    DaratItemFoundModule,
    DaratPaymentReceiptItemModule,
    DaratPaymentReceiptModule,
    DaratTemporaryPinModule,
    DaratUserDetailModule,
    DaratUserEquipmentHistorieModule,
    DaratUserEquipmentModule,
    DaratUserFishermanInfoModule,
    DaratVesselDisposalModule,
    DaratVesselEngineHistorieModule,
    DaratVesselEngineModule,
    DaratVesselHistorieModule,
    DaratVesselHullHistorieModule,
    DaratVesselHullModule,
    DaratVesselInspectionModule,
    DaratVesselModule,
    EnjinModule,
    EntitieModule,
    EshndQuotaModule,
    FailedJobModule,
    FishCatchNdModule,
    FishLandingNdModule,
    FishSpeciesNdModule,
    FishingLogNdModule,
    ForeignCrewModule,
    HebahanModule,
    ImmigrationGateModule,
    ImmigrationOfficeModule,
    JettieModule,
    KesalahanModule,
    KruModule,
    KruApplicationDocumentModule,
    KruApplicationForeignKruModule,
    KruApplicationForeignModule,
    KruApplicationKruModule,
    KruApplicationLogModule,
    KruApplicationTypeModule,
    KruApplicationModule,
    KruDocumentModule,
    KruForeignDocumentModule,
    Kru01ApplicationModule,
    Kru04ApplicationModule,
    KulitModule,
    LandingActivitySpecieModule,
    LandingActivityTypeModule,
    LandingDeclarationLogModule,
    LandingDeclarationMonthlieModule,
    LandingDeclarationModule,
    LandingDeclareMonthlyLogModule,
    LandingDocumentModule,
    LandingInfoActivitieModule,
    LandingInfoModule,
    LandingMonthlyDocumentModule,
    LandingWaterTypeModule,
    LesenModule,
    ListingPendaratanModule,
    MaklumatSyarikatModule,
    MigrationModule,
    ModulesModule,
    Modules_20250312Module,
    MuatanModule,
    NelayanMarinModule,
    ParliamentSeatModule,
    ParliamentModule,
    PasswordResetModule,
    PaymentModule,
    PekelilingModule,
    PematuhanModule,
    PemilikanModule,
    PendaftaranAntarabangsaModule,
    PendaftaranPerniagaanModule,
    PengesahanModule,
    PenglibatanSyarikatModule,
    PermohonanModule,
    PersonalAccessTokenModule,
    ProfileCompanieModule,
    ProfileCompanyAccountModule,
    ProfileCompanyAlpModule,
    ProfileCompanyAssetModule,
    ProfilePengusahaSklModule,
    ProfilePentadbirHartaVesselModule,
    ProfilePentadbirHartaModule,
    ProfilePentadbirSklModule,
    ProfileUserVesselModule,
    ProfileUserModule,
    ReceiptItemModule,
    ReceiptModule,
    ReferenceNumberModule,
    RiverModule,
    RoleModuleModule,
    RoleModule,
    SalesRecordNdModule,
    SampleAreaApplicationDetailModule,
    SampleAreaApplicationHistorieModule,
    SampleAreaApplicationModule,
    SampleAreaHistorieModule,
    SampleAreaItemModule,
    SampleAreaLocationModule,
    SampleAreaNoticeModule,
    SampleAreaReportModule,
    SampleAreaModule,
    SerialNumberModule,
    ShellsQuotaModule,
    ShellsQuotaHistorieModule,
    ShellsQuotaPaymentDetailModule,
    ShellsQuotaPaymentModule,
    SpecieModule,
    SsdModule,
    StateOfficeMappingModule,
    SubsistenceApplicationModule,
    SubsistenceAuditLogStatuModule,
    SubsistenceDocModule,
    SubsistenceListModule,
    SubsistenceListHqModule,
    SubsistenceListQuotaModule,
    SubsistenceListQuotaHqModule,
    SubsistencePaymentHqModule,
    SubsistencePaymentPayeeModule,
    SubsistencePaymentStateModule,
    SubsistencePaymentModule,
    UserHistorieModule,
    UserModuleModule,
    UserRoleModule,
    UserModule,
    VesselModule,

    //MAJOR
    AuthModule,
    DeviceRegistrationModule,
    UsersModule,
    ProfileUserDetailsModule,
    VesselsModule,
    VesselDetailsModule,
    DaratApplicationsModule,
    DaratVeselLpiFormModule,
    DaratVeselLpiFormV1Module,
    AppointmentsLPIModule,
    AppointmentsInspectionsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}
