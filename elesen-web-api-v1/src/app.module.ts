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
import { ApplicationPinModule } from './components/application-pins/application-pins.module';
import { ApplicationAppointmentModule } from './components/application-appointments/application-appointments.module';
import { Am-pangkalanModule } from './components/am-pangkalan/am-pangkalan.module';
import { Am-vesselModule } from './components/am-vessel/am-vessel.module';
import { AnnouncementsModule } from './components/announcements/announcements.module';
import { Application-appointmentsModule } from './components/application-appointments/application-appointments.module';
import { Application-atfModule } from './components/application-atf/application-atf.module';
import { Application-esh-ndModule } from './components/application-esh-nd/application-esh-nd.module';
import { Application-esh-nd-dokumenModule } from './components/application-esh-nd-dokumen/application-esh-nd-dokumen.module';
import { Application-pinsModule } from './components/application-pins/application-pins.module';
import { Application-v2-profile-userModule } from './components/application-v2-profile-user/application-v2-profile-user.module';
import { Application-v2-vesselModule } from './components/application-v2-vessel/application-v2-vessel.module';
import { ApplicationAppointmentsModule } from './components/application_appointments/application_appointments.module';
import { ApplicationAtfModule } from './components/application_atf/application_atf.module';
import { ApplicationAtfPaymentModule } from './components/application_atf_payment/application_atf_payment.module';
import { ApplicationChangeVesselToolModule } from './components/application_change_vessel_tool/application_change_vessel_tool.module';
import { ApplicationChangeVesselToolApprovalLogModule } from './components/application_change_vessel_tool_approval_log/application_change_vessel_tool_approval_log.module';
import { ApplicationChangeVesselToolPaymentModule } from './components/application_change_vessel_tool_payment/application_change_vessel_tool_payment.module';
import { ApplicationDocumentsModule } from './components/application_documents/application_documents.module';
import { ApplicationLegaciesModule } from './components/application_legacies/application_legacies.module';
import { ApplicationLicensePrintLogsModule } from './components/application_license_print_logs/application_license_print_logs.module';
import { ApplicationPinsModule } from './components/application_pins/application_pins.module';
import { ApplicationReceiptItemsModule } from './components/application_receipt_items/application_receipt_items.module';
import { ApplicationReceiptsModule } from './components/application_receipts/application_receipts.module';
import { ApplicationSupportDocumentModule } from './components/application_support_document/application_support_document.module';
import { ApplicationTasksModule } from './components/application_tasks/application_tasks.module';
import { ApplicationTpuRayuanModule } from './components/application_tpu_rayuan/application_tpu_rayuan.module';
import { ApplicationTpuReceiptItemsModule } from './components/application_tpu_receipt_items/application_tpu_receipt_items.module';
import { ApplicationTpuReceiptsModule } from './components/application_tpu_receipts/application_tpu_receipts.module';
import { ApplicationTpuSsdModule } from './components/application_tpu_ssd/application_tpu_ssd.module';
import { ApplicationsModule } from './components/applications/applications.module';
import { Applications-v2Module } from './components/applications-v2/applications-v2.module';
import { Appointment-approvesModule } from './components/appointment-approves/appointment-approves.module';
import { AppointmentsModule } from './components/appointments/appointments.module';
import { AppointmentsInspectionsModule } from './components/appointments_inspections/appointments_inspections.module';
import { ApprovalsModule } from './components/approvals/approvals.module';
import { AttachmentsModule } from './components/attachments/attachments.module';
import { Audit-logsModule } from './components/audit-logs/audit-logs.module';
import { AuditsModule } from './components/audits/audits.module';
import { BaseTransferAppsModule } from './components/base_transfer_apps/base_transfer_apps.module';
import { BaseTransferDocsModule } from './components/base_transfer_docs/base_transfer_docs.module';
import { BaseTransferLogsModule } from './components/base_transfer_logs/base_transfer_logs.module';
import { Catching-location-ndsModule } from './components/catching-location-nds/catching-location-nds.module';
import { CauseLetterAttachmentsModule } from './components/cause_letter_attachments/cause_letter_attachments.module';
import { CauseLetterCommentsModule } from './components/cause_letter_comments/cause_letter_comments.module';
import { CauseLetterStagesModule } from './components/cause_letter_stages/cause_letter_stages.module';
import { CauseLetterWorkflowsModule } from './components/cause_letter_workflows/cause_letter_workflows.module';
import { CauseLettersModule } from './components/cause_letters/cause_letters.module';
import { Cfg-licensesModule } from './components/cfg-licenses/cfg-licenses.module';
import { Cm-equipmentModule } from './components/cm-equipment/cm-equipment.module';
import { Code-mastersModule } from './components/code-masters/code-masters.module';
import { Complaint-logsModule } from './components/complaint-logs/complaint-logs.module';
import { ComplaintsModule } from './components/complaints/complaints.module';
import { ConfiscationModule } from './components/confiscation/confiscation.module';
import { Confiscation-docsModule } from './components/confiscation-docs/confiscation-docs.module';
import { CourseParticipantsModule } from './components/course_participants/course_participants.module';
import { Cultured-shell-detailsModule } from './components/cultured-shell-details/cultured-shell-details.module';
import { Cultured-shell-historiesModule } from './components/cultured-shell-histories/cultured-shell-histories.module';
import { Cultured-shellsModule } from './components/cultured-shells/cultured-shells.module';
import { Darat-application-approvedsModule } from './components/darat-application-approveds/darat-application-approveds.module';
import { Darat-application-logsModule } from './components/darat-application-logs/darat-application-logs.module';
import { Darat-application-tempsModule } from './components/darat-application-temps/darat-application-temps.module';
import { Darat-applicationsModule } from './components/darat-applications/darat-applications.module';
import { Darat-base-jettiesModule } from './components/darat-base-jetties/darat-base-jetties.module';
import { Darat-base-jetty-historiesModule } from './components/darat-base-jetty-histories/darat-base-jetty-histories.module';
import { Darat-documentsModule } from './components/darat-documents/darat-documents.module';
import { Darat-equipment-listsModule } from './components/darat-equipment-lists/darat-equipment-lists.module';
import { Darat-fault-recordsModule } from './components/darat-fault-records/darat-fault-records.module';
import { Darat-help-agency-fishermansModule } from './components/darat-help-agency-fishermans/darat-help-agency-fishermans.module';
import { Darat-inspection-equipmentsModule } from './components/darat-inspection-equipments/darat-inspection-equipments.module';
import { Darat-item-foundsModule } from './components/darat-item-founds/darat-item-founds.module';
import { Darat-payment-receipt-itemsModule } from './components/darat-payment-receipt-items/darat-payment-receipt-items.module';
import { Darat-payment-receiptsModule } from './components/darat-payment-receipts/darat-payment-receipts.module';
import { Darat-temporary-pinsModule } from './components/darat-temporary-pins/darat-temporary-pins.module';
import { Darat-user-detailsModule } from './components/darat-user-details/darat-user-details.module';
import { Darat-user-equipment-historiesModule } from './components/darat-user-equipment-histories/darat-user-equipment-histories.module';
import { Darat-user-equipmentsModule } from './components/darat-user-equipments/darat-user-equipments.module';
import { Darat-user-fisherman-infosModule } from './components/darat-user-fisherman-infos/darat-user-fisherman-infos.module';
import { Darat-vessel-disposalsModule } from './components/darat-vessel-disposals/darat-vessel-disposals.module';
import { Darat-vessel-engine-historiesModule } from './components/darat-vessel-engine-histories/darat-vessel-engine-histories.module';
import { Darat-vessel-enginesModule } from './components/darat-vessel-engines/darat-vessel-engines.module';
import { Darat-vessel-historiesModule } from './components/darat-vessel-histories/darat-vessel-histories.module';
import { Darat-vessel-hull-historiesModule } from './components/darat-vessel-hull-histories/darat-vessel-hull-histories.module';
import { Darat-vessel-hullsModule } from './components/darat-vessel-hulls/darat-vessel-hulls.module';
import { Darat-vessel-inspectionsModule } from './components/darat-vessel-inspections/darat-vessel-inspections.module';
import { Darat-vesselsModule } from './components/darat-vessels/darat-vessels.module';
import { DeviceRegistrationModule } from './components/device_registration/device_registration.module';
import { ElaunSaraHidupNdsModule } from './components/elaun_sara_hidup_nds/elaun_sara_hidup_nds.module';
import { EnjinModule } from './components/enjin/enjin.module';
import { EntitiesModule } from './components/entities/entities.module';
import { Eshnd-quotasModule } from './components/eshnd-quotas/eshnd-quotas.module';
import { EshndBankAccChangesModule } from './components/eshnd_bank_acc_changes/eshnd_bank_acc_changes.module';
import { EshndBankChangeDocsModule } from './components/eshnd_bank_change_docs/eshnd_bank_change_docs.module';
import { EshndPaymentLogsModule } from './components/eshnd_payment_logs/eshnd_payment_logs.module';
import { Failed-jobsModule } from './components/failed-jobs/failed-jobs.module';
import { Fish-catch-ndsModule } from './components/fish-catch-nds/fish-catch-nds.module';
import { Fish-landing-ndsModule } from './components/fish-landing-nds/fish-landing-nds.module';
import { Fish-species-ndsModule } from './components/fish-species-nds/fish-species-nds.module';
import { FishermanMeritsModule } from './components/fisherman_merits/fisherman_merits.module';
import { Fishing-log-ndsModule } from './components/fishing-log-nds/fishing-log-nds.module';
import { FishingEquipmentLpisModule } from './components/fishing_equipment_lpis/fishing_equipment_lpis.module';
import { Foreign-crewsModule } from './components/foreign-crews/foreign-crews.module';
import { FullInspectionLpisModule } from './components/full_inspection_lpis/full_inspection_lpis.module';
import { GeEngineInfoModule } from './components/ge_engine_info/ge_engine_info.module';
import { HebahansModule } from './components/hebahans/hebahans.module';
import { Immigration-gatesModule } from './components/immigration-gates/immigration-gates.module';
import { Immigration-officesModule } from './components/immigration-offices/immigration-offices.module';
import { JettiesModule } from './components/jetties/jetties.module';
import { KesalahanModule } from './components/kesalahan/kesalahan.module';
import { Kpv03VesselLicenseApplicationBenificialOwnersModule } from './components/kpv03_vessel_license_application_benificial_owners/kpv03_vessel_license_application_benificial_owners.module';
import { Kpv03VesselLicenseApplicationDirectorsModule } from './components/kpv03_vessel_license_application_directors/kpv03_vessel_license_application_directors.module';
import { Kpv03VesselLicenseApplicationFinancesModule } from './components/kpv03_vessel_license_application_finances/kpv03_vessel_license_application_finances.module';
import { Kpv03VesselLicenseApplicationHistoriesModule } from './components/kpv03_vessel_license_application_histories/kpv03_vessel_license_application_histories.module';
import { Kpv03VesselLicenseApplicationInformationModule } from './components/kpv03_vessel_license_application_information/kpv03_vessel_license_application_information.module';
import { Kpv03VesselLicenseApplicationInspectionCatchesModule } from './components/kpv03_vessel_license_application_inspection_catches/kpv03_vessel_license_application_inspection_catches.module';
import { Kpv03VesselLicenseApplicationInspectionDetailsModule } from './components/kpv03_vessel_license_application_inspection_details/kpv03_vessel_license_application_inspection_details.module';
import { Kpv03VesselLicenseApplicationInspectionEnginesModule } from './components/kpv03_vessel_license_application_inspection_engines/kpv03_vessel_license_application_inspection_engines.module';
import { Kpv03VesselLicenseApplicationInspectionItemsModule } from './components/kpv03_vessel_license_application_inspection_items/kpv03_vessel_license_application_inspection_items.module';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesModule } from './components/kpv03_vessel_license_application_inspection_securities/kpv03_vessel_license_application_inspection_securities.module';
import { Kpv03VesselLicenseApplicationInspectionVesselsModule } from './components/kpv03_vessel_license_application_inspection_vessels/kpv03_vessel_license_application_inspection_vessels.module';
import { Kpv03VesselLicenseApplicationInspectionVoyagesModule } from './components/kpv03_vessel_license_application_inspection_voyages/kpv03_vessel_license_application_inspection_voyages.module';
import { Kpv03VesselLicenseApplicationShareholdersModule } from './components/kpv03_vessel_license_application_shareholders/kpv03_vessel_license_application_shareholders.module';
import { KruModule } from './components/kru/kru.module';
import { Kru-application-documentsModule } from './components/kru-application-documents/kru-application-documents.module';
import { Kru-application-foreign-krusModule } from './components/kru-application-foreign-krus/kru-application-foreign-krus.module';
import { Kru-application-foreignsModule } from './components/kru-application-foreigns/kru-application-foreigns.module';
import { Kru-application-krusModule } from './components/kru-application-krus/kru-application-krus.module';
import { Kru-application-logsModule } from './components/kru-application-logs/kru-application-logs.module';
import { Kru-application-typesModule } from './components/kru-application-types/kru-application-types.module';
import { Kru-applicationsModule } from './components/kru-applications/kru-applications.module';
import { Kru-documentsModule } from './components/kru-documents/kru-documents.module';
import { Kru-foreign-documentsModule } from './components/kru-foreign-documents/kru-foreign-documents.module';
import { Kru01-applicationsModule } from './components/kru01-applications/kru01-applications.module';
import { Kru04-applicationsModule } from './components/kru04-applications/kru04-applications.module';
import { KulitModule } from './components/kulit/kulit.module';
import { Landing-activity-speciesModule } from './components/landing-activity-species/landing-activity-species.module';
import { Landing-activity-typesModule } from './components/landing-activity-types/landing-activity-types.module';
import { Landing-declaration-logsModule } from './components/landing-declaration-logs/landing-declaration-logs.module';
import { Landing-declaration-monthliesModule } from './components/landing-declaration-monthlies/landing-declaration-monthlies.module';
import { Landing-declarationsModule } from './components/landing-declarations/landing-declarations.module';
import { Landing-declare-monthly-logsModule } from './components/landing-declare-monthly-logs/landing-declare-monthly-logs.module';
import { Landing-documentsModule } from './components/landing-documents/landing-documents.module';
import { Landing-info-activitiesModule } from './components/landing-info-activities/landing-info-activities.module';
import { Landing-infosModule } from './components/landing-infos/landing-infos.module';
import { Landing-monthly-documentsModule } from './components/landing-monthly-documents/landing-monthly-documents.module';
import { Landing-water-typesModule } from './components/landing-water-types/landing-water-types.module';
import { LandingBasesModule } from './components/landing_bases/landing_bases.module';
import { LesenModule } from './components/lesen/lesen.module';
import { Listing-pendaratanModule } from './components/listing-pendaratan/listing-pendaratan.module';
import { LpiEnginesModule } from './components/lpi_engines/lpi_engines.module';
import { LpiEquipmentItemsModule } from './components/lpi_equipment_items/lpi_equipment_items.module';
import { LpiEquipmentsModule } from './components/lpi_equipments/lpi_equipments.module';
import { LpiFishingEquipmentsModule } from './components/lpi_fishing_equipments/lpi_fishing_equipments.module';
import { LpiFishingGearsModule } from './components/lpi_fishing_gears/lpi_fishing_gears.module';
import { LpiInlandFishingEquipmentItemsModule } from './components/lpi_inland_fishing_equipment_items/lpi_inland_fishing_equipment_items.module';
import { LpiInlandFishingEquipmentsModule } from './components/lpi_inland_fishing_equipments/lpi_inland_fishing_equipments.module';
import { LpiInspectionDetailsModule } from './components/lpi_inspection_details/lpi_inspection_details.module';
import { LpiInspectionItemsModule } from './components/lpi_inspection_items/lpi_inspection_items.module';
import { LpiInspectionsModule } from './components/lpi_inspections/lpi_inspections.module';
import { LpiNavigationsModule } from './components/lpi_navigations/lpi_navigations.module';
import { LpiSafetyEquipmentsModule } from './components/lpi_safety_equipments/lpi_safety_equipments.module';
import { LpiSailingEquipmentsModule } from './components/lpi_sailing_equipments/lpi_sailing_equipments.module';
import { LpiVesselsModule } from './components/lpi_vessels/lpi_vessels.module';
import { Maklumat-syarikatsModule } from './components/maklumat-syarikats/maklumat-syarikats.module';
import { MeetingAttendeesModule } from './components/meeting_attendees/meeting_attendees.module';
import { MeetingContentsModule } from './components/meeting_contents/meeting_contents.module';
import { MeetingsModule } from './components/meetings/meetings.module';
import { Mesyuarat10004aModule } from './components/mesyuarat_100_04a/mesyuarat_100_04a.module';
import { Mesyuarat5004aModule } from './components/mesyuarat_50_04a/mesyuarat_50_04a.module';
import { MesyuaratKickoff04aModule } from './components/mesyuarat_kickoff_04a/mesyuarat_kickoff_04a.module';
import { MigrationsModule } from './components/migrations/migrations.module';
import { ModulesModule } from './components/modules/modules.module';
import { Modules-20250312Module } from './components/modules-20250312/modules-20250312.module';
import { Modules2Module } from './components/modules2/modules2.module';
import { MppiVesselApplicationModule } from './components/mppi_vessel_application/mppi_vessel_application.module';
import { MppiVesselArchiveModule } from './components/mppi_vessel_archive/mppi_vessel_archive.module';
import { MppiVesselExtraFileModule } from './components/mppi_vessel_extra_file/mppi_vessel_extra_file.module';
import { MppiVesselKickoffModule } from './components/mppi_vessel_kickoff/mppi_vessel_kickoff.module';
import { MppiVesselLaporanModule } from './components/mppi_vessel_laporan/mppi_vessel_laporan.module';
import { MppiVesselLogModule } from './components/mppi_vessel_log/mppi_vessel_log.module';
import { MppiVesselLpiModule } from './components/mppi_vessel_lpi/mppi_vessel_lpi.module';
import { MppiVesselLpiPeralatanModule } from './components/mppi_vessel_lpi_peralatan/mppi_vessel_lpi_peralatan.module';
import { MppiVesselMeetingAttendanceModule } from './components/mppi_vessel_meeting_attendance/mppi_vessel_meeting_attendance.module';
import { MppiVesselMeetingInvitationModule } from './components/mppi_vessel_meeting_invitation/mppi_vessel_meeting_invitation.module';
import { MppiVesselMinuteDiscussionModule } from './components/mppi_vessel_minute_discussion/mppi_vessel_minute_discussion.module';
import { MppiVesselMinuteMeetingModule } from './components/mppi_vessel_minute_meeting/mppi_vessel_minute_meeting.module';
import { MppiVesselMinuteMessageModule } from './components/mppi_vessel_minute_message/mppi_vessel_minute_message.module';
import { MppiVesselMinuteOtherMattersModule } from './components/mppi_vessel_minute_other_matters/mppi_vessel_minute_other_matters.module';
import { MppiVesselMinutePostponementModule } from './components/mppi_vessel_minute_postponement/mppi_vessel_minute_postponement.module';
import { MppiVesselPaymentModule } from './components/mppi_vessel_payment/mppi_vessel_payment.module';
import { MppiVesselPaymentInfoModule } from './components/mppi_vessel_payment_info/mppi_vessel_payment_info.module';
import { MppiVesselPemantauanModule } from './components/mppi_vessel_pemantauan/mppi_vessel_pemantauan.module';
import { MppiVesselSlpModule } from './components/mppi_vessel_slp/mppi_vessel_slp.module';
import { MuatanModule } from './components/muatan/muatan.module';
import { Nelayan-marinsModule } from './components/nelayan-marins/nelayan-marins.module';
import { NelayanDaratCardsModule } from './components/nelayan_darat_cards/nelayan_darat_cards.module';
import { NelayanDaratLicensesModule } from './components/nelayan_darat_licenses/nelayan_darat_licenses.module';
import { PantasBatchesModule } from './components/pantas_batches/pantas_batches.module';
import { PantasCertificatesModule } from './components/pantas_certificates/pantas_certificates.module';
import { Parliament-seatsModule } from './components/parliament-seats/parliament-seats.module';
import { ParliamentsModule } from './components/parliaments/parliaments.module';
import { Password-resetsModule } from './components/password-resets/password-resets.module';
import { PaymentsModule } from './components/payments/payments.module';
import { PekelilingsModule } from './components/pekelilings/pekelilings.module';
import { PematuhanModule } from './components/pematuhan/pematuhan.module';
import { PemilikanModule } from './components/pemilikan/pemilikan.module';
import { Pendaftaran-antarabangsaModule } from './components/pendaftaran-antarabangsa/pendaftaran-antarabangsa.module';
import { Pendaftaran-perniagaansModule } from './components/pendaftaran-perniagaans/pendaftaran-perniagaans.module';
import { PengesahanModule } from './components/pengesahan/pengesahan.module';
import { Penglibatan-syarikatsModule } from './components/penglibatan-syarikats/penglibatan-syarikats.module';
import { Permohonan04aModule } from './components/permohonan_04a/permohonan_04a.module';
import { PermohonansModule } from './components/permohonans/permohonans.module';
import { Personal-access-tokensModule } from './components/personal-access-tokens/personal-access-tokens.module';
import { PpPt01ApprovalsModule } from './components/pp_pt_01_approvals/pp_pt_01_approvals.module';
import { PpPt01RayuanModule } from './components/pp_pt_01_rayuan/pp_pt_01_rayuan.module';
import { PpPt01RayuanLampiranModule } from './components/pp_pt_01_rayuan_lampiran/pp_pt_01_rayuan_lampiran.module';
import { PpPt01ReviewsModule } from './components/pp_pt_01_reviews/pp_pt_01_reviews.module';
import { PpPvpApplicationDetailsModule } from './components/pp_pvp_application_details/pp_pvp_application_details.module';
import { Ppv04aVesselApplicationModule } from './components/ppv04a_vessel_application/ppv04a_vessel_application.module';
import { Ppv04aVesselArchiveModule } from './components/ppv04a_vessel_archive/ppv04a_vessel_archive.module';
import { Ppv04aVesselExtraFileModule } from './components/ppv04a_vessel_extra_file/ppv04a_vessel_extra_file.module';
import { Ppv04aVesselKickoffModule } from './components/ppv04a_vessel_kickoff/ppv04a_vessel_kickoff.module';
import { Ppv04aVesselLaporanModule } from './components/ppv04a_vessel_laporan/ppv04a_vessel_laporan.module';
import { Ppv04aVesselLogModule } from './components/ppv04a_vessel_log/ppv04a_vessel_log.module';
import { Ppv04aVesselLpiModule } from './components/ppv04a_vessel_lpi/ppv04a_vessel_lpi.module';
import { Ppv04aVesselLpiPeralatanModule } from './components/ppv04a_vessel_lpi_peralatan/ppv04a_vessel_lpi_peralatan.module';
import { Ppv04aVesselMeetingAttendanceModule } from './components/ppv04a_vessel_meeting_attendance/ppv04a_vessel_meeting_attendance.module';
import { Ppv04aVesselMinuteDiscussionModule } from './components/ppv04a_vessel_minute_discussion/ppv04a_vessel_minute_discussion.module';
import { Ppv04aVesselMinuteMeetingModule } from './components/ppv04a_vessel_minute_meeting/ppv04a_vessel_minute_meeting.module';
import { Ppv04aVesselMinuteMessageModule } from './components/ppv04a_vessel_minute_message/ppv04a_vessel_minute_message.module';
import { Ppv04aVesselMinuteOtherMattersModule } from './components/ppv04a_vessel_minute_other_matters/ppv04a_vessel_minute_other_matters.module';
import { Ppv04aVesselMinutePostponementModule } from './components/ppv04a_vessel_minute_postponement/ppv04a_vessel_minute_postponement.module';
import { Ppv04aVesselPaymentModule } from './components/ppv04a_vessel_payment/ppv04a_vessel_payment.module';
import { Ppv04aVesselPaymentInfoModule } from './components/ppv04a_vessel_payment_info/ppv04a_vessel_payment_info.module';
import { Ppv04aVesselPemantauanModule } from './components/ppv04a_vessel_pemantauan/ppv04a_vessel_pemantauan.module';
import { Ppv04aVesselSlpModule } from './components/ppv04a_vessel_slp/ppv04a_vessel_slp.module';
import { Ppv04bAgreeVesselNumbersModule } from './components/ppv04b_agree_vessel_numbers/ppv04b_agree_vessel_numbers.module';
import { Ppv04bApplyDateHobOneModule } from './components/ppv04b_apply_date_hob_one/ppv04b_apply_date_hob_one.module';
import { Ppv04bApplyDateLpiModule } from './components/ppv04b_apply_date_lpi/ppv04b_apply_date_lpi.module';
import { Ppv04bApplyDateTwoModule } from './components/ppv04b_apply_date_two/ppv04b_apply_date_two.module';
import { Ppv04bApplyDatesModule } from './components/ppv04b_apply_dates/ppv04b_apply_dates.module';
import { Ppv04bCheck212Module } from './components/ppv04b_check_212/ppv04b_check_212.module';
import { Ppv04bCheckDocumentModule } from './components/ppv04b_check_document/ppv04b_check_document.module';
import { Ppv04bCheckDocumentOneModule } from './components/ppv04b_check_document_one/ppv04b_check_document_one.module';
import { Ppv04bCheckDocumentTwoModule } from './components/ppv04b_check_document_two/ppv04b_check_document_two.module';
import { Ppv04bCheckGaDocumentModule } from './components/ppv04b_check_ga_document/ppv04b_check_ga_document.module';
import { Ppv04bHobReportOneModule } from './components/ppv04b_hob_report_one/ppv04b_hob_report_one.module';
import { Ppv04bHobReportTwoModule } from './components/ppv04b_hob_report_two/ppv04b_hob_report_two.module';
import { Ppv04bInspectionLpiModule } from './components/ppv04b_inspection_lpi/ppv04b_inspection_lpi.module';
import { Ppv04bInspectionReportOneModule } from './components/ppv04b_inspection_report_one/ppv04b_inspection_report_one.module';
import { Ppv04bInspectionReportTwoModule } from './components/ppv04b_inspection_report_two/ppv04b_inspection_report_two.module';
import { Ppv04bMailInspectionOneModule } from './components/ppv04b_mail_inspection_one/ppv04b_mail_inspection_one.module';
import { Ppv04bNoPinModule } from './components/ppv04b_no_pin/ppv04b_no_pin.module';
import { Ppv04bPaymentModule } from './components/ppv04b_payment/ppv04b_payment.module';
import { Ppv04bPrintLicenseGrantModule } from './components/ppv04b_print_license_grant/ppv04b_print_license_grant.module';
import { Ppv04bSupportingDocAttachmentsModule } from './components/ppv04b_supporting_doc_attachments/ppv04b_supporting_doc_attachments.module';
import { Ppv04bsModule } from './components/ppv04bs/ppv04bs.module';
import { Ppv35VesselPaymentItemsModule } from './components/ppv35_vessel_payment_items/ppv35_vessel_payment_items.module';
import { Ppv35VesselPaymentsModule } from './components/ppv35_vessel_payments/ppv35_vessel_payments.module';
import { ProcurementsModule } from './components/procurements/procurements.module';
import { Profile-companiesModule } from './components/profile-companies/profile-companies.module';
import { Profile-company-accountsModule } from './components/profile-company-accounts/profile-company-accounts.module';
import { Profile-company-alpsModule } from './components/profile-company-alps/profile-company-alps.module';
import { Profile-company-assetsModule } from './components/profile-company-assets/profile-company-assets.module';
import { Profile-pengusaha-sklsModule } from './components/profile-pengusaha-skls/profile-pengusaha-skls.module';
import { Profile-pentadbir-harta-vesselModule } from './components/profile-pentadbir-harta-vessel/profile-pentadbir-harta-vessel.module';
import { Profile-pentadbir-hartasModule } from './components/profile-pentadbir-hartas/profile-pentadbir-hartas.module';
import { Profile-pentadbir-sklsModule } from './components/profile-pentadbir-skls/profile-pentadbir-skls.module';
import { Profile-user-vesselModule } from './components/profile-user-vessel/profile-user-vessel.module';
import { Profile-usersModule } from './components/profile-users/profile-users.module';
import { Receipt-itemsModule } from './components/receipt-items/receipt-items.module';
import { ReceiptsModule } from './components/receipts/receipts.module';
import { RefCauseLetterWorkflowsModule } from './components/ref_cause_letter_workflows/ref_cause_letter_workflows.module';
import { Reference-numbersModule } from './components/reference-numbers/reference-numbers.module';
import { RiversModule } from './components/rivers/rivers.module';
import { Role-moduleModule } from './components/role-module/role-module.module';
import { RoleModule2Module } from './components/role_module2/role_module2.module';
import { RolesModule } from './components/roles/roles.module';
import { Sales-record-ndsModule } from './components/sales-record-nds/sales-record-nds.module';
import { Sample-area-application-detailsModule } from './components/sample-area-application-details/sample-area-application-details.module';
import { Sample-area-application-historiesModule } from './components/sample-area-application-histories/sample-area-application-histories.module';
import { Sample-area-applicationsModule } from './components/sample-area-applications/sample-area-applications.module';
import { Sample-area-historiesModule } from './components/sample-area-histories/sample-area-histories.module';
import { Sample-area-itemsModule } from './components/sample-area-items/sample-area-items.module';
import { Sample-area-locationsModule } from './components/sample-area-locations/sample-area-locations.module';
import { Sample-area-noticesModule } from './components/sample-area-notices/sample-area-notices.module';
import { Sample-area-reportsModule } from './components/sample-area-reports/sample-area-reports.module';
import { Sample-areasModule } from './components/sample-areas/sample-areas.module';
import { Serial-numbersModule } from './components/serial-numbers/serial-numbers.module';
import { Shells-quotaModule } from './components/shells-quota/shells-quota.module';
import { Shells-quota-historiesModule } from './components/shells-quota-histories/shells-quota-histories.module';
import { Shells-quota-payment-detailsModule } from './components/shells-quota-payment-details/shells-quota-payment-details.module';
import { Shells-quota-paymentsModule } from './components/shells-quota-payments/shells-quota-payments.module';
import { SlpDomestikApplicationsModule } from './components/slp_domestik_applications/slp_domestik_applications.module';
import { SlpDomestikBuktiVeselModule } from './components/slp_domestik_bukti_vesel/slp_domestik_bukti_vesel.module';
import { SlpDomestikStepHistoryModule } from './components/slp_domestik_step_history/slp_domestik_step_history.module';
import { SlpLuarNegaraApplicationsModule } from './components/slp_luar_negara_applications/slp_luar_negara_applications.module';
import { SlpLuarNegaraBuktiVeselModule } from './components/slp_luar_negara_bukti_vesel/slp_luar_negara_bukti_vesel.module';
import { SlpLuarNegaraDocumentsModule } from './components/slp_luar_negara_documents/slp_luar_negara_documents.module';
import { SlpLuarNegaraStepHistoryModule } from './components/slp_luar_negara_step_history/slp_luar_negara_step_history.module';
import { SpeciesModule } from './components/species/species.module';
import { SsdsModule } from './components/ssds/ssds.module';
import { State-office-mappingsModule } from './components/state-office-mappings/state-office-mappings.module';
import { Subsistence-applicationModule } from './components/subsistence-application/subsistence-application.module';
import { Subsistence-audit-log-statusModule } from './components/subsistence-audit-log-status/subsistence-audit-log-status.module';
import { Subsistence-docModule } from './components/subsistence-doc/subsistence-doc.module';
import { Subsistence-listModule } from './components/subsistence-list/subsistence-list.module';
import { Subsistence-list-hqsModule } from './components/subsistence-list-hqs/subsistence-list-hqs.module';
import { Subsistence-list-quotaModule } from './components/subsistence-list-quota/subsistence-list-quota.module';
import { Subsistence-list-quota-hqsModule } from './components/subsistence-list-quota-hqs/subsistence-list-quota-hqs.module';
import { Subsistence-payment-hqsModule } from './components/subsistence-payment-hqs/subsistence-payment-hqs.module';
import { Subsistence-payment-payeesModule } from './components/subsistence-payment-payees/subsistence-payment-payees.module';
import { Subsistence-payment-statesModule } from './components/subsistence-payment-states/subsistence-payment-states.module';
import { Subsistence-paymentsModule } from './components/subsistence-payments/subsistence-payments.module';
import { SyaratSsdModule } from './components/syarat_ssd/syarat_ssd.module';
import { TzLicensePrintLogsModule } from './components/tz_license_print_logs/tz_license_print_logs.module';
import { TzPemohonProfilesModule } from './components/tz_pemohon_profiles/tz_pemohon_profiles.module';
import { TzPermohonanDocumentsModule } from './components/tz_permohonan_documents/tz_permohonan_documents.module';
import { TzPermohonanInspectionAssignmentsModule } from './components/tz_permohonan_inspection_assignments/tz_permohonan_inspection_assignments.module';
import { TzPermohonanInspectionsModule } from './components/tz_permohonan_inspections/tz_permohonan_inspections.module';
import { TzPermohonanRayuanDocumentsModule } from './components/tz_permohonan_rayuan_documents/tz_permohonan_rayuan_documents.module';
import { TzPermohonanRayuansModule } from './components/tz_permohonan_rayuans/tz_permohonan_rayuans.module';
import { TzPermohonanReceiptItemsModule } from './components/tz_permohonan_receipt_items/tz_permohonan_receipt_items.module';
import { TzPermohonanReceiptsModule } from './components/tz_permohonan_receipts/tz_permohonan_receipts.module';
import { TzPermohonanStatusHistoriesModule } from './components/tz_permohonan_status_histories/tz_permohonan_status_histories.module';
import { TzPermohonansModule } from './components/tz_permohonans/tz_permohonans.module';
import { TzVesselsModule } from './components/tz_vessels/tz_vessels.module';
import { User-historiesModule } from './components/user-histories/user-histories.module';
import { User-moduleModule } from './components/user-module/user-module.module';
import { User-roleModule } from './components/user-role/user-role.module';
import { UserBankAccountsModule } from './components/user_bank_accounts/user_bank_accounts.module';
import { UserModule3Module } from './components/user_module3/user_module3.module';
import { UserRole2Module } from './components/user_role2/user_role2.module';
import { UsersModule } from './components/users/users.module';
import { VesselApplicationReviewModule } from './components/vessel_application_review/vessel_application_review.module';
import { VesselAtfsModule } from './components/vessel_atfs/vessel_atfs.module';
import { VesselAuditedFinancialStatementsModule } from './components/vessel_audited_financial_statements/vessel_audited_financial_statements.module';
import { VesselBankStatementsModule } from './components/vessel_bank_statements/vessel_bank_statements.module';
import { VesselCompanyAssetsModule } from './components/vessel_company_assets/vessel_company_assets.module';
import { VesselEquipmentsModule } from './components/vessel_equipments/vessel_equipments.module';
import { VesselLicenseAppIvResultModule } from './components/vessel_license_app_iv_result/vessel_license_app_iv_result.module';
import { VesselLicenseApplicationTrailsModule } from './components/vessel_license_application_trails/vessel_license_application_trails.module';
import { VesselLicenseApplicationsModule } from './components/vessel_license_applications/vessel_license_applications.module';
import { VesselLicenseBanksModule } from './components/vessel_license_banks/vessel_license_banks.module';
import { VesselLicenseBeneficialOwnersModule } from './components/vessel_license_beneficial_owners/vessel_license_beneficial_owners.module';
import { VesselLicenseDirectorsModule } from './components/vessel_license_directors/vessel_license_directors.module';
import { VesselLicenseDocumentFilesModule } from './components/vessel_license_document_files/vessel_license_document_files.module';
import { VesselLicenseDocumentsModule } from './components/vessel_license_documents/vessel_license_documents.module';
import { VesselLicenseInterviewModule } from './components/vessel_license_interview/vessel_license_interview.module';
import { VesselLicenseShareholdersModule } from './components/vessel_license_shareholders/vessel_license_shareholders.module';
import { VesselLicenseVesselsModule } from './components/vessel_license_vessels/vessel_license_vessels.module';
import { VesselRegisteredModule } from './components/vessel_registered/vessel_registered.module';
import { VesselViolationsModule } from './components/vessel_violations/vessel_violations.module';
import { VesselsModule } from './components/vessels/vessels.module';
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
// import { DaratVeselLpiFormV1Module } from './major/darat-vesel-lpi-form-v1/darat-vesel-lpi-form.module';
import { AppointmentsLPIModule } from './major/appointments/appointments.module';
import { AppointmentsInspectionsModule } from './major/appointments-inspections/appointments-inspections.module';
import { FcmModule } from './major/fcm/fcm.module';

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
    ApplicationPinModule,
    Am-pangkalanModule,
    Am-vesselModule,
    AnnouncementsModule,
    Application-appointmentsModule,
    Application-atfModule,
    Application-esh-ndModule,
    Application-esh-nd-dokumenModule,
    Application-pinsModule,
    Application-v2-profile-userModule,
    Application-v2-vesselModule,
    ApplicationAppointmentsModule,
    ApplicationAtfModule,
    ApplicationAtfPaymentModule,
    ApplicationChangeVesselToolModule,
    ApplicationChangeVesselToolApprovalLogModule,
    ApplicationChangeVesselToolPaymentModule,
    ApplicationDocumentsModule,
    ApplicationLegaciesModule,
    ApplicationLicensePrintLogsModule,
    ApplicationPinsModule,
    ApplicationReceiptItemsModule,
    ApplicationReceiptsModule,
    ApplicationSupportDocumentModule,
    ApplicationTasksModule,
    ApplicationTpuRayuanModule,
    ApplicationTpuReceiptItemsModule,
    ApplicationTpuReceiptsModule,
    ApplicationTpuSsdModule,
    ApplicationsModule,
    Applications-v2Module,
    Appointment-approvesModule,
    AppointmentsModule,
    AppointmentsInspectionsModule,
    ApprovalsModule,
    AttachmentsModule,
    Audit-logsModule,
    AuditsModule,
    BaseTransferAppsModule,
    BaseTransferDocsModule,
    BaseTransferLogsModule,
    Catching-location-ndsModule,
    CauseLetterAttachmentsModule,
    CauseLetterCommentsModule,
    CauseLetterStagesModule,
    CauseLetterWorkflowsModule,
    CauseLettersModule,
    Cfg-licensesModule,
    Cm-equipmentModule,
    Code-mastersModule,
    Complaint-logsModule,
    ComplaintsModule,
    ConfiscationModule,
    Confiscation-docsModule,
    CourseParticipantsModule,
    Cultured-shell-detailsModule,
    Cultured-shell-historiesModule,
    Cultured-shellsModule,
    Darat-application-approvedsModule,
    Darat-application-logsModule,
    Darat-application-tempsModule,
    Darat-applicationsModule,
    Darat-base-jettiesModule,
    Darat-base-jetty-historiesModule,
    Darat-documentsModule,
    Darat-equipment-listsModule,
    Darat-fault-recordsModule,
    Darat-help-agency-fishermansModule,
    Darat-inspection-equipmentsModule,
    Darat-item-foundsModule,
    Darat-payment-receipt-itemsModule,
    Darat-payment-receiptsModule,
    Darat-temporary-pinsModule,
    Darat-user-detailsModule,
    Darat-user-equipment-historiesModule,
    Darat-user-equipmentsModule,
    Darat-user-fisherman-infosModule,
    Darat-vessel-disposalsModule,
    Darat-vessel-engine-historiesModule,
    Darat-vessel-enginesModule,
    Darat-vessel-historiesModule,
    Darat-vessel-hull-historiesModule,
    Darat-vessel-hullsModule,
    Darat-vessel-inspectionsModule,
    Darat-vesselsModule,
    DeviceRegistrationModule,
    ElaunSaraHidupNdsModule,
    EnjinModule,
    EntitiesModule,
    Eshnd-quotasModule,
    EshndBankAccChangesModule,
    EshndBankChangeDocsModule,
    EshndPaymentLogsModule,
    Failed-jobsModule,
    Fish-catch-ndsModule,
    Fish-landing-ndsModule,
    Fish-species-ndsModule,
    FishermanMeritsModule,
    Fishing-log-ndsModule,
    FishingEquipmentLpisModule,
    Foreign-crewsModule,
    FullInspectionLpisModule,
    GeEngineInfoModule,
    HebahansModule,
    Immigration-gatesModule,
    Immigration-officesModule,
    JettiesModule,
    KesalahanModule,
    Kpv03VesselLicenseApplicationBenificialOwnersModule,
    Kpv03VesselLicenseApplicationDirectorsModule,
    Kpv03VesselLicenseApplicationFinancesModule,
    Kpv03VesselLicenseApplicationHistoriesModule,
    Kpv03VesselLicenseApplicationInformationModule,
    Kpv03VesselLicenseApplicationInspectionCatchesModule,
    Kpv03VesselLicenseApplicationInspectionDetailsModule,
    Kpv03VesselLicenseApplicationInspectionEnginesModule,
    Kpv03VesselLicenseApplicationInspectionItemsModule,
    Kpv03VesselLicenseApplicationInspectionSecuritiesModule,
    Kpv03VesselLicenseApplicationInspectionVesselsModule,
    Kpv03VesselLicenseApplicationInspectionVoyagesModule,
    Kpv03VesselLicenseApplicationShareholdersModule,
    KruModule,
    Kru-application-documentsModule,
    Kru-application-foreign-krusModule,
    Kru-application-foreignsModule,
    Kru-application-krusModule,
    Kru-application-logsModule,
    Kru-application-typesModule,
    Kru-applicationsModule,
    Kru-documentsModule,
    Kru-foreign-documentsModule,
    Kru01-applicationsModule,
    Kru04-applicationsModule,
    KulitModule,
    Landing-activity-speciesModule,
    Landing-activity-typesModule,
    Landing-declaration-logsModule,
    Landing-declaration-monthliesModule,
    Landing-declarationsModule,
    Landing-declare-monthly-logsModule,
    Landing-documentsModule,
    Landing-info-activitiesModule,
    Landing-infosModule,
    Landing-monthly-documentsModule,
    Landing-water-typesModule,
    LandingBasesModule,
    LesenModule,
    Listing-pendaratanModule,
    LpiEnginesModule,
    LpiEquipmentItemsModule,
    LpiEquipmentsModule,
    LpiFishingEquipmentsModule,
    LpiFishingGearsModule,
    LpiInlandFishingEquipmentItemsModule,
    LpiInlandFishingEquipmentsModule,
    LpiInspectionDetailsModule,
    LpiInspectionItemsModule,
    LpiInspectionsModule,
    LpiNavigationsModule,
    LpiSafetyEquipmentsModule,
    LpiSailingEquipmentsModule,
    LpiVesselsModule,
    Maklumat-syarikatsModule,
    MeetingAttendeesModule,
    MeetingContentsModule,
    MeetingsModule,
    Mesyuarat10004aModule,
    Mesyuarat5004aModule,
    MesyuaratKickoff04aModule,
    MigrationsModule,
    ModulesModule,
    Modules-20250312Module,
    Modules2Module,
    MppiVesselApplicationModule,
    MppiVesselArchiveModule,
    MppiVesselExtraFileModule,
    MppiVesselKickoffModule,
    MppiVesselLaporanModule,
    MppiVesselLogModule,
    MppiVesselLpiModule,
    MppiVesselLpiPeralatanModule,
    MppiVesselMeetingAttendanceModule,
    MppiVesselMeetingInvitationModule,
    MppiVesselMinuteDiscussionModule,
    MppiVesselMinuteMeetingModule,
    MppiVesselMinuteMessageModule,
    MppiVesselMinuteOtherMattersModule,
    MppiVesselMinutePostponementModule,
    MppiVesselPaymentModule,
    MppiVesselPaymentInfoModule,
    MppiVesselPemantauanModule,
    MppiVesselSlpModule,
    MuatanModule,
    Nelayan-marinsModule,
    NelayanDaratCardsModule,
    NelayanDaratLicensesModule,
    PantasBatchesModule,
    PantasCertificatesModule,
    Parliament-seatsModule,
    ParliamentsModule,
    Password-resetsModule,
    PaymentsModule,
    PekelilingsModule,
    PematuhanModule,
    PemilikanModule,
    Pendaftaran-antarabangsaModule,
    Pendaftaran-perniagaansModule,
    PengesahanModule,
    Penglibatan-syarikatsModule,
    Permohonan04aModule,
    PermohonansModule,
    Personal-access-tokensModule,
    PpPt01ApprovalsModule,
    PpPt01RayuanModule,
    PpPt01RayuanLampiranModule,
    PpPt01ReviewsModule,
    PpPvpApplicationDetailsModule,
    Ppv04aVesselApplicationModule,
    Ppv04aVesselArchiveModule,
    Ppv04aVesselExtraFileModule,
    Ppv04aVesselKickoffModule,
    Ppv04aVesselLaporanModule,
    Ppv04aVesselLogModule,
    Ppv04aVesselLpiModule,
    Ppv04aVesselLpiPeralatanModule,
    Ppv04aVesselMeetingAttendanceModule,
    Ppv04aVesselMinuteDiscussionModule,
    Ppv04aVesselMinuteMeetingModule,
    Ppv04aVesselMinuteMessageModule,
    Ppv04aVesselMinuteOtherMattersModule,
    Ppv04aVesselMinutePostponementModule,
    Ppv04aVesselPaymentModule,
    Ppv04aVesselPaymentInfoModule,
    Ppv04aVesselPemantauanModule,
    Ppv04aVesselSlpModule,
    Ppv04bAgreeVesselNumbersModule,
    Ppv04bApplyDateHobOneModule,
    Ppv04bApplyDateLpiModule,
    Ppv04bApplyDateTwoModule,
    Ppv04bApplyDatesModule,
    Ppv04bCheck212Module,
    Ppv04bCheckDocumentModule,
    Ppv04bCheckDocumentOneModule,
    Ppv04bCheckDocumentTwoModule,
    Ppv04bCheckGaDocumentModule,
    Ppv04bHobReportOneModule,
    Ppv04bHobReportTwoModule,
    Ppv04bInspectionLpiModule,
    Ppv04bInspectionReportOneModule,
    Ppv04bInspectionReportTwoModule,
    Ppv04bMailInspectionOneModule,
    Ppv04bNoPinModule,
    Ppv04bPaymentModule,
    Ppv04bPrintLicenseGrantModule,
    Ppv04bSupportingDocAttachmentsModule,
    Ppv04bsModule,
    Ppv35VesselPaymentItemsModule,
    Ppv35VesselPaymentsModule,
    ProcurementsModule,
    Profile-companiesModule,
    Profile-company-accountsModule,
    Profile-company-alpsModule,
    Profile-company-assetsModule,
    Profile-pengusaha-sklsModule,
    Profile-pentadbir-harta-vesselModule,
    Profile-pentadbir-hartasModule,
    Profile-pentadbir-sklsModule,
    Profile-user-vesselModule,
    Profile-usersModule,
    Receipt-itemsModule,
    ReceiptsModule,
    RefCauseLetterWorkflowsModule,
    Reference-numbersModule,
    RiversModule,
    Role-moduleModule,
    RoleModule2Module,
    RolesModule,
    Sales-record-ndsModule,
    Sample-area-application-detailsModule,
    Sample-area-application-historiesModule,
    Sample-area-applicationsModule,
    Sample-area-historiesModule,
    Sample-area-itemsModule,
    Sample-area-locationsModule,
    Sample-area-noticesModule,
    Sample-area-reportsModule,
    Sample-areasModule,
    Serial-numbersModule,
    Shells-quotaModule,
    Shells-quota-historiesModule,
    Shells-quota-payment-detailsModule,
    Shells-quota-paymentsModule,
    SlpDomestikApplicationsModule,
    SlpDomestikBuktiVeselModule,
    SlpDomestikStepHistoryModule,
    SlpLuarNegaraApplicationsModule,
    SlpLuarNegaraBuktiVeselModule,
    SlpLuarNegaraDocumentsModule,
    SlpLuarNegaraStepHistoryModule,
    SpeciesModule,
    SsdsModule,
    State-office-mappingsModule,
    Subsistence-applicationModule,
    Subsistence-audit-log-statusModule,
    Subsistence-docModule,
    Subsistence-listModule,
    Subsistence-list-hqsModule,
    Subsistence-list-quotaModule,
    Subsistence-list-quota-hqsModule,
    Subsistence-payment-hqsModule,
    Subsistence-payment-payeesModule,
    Subsistence-payment-statesModule,
    Subsistence-paymentsModule,
    SyaratSsdModule,
    TzLicensePrintLogsModule,
    TzPemohonProfilesModule,
    TzPermohonanDocumentsModule,
    TzPermohonanInspectionAssignmentsModule,
    TzPermohonanInspectionsModule,
    TzPermohonanRayuanDocumentsModule,
    TzPermohonanRayuansModule,
    TzPermohonanReceiptItemsModule,
    TzPermohonanReceiptsModule,
    TzPermohonanStatusHistoriesModule,
    TzPermohonansModule,
    TzVesselsModule,
    User-historiesModule,
    User-moduleModule,
    User-roleModule,
    UserBankAccountsModule,
    UserModule3Module,
    UserRole2Module,
    UsersModule,
    VesselApplicationReviewModule,
    VesselAtfsModule,
    VesselAuditedFinancialStatementsModule,
    VesselBankStatementsModule,
    VesselCompanyAssetsModule,
    VesselEquipmentsModule,
    VesselLicenseAppIvResultModule,
    VesselLicenseApplicationTrailsModule,
    VesselLicenseApplicationsModule,
    VesselLicenseBanksModule,
    VesselLicenseBeneficialOwnersModule,
    VesselLicenseDirectorsModule,
    VesselLicenseDocumentFilesModule,
    VesselLicenseDocumentsModule,
    VesselLicenseInterviewModule,
    VesselLicenseShareholdersModule,
    VesselLicenseVesselsModule,
    VesselRegisteredModule,
    VesselViolationsModule,
    VesselsModule,
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
    // DaratVeselLpiFormV1Module,
    AppointmentsLPIModule,
    AppointmentsInspectionsModule,
    FcmModule,

  ],
  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}
