const fs = require('fs');
const path = require('path');

// Mapping of old underscore names to new dash names
const nameMapping = {
  'application_appointments': 'application-appointments',
  'application_atf': 'application-atf',
  'application_atf_payment': 'application-atf-payment',
  'application_change_vessel_tool': 'application-change-vessel-tool',
  'application_change_vessel_tool_approval_log': 'application-change-vessel-tool-approval-log',
  'application_change_vessel_tool_payment': 'application-change-vessel-tool-payment',
  'application_documents': 'application-documents',
  'application_legacies': 'application-legacies',
  'application_license_print_logs': 'application-license-print-logs',
  'application_pins': 'application-pins',
  'application_receipts': 'application-receipts',
  'application_receipt_items': 'application-receipt-items',
  'application_support_document': 'application-support-document',
  'application_tasks': 'application-tasks',
  'application_tpu_rayuan': 'application-tpu-rayuan',
  'application_tpu_receipts': 'application-tpu-receipts',
  'application_tpu_receipt_items': 'application-tpu-receipt-items',
  'application_tpu_ssd': 'application-tpu-ssd',
  'appointments_inspections': 'appointments-inspections',
  'base_transfer_apps': 'base-transfer-apps',
  'base_transfer_docs': 'base-transfer-docs',
  'base_transfer_logs': 'base-transfer-logs',
  'cause_letters': 'cause-letters',
  'cause_letter_attachments': 'cause-letter-attachments',
  'cause_letter_comments': 'cause-letter-comments',
  'cause_letter_stages': 'cause-letter-stages',
  'cause_letter_workflows': 'cause-letter-workflows',
  'course_participants': 'course-participants',
  'device_registration': 'device-registration',
  'elaun_sara_hidup_nds': 'elaun-sara-hidup-nds',
  'eshnd_bank_acc_changes': 'eshnd-bank-acc-changes',
  'eshnd_bank_change_docs': 'eshnd-bank-change-docs',
  'eshnd_payment_logs': 'eshnd-payment-logs',
  'fisherman_merits': 'fisherman-merits',
  'fishing_equipment_lpis': 'fishing-equipment-lpis',
  'full_inspection_lpis': 'full-inspection-lpis',
  'ge_engine_info': 'ge-engine-info',
  'kpv03_vessel_license_application_benificial_owners': 'kpv03-vessel-license-application-benificial-owners',
  'kpv03_vessel_license_application_directors': 'kpv03-vessel-license-application-directors',
  'kpv03_vessel_license_application_finances': 'kpv03-vessel-license-application-finances',
  'kpv03_vessel_license_application_histories': 'kpv03-vessel-license-application-histories',
  'kpv03_vessel_license_application_information': 'kpv03-vessel-license-application-information',
  'kpv03_vessel_license_application_inspection_catches': 'kpv03-vessel-license-application-inspection-catches',
  'kpv03_vessel_license_application_inspection_details': 'kpv03-vessel-license-application-inspection-details',
  'kpv03_vessel_license_application_inspection_engines': 'kpv03-vessel-license-application-inspection-engines',
  'kpv03_vessel_license_application_inspection_items': 'kpv03-vessel-license-application-inspection-items',
  'kpv03_vessel_license_application_inspection_securities': 'kpv03-vessel-license-application-inspection-securities',
  'kpv03_vessel_license_application_inspection_vessels': 'kpv03-vessel-license-application-inspection-vessels',
  'kpv03_vessel_license_application_inspection_voyages': 'kpv03-vessel-license-application-inspection-voyages',
  'kpv03_vessel_license_application_shareholders': 'kpv03-vessel-license-application-shareholders',
  'landing_bases': 'landing-bases',
  'lpi_engines': 'lpi-engines',
  'lpi_equipments': 'lpi-equipments',
  'lpi_equipment_items': 'lpi-equipment-items',
  'lpi_fishing_equipments': 'lpi-fishing-equipments',
  'lpi_fishing_gears': 'lpi-fishing-gears',
  'lpi_inland_fishing_equipments': 'lpi-inland-fishing-equipments',
  'lpi_inland_fishing_equipment_items': 'lpi-inland-fishing-equipment-items',
  'lpi_inspections': 'lpi-inspections',
  'lpi_inspection_details': 'lpi-inspection-details',
  'lpi_inspection_items': 'lpi-inspection-items',
  'lpi_navigations': 'lpi-navigations',
  'lpi_safety_equipments': 'lpi-safety-equipments',
  'lpi_sailing_equipments': 'lpi-sailing-equipments',
  'lpi_vessels': 'lpi-vessels',
  'meeting_attendees': 'meeting-attendees',
  'meeting_contents': 'meeting-contents',
  'mesyuarat_100_04a': 'mesyuarat-100-04a',
  'mesyuarat_50_04a': 'mesyuarat-50-04a',
  'mesyuarat_kickoff_04a': 'mesyuarat-kickoff-04a',
  'mppi_vessel_application': 'mppi-vessel-application',
  'mppi_vessel_archive': 'mppi-vessel-archive',
  'mppi_vessel_extra_file': 'mppi-vessel-extra-file',
  'mppi_vessel_kickoff': 'mppi-vessel-kickoff',
  'mppi_vessel_laporan': 'mppi-vessel-laporan',
  'mppi_vessel_log': 'mppi-vessel-log',
  'mppi_vessel_lpi': 'mppi-vessel-lpi',
  'mppi_vessel_lpi_peralatan': 'mppi-vessel-lpi-peralatan',
  'mppi_vessel_meeting_attendance': 'mppi-vessel-meeting-attendance',
  'mppi_vessel_meeting_invitation': 'mppi-vessel-meeting-invitation',
  'mppi_vessel_minute_discussion': 'mppi-vessel-minute-discussion',
  'mppi_vessel_minute_meeting': 'mppi-vessel-minute-meeting',
  'mppi_vessel_minute_message': 'mppi-vessel-minute-message',
  'mppi_vessel_minute_other_matters': 'mppi-vessel-minute-other-matters',
  'mppi_vessel_minute_postponement': 'mppi-vessel-minute-postponement',
  'mppi_vessel_payment': 'mppi-vessel-payment',
  'mppi_vessel_payment_info': 'mppi-vessel-payment-info',
  'mppi_vessel_pemantauan': 'mppi-vessel-pemantauan',
  'mppi_vessel_slp': 'mppi-vessel-slp',
  'nelayan_darat_cards': 'nelayan-darat-cards',
  'nelayan_darat_licenses': 'nelayan-darat-licenses',
  'pantas_batches': 'pantas-batches',
  'pantas_certificates': 'pantas-certificates',
  'permohonan_04a': 'permohonan-04a',
  'ppv04a_vessel_application': 'ppv04a-vessel-application',
  'ppv04a_vessel_archive': 'ppv04a-vessel-archive',
  'ppv04a_vessel_extra_file': 'ppv04a-vessel-extra-file',
  'ppv04a_vessel_kickoff': 'ppv04a-vessel-kickoff',
  'ppv04a_vessel_laporan': 'ppv04a-vessel-laporan',
  'ppv04a_vessel_log': 'ppv04a-vessel-log',
  'ppv04a_vessel_lpi': 'ppv04a-vessel-lpi',
  'ppv04a_vessel_lpi_peralatan': 'ppv04a-vessel-lpi-peralatan',
  'ppv04a_vessel_meeting_attendance': 'ppv04a-vessel-meeting-attendance',
  'ppv04a_vessel_minute_discussion': 'ppv04a-vessel-minute-discussion',
  'ppv04a_vessel_minute_meeting': 'ppv04a-vessel-minute-meeting',
  'ppv04a_vessel_minute_message': 'ppv04a-vessel-minute-message',
  'ppv04a_vessel_minute_other_matters': 'ppv04a-vessel-minute-other-matters',
  'ppv04a_vessel_minute_postponement': 'ppv04a-vessel-minute-postponement',
  'ppv04a_vessel_payment': 'ppv04a-vessel-payment',
  'ppv04a_vessel_payment_info': 'ppv04a-vessel-payment-info',
  'ppv04a_vessel_pemantauan': 'ppv04a-vessel-pemantauan',
  'ppv04a_vessel_slp': 'ppv04a-vessel-slp',
  'ppv04b_agree_vessel_numbers': 'ppv04b-agree-vessel-numbers',
  'ppv04b_apply_dates': 'ppv04b-apply-dates',
  'ppv04b_apply_date_hob_one': 'ppv04b-apply-date-hob-one',
  'ppv04b_apply_date_lpi': 'ppv04b-apply-date-lpi',
  'ppv04b_apply_date_two': 'ppv04b-apply-date-two',
  'ppv04b_check_212': 'ppv04b-check-212',
  'ppv04b_check_document': 'ppv04b-check-document',
  'ppv04b_check_document_one': 'ppv04b-check-document-one',
  'ppv04b_check_document_two': 'ppv04b-check-document-two',
  'ppv04b_check_ga_document': 'ppv04b-check-ga-document',
  'ppv04b_hob_report_one': 'ppv04b-hob-report-one',
  'ppv04b_hob_report_two': 'ppv04b-hob-report-two',
  'ppv04b_inspection_lpi': 'ppv04b-inspection-lpi',
  'ppv04b_inspection_report_one': 'ppv04b-inspection-report-one',
  'ppv04b_inspection_report_two': 'ppv04b-inspection-report-two',
  'ppv04b_mail_inspection_one': 'ppv04b-mail-inspection-one',
  'ppv04b_no_pin': 'ppv04b-no-pin',
  'ppv04b_payment': 'ppv04b-payment',
  'ppv04b_print_license_grant': 'ppv04b-print-license-grant',
  'ppv04b_supporting_doc_attachments': 'ppv04b-supporting-doc-attachments',
  'ppv35_vessel_payments': 'ppv35-vessel-payments',
  'ppv35_vessel_payment_items': 'ppv35-vessel-payment-items',
  'pp_pt_01_approvals': 'pp-pt-01-approvals',
  'pp_pt_01_rayuan': 'pp-pt-01-rayuan',
  'pp_pt_01_rayuan_lampiran': 'pp-pt-01-rayuan-lampiran',
  'pp_pt_01_reviews': 'pp-pt-01-reviews',
  'pp_pvp_application_details': 'pp-pvp-application-details',
  'ref_cause_letter_workflows': 'ref-cause-letter-workflows',
  'role_module2': 'role-module2',
  'slp_domestik_applications': 'slp-domestik-applications',
  'slp_domestik_bukti_vesel': 'slp-domestik-bukti-vesel',
  'slp_domestik_step_history': 'slp-domestik-step-history',
  'slp_luar_negara_applications': 'slp-luar-negara-applications',
  'slp_luar_negara_bukti_vesel': 'slp-luar-negara-bukti-vesel',
  'slp_luar_negara_documents': 'slp-luar-negara-documents',
  'slp_luar_negara_step_history': 'slp-luar-negara-step-history',
  'syarat_ssd': 'syarat-ssd',
  'tz_license_print_logs': 'tz-license-print-logs',
  'tz_pemohon_profiles': 'tz-pemohon-profiles',
  'tz_permohonans': 'tz-permohonans',
  'tz_permohonan_documents': 'tz-permohonan-documents',
  'tz_permohonan_inspections': 'tz-permohonan-inspections',
  'tz_permohonan_inspection_assignments': 'tz-permohonan-inspection-assignments',
  'tz_permohonan_rayuans': 'tz-permohonan-rayuans',
  'tz_permohonan_rayuan_documents': 'tz-permohonan-rayuan-documents',
  'tz_permohonan_receipts': 'tz-permohonan-receipts',
  'tz_permohonan_receipt_items': 'tz-permohonan-receipt-items',
  'tz_permohonan_status_histories': 'tz-permohonan-status-histories',
  'tz_vessels': 'tz-vessels',
  'user_bank_accounts': 'user-bank-accounts',
  'user_module3': 'user-module3',
  'user_role2': 'user-role2',
  'vessel_application_review': 'vessel-application-review',
  'vessel_atfs': 'vessel-atfs',
  'vessel_audited_financial_statements': 'vessel-audited-financial-statements',
  'vessel_bank_statements': 'vessel-bank-statements',
  'vessel_company_assets': 'vessel-company-assets',
  'vessel_equipments': 'vessel-equipments',
  'vessel_license_applications': 'vessel-license-applications',
  'vessel_license_application_trails': 'vessel-license-application-trails',
  'vessel_license_app_iv_result': 'vessel-license-app-iv-result',
  'vessel_license_banks': 'vessel-license-banks',
  'vessel_license_beneficial_owners': 'vessel-license-beneficial-owners',
  'vessel_license_directors': 'vessel-license-directors',
  'vessel_license_documents': 'vessel-license-documents',
  'vessel_license_document_files': 'vessel-license-document-files',
  'vessel_license_interview': 'vessel-license-interview',
  'vessel_license_shareholders': 'vessel-license-shareholders',
  'vessel_license_vessels': 'vessel-license-vessels',
  'vessel_registered': 'vessel-registered',
  'vessel_violations': 'vessel-violations'
};

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

