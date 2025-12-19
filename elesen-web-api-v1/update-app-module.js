#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read existing app.module.ts
const appModulePath = path.join(__dirname, 'src', 'app.module.ts');
let appModuleContent = fs.readFileSync(appModulePath, 'utf8');

// Get all component directories
const componentsDir = path.join(__dirname, 'src', 'components');
const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => !name.startsWith('.'))
  .sort();

// Generate import statements
const importStatements = componentDirs.map(tableName => {
  const className = tableName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  return `import { ${className}Module } from './components/${tableName}/${tableName}.module';`;
}).join('\n');

// Generate module registrations
const moduleRegistrations = componentDirs.map(tableName => {
  const className = tableName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  return `    ${className}Module,`;
}).join('\n');

// Find the import section and add new imports
const importSectionRegex = /import\s*{[^}]*}\s*from\s*['"][^'"]*application-pins\/application-pins\.module['"];\s*\n/;
const newImportSection = `import { ApplicationPinModule } from './components/application-pins/application-pins.module';\nimport { ApplicationAppointmentModule } from './components/application-appointments/application-appointments.module';`;

if (importSectionRegex.test(appModuleContent)) {
  appModuleContent = appModuleContent.replace(importSectionRegex, newImportSection + '\n');
} else {
  // If we can't find the specific import, add after the last import
  const lastImportMatch = appModuleContent.match(/import\s+.*\s+from\s+['"][^'"]*['"];\s*\n(?!import)/);
  if (lastImportMatch) {
    appModuleContent = appModuleContent.replace(lastImportMatch[0], lastImportMatch[0] + newImportSection + '\n');
  }
}

// Add all other imports before the existing ones
appModuleContent = appModuleContent.replace(
  /import\s*{[^}]*}\s*from\s*['"][^'"]*application-pins\/application-pins\.module['"];\s*\nimport\s*{[^}]*}\s*from\s*['"][^'"]*application-appointments\/application-appointments\.module['"];\s*\n/,
  `import { ApplicationPinModule } from './components/application-pins/application-pins.module';\nimport { ApplicationAppointmentModule } from './components/application-appointments/application-appointments.module';\n${importStatements}\n`
);

// Find the imports array and add all modules
const importsArrayRegex = /(\s+)(ApplicationPinModule,\s*\n\s+ApplicationAppointmentModule,)/;
if (importsArrayRegex.test(appModuleContent)) {
  appModuleContent = appModuleContent.replace(importsArrayRegex, `$1$2\n${moduleRegistrations}`);
} else {
  // If we can't find the specific registration, add after ApplicationPinModule
  const appModuleRegex = /(ApplicationPinModule,\s*\n)/;
  if (appModuleRegex.test(appModuleContent)) {
    appModuleContent = appModuleContent.replace(appModuleRegex, `$1${moduleRegistrations}\n`);
  }
}

// Clean up duplicate entries and sort
appModuleContent = appModuleContent.replace(/,\s*\n\s*,/g, ',\n');

// Write back to file
fs.writeFileSync(appModulePath, appModuleContent);

console.log('✅ Updated app.module.ts with all generated modules');

// Also create a summary report
const summaryPath = path.join(__dirname, 'generated-modules-summary.md');
const summaryContent = `# Generated CRUD Modules Summary

**Total Modules Generated:** ${componentDirs.length}

**Date:** ${new Date().toISOString()}

## Modules List

${componentDirs.map((name, index) => `${index + 1}. ${name}`).join('\n')}

## File Structure

Each module contains:
- Entity file - TypeORM entity
- DTO files - Create and Update data transfer objects
- Service file - Business logic with CRUD operations
- Controller file - REST API endpoints
- Module file - NestJS module configuration
- SQL file - Database table definition

## API Endpoints

Each module provides these endpoints:
- POST /{table} - Create new record
- GET /{table} - Get all records
- GET /{table}/:id - Get record by ID
- GET /{table}/application/:applicationId - Get records by application ID
- PATCH /{table}/:id - Update record
- DELETE /{table}/:id - Delete record

## Next Steps

1. Review and customize entity fields as needed
2. Run database migrations to create tables
3. Test API endpoints
4. Add business logic to services as required
`;

fs.writeFileSync(summaryPath, summaryContent);
console.log(`📊 Created summary report: ${summaryPath}`);

module.exports = { componentDirs };