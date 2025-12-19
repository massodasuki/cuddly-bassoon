#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of all tables from the user
const tables = [
  'application_appointments',
  'application_atf',
  'application_atf_payment',
  'application_change_vessel_tool',
  'application_change_vessel_tool_approval_log',
  'application_change_vessel_tool_payment',
  'application_documents',
  'application_legacies',
  'application_license_print_logs',
  'application_pins',
  'application_receipt_items',
  'application_receipts',
  'application_support_document',
  'application_tasks',
  'application_tpu_rayuan',
  'application_tpu_receipt_items',
  'application_tpu_receipts',
  'application_tpu_ssd',
  'appointments_inspections',
  'base_transfer_apps',
  'base_transfer_docs',
  'base_transfer_logs',
  'cause_letter_attachments',
  'cause_letter_comments',
  'cause_letter_stages',
  'cause_letter_workflows',
  'cause_letters',
  'course_participants',
  'device_registration',
  'elaun_sara_hidup_nds',
  'eshnd_bank_acc_changes',
  'eshnd_bank_change_docs',
  'eshnd_payment_logs',
  'fisherman_merits',
  'fishing_equipment_lpis',
  'full_inspection_lpis',
  'ge_engine_info',
  'kpv03_vessel_license_application_benificial_owners',
  'kpv03_vessel_license_application_directors',
  'kpv03_vessel_license_application_finances',
  'kpv03_vessel_license_application_histories',
  'kpv03_vessel_license_application_information',
  'kpv03_vessel_license_application_inspection_catches',
  'kpv03_vessel_license_application_inspection_details',
  'kpv03_vessel_license_application_inspection_engines',
  'kpv03_vessel_license_application_inspection_items',
  'kpv03_vessel_license_application_inspection_securities',
  'kpv03_vessel_license_application_inspection_vessels',
  'kpv03_vessel_license_application_inspection_voyages',
  'kpv03_vessel_license_application_shareholders',
  'landing_bases',
  'lpi_engines',
  'lpi_equipment_items',
  'lpi_equipments',
  'lpi_fishing_equipments',
  'lpi_fishing_gears',
  'lpi_inland_fishing_equipment_items',
  'lpi_inland_fishing_equipments',
  'lpi_inspection_details',
  'lpi_inspection_items',
  'lpi_inspections',
  'lpi_navigations',
  'lpi_safety_equipments',
  'lpi_sailing_equipments',
  'lpi_vessels',
  'meeting_attendees',
  'meeting_contents',
  'meetings',
  'mesyuarat_100_04a',
  'mesyuarat_50_04a',
  'mesyuarat_kickoff_04a',
  'modules2',
  'mppi_vessel_application',
  'mppi_vessel_archive',
  'mppi_vessel_extra_file',
  'mppi_vessel_kickoff',
  'mppi_vessel_laporan',
  'mppi_vessel_log',
  'mppi_vessel_lpi',
  'mppi_vessel_lpi_peralatan',
  'mppi_vessel_meeting_attendance',
  'mppi_vessel_meeting_invitation',
  'mppi_vessel_minute_discussion',
  'mppi_vessel_minute_meeting',
  'mppi_vessel_minute_message',
  'mppi_vessel_minute_other_matters',
  'mppi_vessel_minute_postponement',
  'mppi_vessel_payment',
  'mppi_vessel_payment_info',
  'mppi_vessel_pemantauan',
  'mppi_vessel_slp',
  'nelayan_darat_cards',
  'nelayan_darat_licenses',
  'pantas_batches',
  'pantas_certificates',
  'permohonan_04a',
  'pp_pt_01_approvals',
  'pp_pt_01_rayuan',
  'pp_pt_01_rayuan_lampiran',
  'pp_pt_01_reviews',
  'pp_pvp_application_details',
  'ppv04a_vessel_application',
  'ppv04a_vessel_archive',
  'ppv04a_vessel_extra_file',
  'ppv04a_vessel_kickoff',
  'ppv04a_vessel_laporan',
  'ppv04a_vessel_log',
  'ppv04a_vessel_lpi',
  'ppv04a_vessel_lpi_peralatan',
  'ppv04a_vessel_meeting_attendance',
  'ppv04a_vessel_minute_discussion',
  'ppv04a_vessel_minute_meeting',
  'ppv04a_vessel_minute_message',
  'ppv04a_vessel_minute_other_matters',
  'ppv04a_vessel_minute_postponement',
  'ppv04a_vessel_payment',
  'ppv04a_vessel_payment_info',
  'ppv04a_vessel_pemantauan',
  'ppv04a_vessel_slp',
  'ppv04b_agree_vessel_numbers',
  'ppv04b_apply_date_hob_one',
  'ppv04b_apply_date_lpi',
  'ppv04b_apply_date_two',
  'ppv04b_apply_dates',
  'ppv04b_check_212',
  'ppv04b_check_document',
  'ppv04b_check_document_one',
  'ppv04b_check_document_two',
  'ppv04b_check_ga_document',
  'ppv04b_hob_report_one',
  'ppv04b_hob_report_two',
  'ppv04b_inspection_lpi',
  'ppv04b_inspection_report_one',
  'ppv04b_inspection_report_two',
  'ppv04b_mail_inspection_one',
  'ppv04b_no_pin',
  'ppv04b_payment',
  'ppv04b_print_license_grant',
  'ppv04b_supporting_doc_attachments',
  'ppv04bs',
  'ppv35_vessel_payment_items',
  'ppv35_vessel_payments',
  'procurements',
  'ref_cause_letter_workflows',
  'role_module2',
  'slp_domestik_applications',
  'slp_domestik_bukti_vesel',
  'slp_domestik_step_history',
  'slp_luar_negara_applications',
  'slp_luar_negara_bukti_vesel',
  'slp_luar_negara_documents',
  'slp_luar_negara_step_history',
  'syarat_ssd',
  'tz_license_print_logs',
  'tz_pemohon_profiles',
  'tz_permohonan_documents',
  'tz_permohonan_inspection_assignments',
  'tz_permohonan_inspections',
  'tz_permohonan_rayuan_documents',
  'tz_permohonan_rayuans',
  'tz_permohonan_receipt_items',
  'tz_permohonan_receipts',
  'tz_permohonan_status_histories',
  'tz_permohonans',
  'tz_vessels',
  'user_bank_accounts',
  'user_module3',
  'user_role2',
  'vessel_application_review',
  'vessel_atfs',
  'vessel_audited_financial_statements',
  'vessel_bank_statements',
  'vessel_company_assets',
  'vessel_equipments',
  'vessel_license_app_iv_result',
  'vessel_license_application_trails',
  'vessel_license_applications',
  'vessel_license_banks',
  'vessel_license_beneficial_owners',
  'vessel_license_directors',
  'vessel_license_document_files',
  'vessel_license_documents',
  'vessel_license_interview',
  'vessel_license_shareholders',
  'vessel_license_vessels',
  'vessel_registered',
  'vessel_violations'
];

