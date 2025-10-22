import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AmPangkalanModule } from './am-pangkalan/am-pangkalan.module';
import { AmVesselModule } from './am-vessel/am-vessel.module';
import { AnnouncementModule } from './announcements/announcements.module';
import { ApplicationEshNdModule } from './application-esh-nd/application-esh-nd.module';
import { ApplicationEshNdDokumenModule } from './application-esh-nd-dokumen/application-esh-nd-dokumen.module';
import { ApplicationV2ProfileUserModule } from './application-v2-profile-user/application-v2-profile-user.module';
import { ApplicationV2VesselModule } from './application-v2-vessel/application-v2-vessel.module';
import { ApplicationModule } from './applications/applications.module';
import { ApplicationsV2Module } from './applications-v2/applications-v2.module';
import { AppointmentApprovesModule } from './appointment-approves/appointment-approves.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ApprovalsModule } from './approvals/approvals.module';
import { AttachmentsModule } from './attachments/attachments.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { AuditsModule } from './audits/audits.module';
import { CatchingLocationNdsModule } from './catching-location-nds/catching-location-nds.module';
import { CfgLicensesModule } from './cfg-licenses/cfg-licenses.module';
import { CmEquipmentModule } from './cm-equipment/cm-equipment.module';
import { CodeMastersModule } from './code-masters/code-masters.module';
import { ComplaintLogModule } from './complaint-logs/complaint-logs.module';
import { ComplaintModule } from './complaints/complaints.module';
import { ConfiscationModule } from './confiscation/confiscation.module';
import { ConfiscationDocModule } from './confiscation-docs/confiscation-docs.module';
import { CulturedShellDetailModule } from './cultured-shell-details/cultured-shell-details.module';
import { CulturedShellHistorieModule } from './cultured-shell-histories/cultured-shell-histories.module';
import { CulturedShellModule } from './cultured-shells/cultured-shells.module';
import { DaratApplicationApprovedModule } from './darat-application-approveds/darat-application-approveds.module';
import { DaratApplicationLogModule } from './darat-application-logs/darat-application-logs.module';
import { DaratApplicationTempModule } from './darat-application-temps/darat-application-temps.module';
import { DaratApplicationModule } from './darat-applications/darat-applications.module';
import { DaratBaseJettieModule } from './darat-base-jetties/darat-base-jetties.module';
import { DaratBaseJettyHistorieModule } from './darat-base-jetty-histories/darat-base-jetty-histories.module';
import { DaratDocumentModule } from './darat-documents/darat-documents.module';
import { DaratEquipmentListModule } from './darat-equipment-lists/darat-equipment-lists.module';
import { DaratFaultRecordModule } from './darat-fault-records/darat-fault-records.module';
import { DaratHelpAgencyFishermanModule } from './darat-help-agency-fishermans/darat-help-agency-fishermans.module';
import { DaratInspectionEquipmentModule } from './darat-inspection-equipments/darat-inspection-equipments.module';
import { DaratItemFoundModule } from './darat-item-founds/darat-item-founds.module';
import { DaratPaymentReceiptItemModule } from './darat-payment-receipt-items/darat-payment-receipt-items.module';
import { DaratPaymentReceiptModule } from './darat-payment-receipts/darat-payment-receipts.module';
import { DaratTemporaryPinModule } from './darat-temporary-pins/darat-temporary-pins.module';
import { DaratUserDetailModule } from './darat-user-details/darat-user-details.module';
import { DaratUserEquipmentHistorieModule } from './darat-user-equipment-histories/darat-user-equipment-histories.module';
import { DaratUserEquipmentModule } from './darat-user-equipments/darat-user-equipments.module';
import { DaratUserFishermanInfoModule } from './darat-user-fisherman-infos/darat-user-fisherman-infos.module';
import { DaratVesselDisposalModule } from './darat-vessel-disposals/darat-vessel-disposals.module';
import { DaratVesselEngineHistorieModule } from './darat-vessel-engine-histories/darat-vessel-engine-histories.module';
import { DaratVesselEngineModule } from './darat-vessel-engines/darat-vessel-engines.module';
import { DaratVesselHistorieModule } from './darat-vessel-histories/darat-vessel-histories.module';
import { DaratVesselHullHistorieModule } from './darat-vessel-hull-histories/darat-vessel-hull-histories.module';
import { DaratVesselHullModule } from './darat-vessel-hulls/darat-vessel-hulls.module';
import { DaratVesselInspectionModule } from './darat-vessel-inspections/darat-vessel-inspections.module';
import { DaratVesselModule } from './darat-vessels/darat-vessels.module';
import { EnjinModule } from './enjin/enjin.module';
import { EntitieModule } from './entities/entities.module';
import { EshndQuotaModule } from './eshnd-quotas/eshnd-quotas.module';
import { FailedJobModule } from './failed-jobs/failed-jobs.module';
import { FishCatchNdModule } from './fish-catch-nds/fish-catch-nds.module';
import { FishLandingNdModule } from './fish-landing-nds/fish-landing-nds.module';
import { FishSpeciesNdModule } from './fish-species-nds/fish-species-nds.module';
import { FishingLogNdModule } from './fishing-log-nds/fishing-log-nds.module';
import { ForeignCrewModule } from './foreign-crews/foreign-crews.module';
import { HebahanModule } from './hebahans/hebahans.module';
import { ImmigrationGateModule } from './immigration-gates/immigration-gates.module';
import { ImmigrationOfficeModule } from './immigration-offices/immigration-offices.module';
import { JettieModule } from './jetties/jetties.module';
import { KesalahanModule } from './kesalahan/kesalahan.module';
import { KruModule } from './kru/kru.module';
import { KruApplicationDocumentModule } from './kru-application-documents/kru-application-documents.module';
import { KruApplicationForeignKruModule } from './kru-application-foreign-krus/kru-application-foreign-krus.module';
import { KruApplicationForeignModule } from './kru-application-foreigns/kru-application-foreigns.module';
import { KruApplicationKruModule } from './kru-application-krus/kru-application-krus.module';
import { KruApplicationLogModule } from './kru-application-logs/kru-application-logs.module';
import { KruApplicationTypeModule } from './kru-application-types/kru-application-types.module';
import { KruApplicationModule } from './kru-applications/kru-applications.module';
import { KruDocumentModule } from './kru-documents/kru-documents.module';
import { KruForeignDocumentModule } from './kru-foreign-documents/kru-foreign-documents.module';
import { Kru01ApplicationModule } from './kru01-applications/kru01-applications.module';
import { Kru04ApplicationModule } from './kru04-applications/kru04-applications.module';
import { KulitModule } from './kulit/kulit.module';
import { LandingActivitySpecieModule } from './landing-activity-species/landing-activity-species.module';
import { LandingActivityTypeModule } from './landing-activity-types/landing-activity-types.module';
import { LandingDeclarationLogModule } from './landing-declaration-logs/landing-declaration-logs.module';
import { LandingDeclarationMonthlieModule } from './landing-declaration-monthlies/landing-declaration-monthlies.module';
import { LandingDeclarationModule } from './landing-declarations/landing-declarations.module';
import { LandingDeclareMonthlyLogModule } from './landing-declare-monthly-logs/landing-declare-monthly-logs.module';
import { LandingDocumentModule } from './landing-documents/landing-documents.module';
import { LandingInfoActivitieModule } from './landing-info-activities/landing-info-activities.module';
import { LandingInfoModule } from './landing-infos/landing-infos.module';
import { LandingMonthlyDocumentModule } from './landing-monthly-documents/landing-monthly-documents.module';
import { LandingWaterTypeModule } from './landing-water-types/landing-water-types.module';
import { LesenModule } from './lesen/lesen.module';
import { ListingPendaratanModule } from './listing-pendaratan/listing-pendaratan.module';
import { MaklumatSyarikatModule } from './maklumat-syarikats/maklumat-syarikats.module';
import { MigrationModule } from './migrations/migrations.module';
import { ModulesModule } from './modules/modules.module';
import { Modules_20250312Module } from './modules-20250312/modules-20250312.module';
import { MuatanModule } from './muatan/muatan.module';
import { NelayanMarinModule } from './nelayan-marins/nelayan-marins.module';
import { ParliamentSeatModule } from './parliament-seats/parliament-seats.module';
import { ParliamentModule } from './parliaments/parliaments.module';
import { PasswordResetModule } from './password-resets/password-resets.module';
import { PaymentModule } from './payments/payments.module';
import { PekelilingModule } from './pekelilings/pekelilings.module';
import { PematuhanModule } from './pematuhan/pematuhan.module';
import { PemilikanModule } from './pemilikan/pemilikan.module';
import { PendaftaranAntarabangsaModule } from './pendaftaran-antarabangsa/pendaftaran-antarabangsa.module';
import { PendaftaranPerniagaanModule } from './pendaftaran-perniagaans/pendaftaran-perniagaans.module';
import { PengesahanModule } from './pengesahan/pengesahan.module';
import { PenglibatanSyarikatModule } from './penglibatan-syarikats/penglibatan-syarikats.module';
import { PermohonanModule } from './permohonans/permohonans.module';
import { PersonalAccessTokenModule } from './personal-access-tokens/personal-access-tokens.module';
import { ProfileCompanieModule } from './profile-companies/profile-companies.module';
import { ProfileCompanyAccountModule } from './profile-company-accounts/profile-company-accounts.module';
import { ProfileCompanyAlpModule } from './profile-company-alps/profile-company-alps.module';
import { ProfileCompanyAssetModule } from './profile-company-assets/profile-company-assets.module';
import { ProfilePengusahaSklModule } from './profile-pengusaha-skls/profile-pengusaha-skls.module';
import { ProfilePentadbirHartaVesselModule } from './profile-pentadbir-harta-vessel/profile-pentadbir-harta-vessel.module';
import { ProfilePentadbirHartaModule } from './profile-pentadbir-hartas/profile-pentadbir-hartas.module';
import { ProfilePentadbirSklModule } from './profile-pentadbir-skls/profile-pentadbir-skls.module';
import { ProfileUserVesselModule } from './profile-user-vessel/profile-user-vessel.module';
import { ProfileUserModule } from './profile-users/profile-users.module';
import { ProfileUserDetailsModule } from './experiment/profile/profile-user-details.module';
import { ReceiptItemModule } from './receipt-items/receipt-items.module';
import { ReceiptModule } from './receipts/receipts.module';
import { ReferenceNumberModule } from './reference-numbers/reference-numbers.module';
import { RiverModule } from './rivers/rivers.module';
import { RoleModuleModule } from './role-module/role-module.module';
import { RoleModule } from './roles/roles.module';
import { SalesRecordNdModule } from './sales-record-nds/sales-record-nds.module';
import { SampleAreaApplicationDetailModule } from './sample-area-application-details/sample-area-application-details.module';
import { SampleAreaApplicationHistorieModule } from './sample-area-application-histories/sample-area-application-histories.module';
import { SampleAreaApplicationModule } from './sample-area-applications/sample-area-applications.module';
import { SampleAreaHistorieModule } from './sample-area-histories/sample-area-histories.module';
import { SampleAreaItemModule } from './sample-area-items/sample-area-items.module';
import { SampleAreaLocationModule } from './sample-area-locations/sample-area-locations.module';
import { SampleAreaNoticeModule } from './sample-area-notices/sample-area-notices.module';
import { SampleAreaReportModule } from './sample-area-reports/sample-area-reports.module';
import { SampleAreaModule } from './sample-areas/sample-areas.module';
import { SerialNumberModule } from './serial-numbers/serial-numbers.module';
import { ShellsQuotaModule } from './shells-quota/shells-quota.module';
import { ShellsQuotaHistorieModule } from './shells-quota-histories/shells-quota-histories.module';
import { ShellsQuotaPaymentDetailModule } from './shells-quota-payment-details/shells-quota-payment-details.module';
import { ShellsQuotaPaymentModule } from './shells-quota-payments/shells-quota-payments.module';
import { SpecieModule } from './species/species.module';
import { SsdModule } from './ssds/ssds.module';
import { StateOfficeMappingModule } from './state-office-mappings/state-office-mappings.module';
import { SubsistenceApplicationModule } from './subsistence-application/subsistence-application.module';
import { SubsistenceAuditLogStatuModule } from './subsistence-audit-log-status/subsistence-audit-log-status.module';
import { SubsistenceDocModule } from './subsistence-doc/subsistence-doc.module';
import { SubsistenceListModule } from './subsistence-list/subsistence-list.module';
import { SubsistenceListHqModule } from './subsistence-list-hqs/subsistence-list-hqs.module';
import { SubsistenceListQuotaModule } from './subsistence-list-quota/subsistence-list-quota.module';
import { SubsistenceListQuotaHqModule } from './subsistence-list-quota-hqs/subsistence-list-quota-hqs.module';
import { SubsistencePaymentHqModule } from './subsistence-payment-hqs/subsistence-payment-hqs.module';
import { SubsistencePaymentPayeeModule } from './subsistence-payment-payees/subsistence-payment-payees.module';
import { SubsistencePaymentStateModule } from './subsistence-payment-states/subsistence-payment-states.module';
import { SubsistencePaymentModule } from './subsistence-payments/subsistence-payments.module';
import { UserHistorieModule } from './user-histories/user-histories.module';
import { UserModuleModule } from './user-module/user-module.module';
import { UserRoleModule } from './user-role/user-role.module';
import { UserModule } from './users/users.module';
import { VesselModule } from './vessels/vessels.module';

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
    ProfileUserDetailsModule,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
