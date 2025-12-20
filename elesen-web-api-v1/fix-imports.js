const fs = require('fs');
const path = require('path');

const srcPath = path.join('src');
const dirs = fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

for (const folderName of dirs) {
  const folderPath = path.join(srcPath, folderName);
  const entityFile = path.join(folderPath, `${folderName}.entity.ts`);
  if (!fs.existsSync(entityFile)) continue;

  // read entity file to get the exported class name
  const entityContent = fs.readFileSync(entityFile, 'utf8');
  const match = entityContent.match(/export class (\w+)Entity/);
  if (!match) continue;
  const entityClassName = match[1] + 'Entity';

  // now update the imports in service, controller, module
  const filesToUpdate = [
    `${folderName}.service.ts`,
    `${folderName}.controller.ts`,
    `${folderName}.module.ts`
  ];

  for (const fileName of filesToUpdate) {
    const filePath = path.join(folderPath, fileName);
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');
    // replace import { ClassName } from './entity' with import { ClassNameEntity } from './entity'
    const importRegex = new RegExp(`import \\{ (\\w+) \\} from '\\./${folderName}\\.entity';`);
    content = content.replace(importRegex, `import { ${entityClassName} } from './${folderName}.entity';`);
    // replace all occurrences of the old class name with the new one
    const oldClassName = match[1];
    content = content.replace(new RegExp(oldClassName, 'g'), entityClassName);
    fs.writeFileSync(filePath, content);
  }
}

console.log('Fixed imports');