// Convert table name to PascalCase for class names
function toPascalCase(str) {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Convert table name to camelCase
function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

// Generate entity file content
function generateEntity(tableName) {
  const className = toPascalCase(tableName) + 'Entity';
  const entityName = toCamelCase(tableName) + 'Entity';
  
  return `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('${tableName}')
export class ${className} {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  is_deleted: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}`;
}

// Generate create DTO
function generateCreateDto(tableName) {
  return `import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class Create${toPascalCase(tableName)}Dto {
  @IsString()
  application_id: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsInt()
  is_deleted?: number;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;

  @IsOptional()
  @IsDateString()
  created_at?: string;

  @IsOptional()
  @IsDateString()
  updated_at?: string;
}`;
}

// Generate update DTO
function generateUpdateDto(tableName) {
  return `import { PartialType } from '@nestjs/mapped-types';
import { Create${toPascalCase(tableName)}Dto } from './create-${tableName}.dto';

export class Update${toPascalCase(tableName)}Dto extends PartialType(Create${toPascalCase(tableName)}Dto) {}`;
}

// Generate service
function generateService(tableName) {
  const className = toPascalCase(tableName) + 'Entity';
  const serviceName = toPascalCase(tableName) + 'Service';
  const repositoryName = toCamelCase(tableName) + 'Repository';
  
  return `import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${className} } from './${tableName}.entity';
import { Create${toPascalCase(tableName)}Dto } from './dto/create-${tableName}.dto';
import { Update${toPascalCase(tableName)}Dto } from './dto/update-${tableName}.dto';

@Injectable()
export class ${serviceName} {
  constructor(
    @InjectRepository(${className})
    private ${repositoryName}: Repository<${className}>,
  ) {}

  findAll(): Promise<${className}[]> {
    return this.${repositoryName}.find();
  }

  async findOne(id: string): Promise<${className}> {
    const entity = await this.${repositoryName}.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(\`${className} with id \${id} not found\`);
    }
    return entity;
  }

  async create(create${toPascalCase(tableName)}Dto: Create${toPascalCase(tableName)}Dto): Promise<${className}> {
    const entity = this.${repositoryName}.create(create${toPascalCase(tableName)}Dto);
    return this.${repositoryName}.save(entity);
  }

  async update(id: string, update${toPascalCase(tableName)}Dto: Update${toPascalCase(tableName)}Dto): Promise<${className}> {
    await this.${repositoryName}.update(id, update${toPascalCase(tableName)}Dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.${repositoryName}.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<${className}[]> {
    return this.${repositoryName}.find({
      where: { application_id: applicationId }
    });
  }
}`;
}

// Generate controller
function generateController(tableName) {
  const className = toPascalCase(tableName) + 'Entity';
  const serviceName = toPascalCase(tableName) + 'Service';
  const controllerName = toPascalCase(tableName) + 'Controller';
  
  return `import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${serviceName} } from './${tableName}.service';
import { Create${toPascalCase(tableName)}Dto } from './dto/create-${tableName}.dto';
import { Update${toPascalCase(tableName)}Dto } from './dto/update-${tableName}.dto';

@Controller('${tableName}')
export class ${controllerName} {
  constructor(private readonly ${toCamelCase(serviceName)}: ${serviceName}) {}

  @Post()
  create(@Body() create${toPascalCase(tableName)}Dto: Create${toPascalCase(tableName)}Dto) {
    return this.${toCamelCase(serviceName)}.create(create${toPascalCase(tableName)}Dto);
  }

  @Get()
  findAll() {
    return this.${toCamelCase(serviceName)}.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${toCamelCase(serviceName)}.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.${toCamelCase(serviceName)}.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update${toPascalCase(tableName)}Dto: Update${toPascalCase(tableName)}Dto) {
    return this.${toCamelCase(serviceName)}.update(id, update${toPascalCase(tableName)}Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${toCamelCase(serviceName)}.remove(id);
  }
}`;
}

// Generate module
function generateModule(tableName) {
  const className = toPascalCase(tableName) + 'Entity';
  const serviceName = toPascalCase(tableName) + 'Service';
  const controllerName = toPascalCase(tableName) + 'Controller';
  const moduleName = toPascalCase(tableName) + 'Module';
  
  return `import { Module } from '@nestjs/common';
import { ${serviceName} } from './${tableName}.service';
import { ${controllerName} } from './${tableName}.controller';
import { ${className} } from './${tableName}.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([${className}])],
  providers: [${serviceName}],
  controllers: [${controllerName}],
  exports: [${serviceName}],
})
export class ${moduleName} {}`;
}

// Generate SQL table definition
function generateSql(tableName) {
  return `-- ${toPascalCase(tableName)} Table Definition
CREATE TABLE \`${tableName}\` (
  \`id\` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  \`application_id\` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  \`status\` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`remarks\` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  \`is_deleted\` int DEFAULT 0,
  \`created_by\` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`updated_by\` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`deleted_by\` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`created_at\` timestamp NULL DEFAULT NULL,
  \`updated_at\` timestamp NULL DEFAULT NULL,
  \`deleted_at\` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`idx_${tableName}_application_id\` (\`application_id\`),
  CONSTRAINT \`fk_${tableName}_application_id\` FOREIGN KEY (\`application_id\`) REFERENCES \`applications\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;
}

// Create directory structure
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate all files for a table
function generateTableFiles(tableName) {
  const componentDir = path.join(__dirname, 'src', 'components', tableName);
  const dtoDir = path.join(componentDir, 'dto');
  
  ensureDirectoryExists(componentDir);
  ensureDirectoryExists(dtoDir);
  
  // Generate entity
  fs.writeFileSync(path.join(componentDir, `${tableName}.entity.ts`), generateEntity(tableName));
  
  // Generate DTOs
  fs.writeFileSync(path.join(dtoDir, `create-${tableName}.dto.ts`), generateCreateDto(tableName));
  fs.writeFileSync(path.join(dtoDir, `update-${tableName}.dto.ts`), generateUpdateDto(tableName));
  
  // Generate service
  fs.writeFileSync(path.join(componentDir, `${tableName}.service.ts`), generateService(tableName));
  
  // Generate controller
  fs.writeFileSync(path.join(componentDir, `${tableName}.controller.ts`), generateController(tableName));
  
  // Generate module
  fs.writeFileSync(path.join(componentDir, `${tableName}.module.ts`), generateModule(tableName));
  
  // Generate SQL
  fs.writeFileSync(path.join(componentDir, `${tableName}_table.sql`), generateSql(tableName));
  
  console.log(`✅ Generated files for ${tableName}`);
}

// Main execution
async function main() {
  console.log('🚀 Starting CRUD module generation...\n');
  
  let generatedCount = 0;
  for (const tableName of tables) {
    try {
      generateTableFiles(tableName);
      generatedCount++;
    } catch (error) {
      console.error(`❌ Error generating files for ${tableName}:`, error.message);
    }
  }
  
  console.log(`\n✨ Generation complete! Created ${generatedCount} modules.`);
  console.log('\n📝 Next steps:');
  console.log('1. Review the generated files');
  console.log('2. Customize entity fields as needed');
  console.log('3. Add modules to app.module.ts (run update-app-module.js if available)');
  console.log('4. Run database migrations');
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateTableFiles, tables };