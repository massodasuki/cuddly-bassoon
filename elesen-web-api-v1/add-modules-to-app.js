const fs = require('fs');
const path = require('path');

function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

function getModuleName(folderName) {
  return toPascalCase(folderName) + 'Module';
}

const srcPath = path.join('src');
const dirs = fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

const moduleImports = [];
const moduleNames = [];

for (const folderName of dirs) {
  const moduleFile = path.join(srcPath, folderName, `${folderName}.module.ts`);
  if (fs.existsSync(moduleFile)) {
    const moduleName = getModuleName(folderName);
    moduleImports.push(`import { ${moduleName} } from './${folderName}/${folderName}.module';`);
    moduleNames.push(moduleName);
  }
}

// read app.module.ts
const appModulePath = path.join(srcPath, 'app.module.ts');
let content = fs.readFileSync(appModulePath, 'utf8');

// add imports after the last import
const importLines = moduleImports.join('\n');
const lastImportIndex = content.lastIndexOf("import {");
const insertPos = content.indexOf('\n', lastImportIndex) + 1;
content = content.slice(0, insertPos) + importLines + '\n' + content.slice(insertPos);

// add to imports array
const importsStart = content.indexOf('imports: [');
const importsEnd = content.indexOf('],', importsStart);
const existingImports = content.substring(importsStart + 9, importsEnd).trim();
const newImports = existingImports + ',\n    ' + moduleNames.join(',\n    ');
content = content.replace(existingImports, newImports);

fs.writeFileSync(appModulePath, content);
console.log('Updated app.module.ts with new modules');