function updateFileReferences(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Replace underscore module names with dash names
    Object.entries(nameMapping).forEach(([oldName, newName]) => {
      // Replace in import statements
      const importRegex = new RegExp(`from ['"]\\.\\.?\\.?\\/[^'"]*\\/${oldName}['"]`, 'g');
      const updatedImportContent = updatedContent.replace(importRegex, (match) => {
        const newMatch = match.replace(new RegExp(oldName, 'g'), newName);
        hasChanges = true;
        console.log(`  Import: ${match} -> ${newMatch}`);
        return newMatch;
      });

      // Replace in relative path references
      const relativePathRegex = new RegExp(`['"]\\.\\.?\\.?\\/(?!.*\\.${oldName})[^'"]*\\/${oldName}['"]`, 'g');
      const updatedRelativeContent = updatedImportContent.replace(relativePathRegex, (match) => {
        const newMatch = match.replace(new RegExp(oldName, 'g'), newName);
        hasChanges = true;
        console.log(`  Relative path: ${match} -> ${newMatch}`);
        return newMatch;
      });

      updatedContent = updatedRelativeContent;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✓ Updated: ${filePath}`);
    }

  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

console.log('Starting to update file references...');

// Get all TypeScript files in the project
const allFiles = getAllFiles('src');

// Filter for TypeScript files
const tsFiles = allFiles.filter(file => file.endsWith('.ts') || file.endsWith('.js'));

console.log(`Found ${tsFiles.length} TypeScript/JavaScript files to process...`);

tsFiles.forEach(file => {
  updateFileReferences(file);
});

console.log('\nFile reference updating completed!');