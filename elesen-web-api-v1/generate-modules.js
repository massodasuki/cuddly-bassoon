const fs = require('fs');
const path = require('path');

const entities = JSON.parse(fs.readFileSync('entities.json', 'utf8'));

function toKebabCase(str) {
  return str.replace(/_/g, '-');
}

function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + toCamelCase(str.slice(1));
}

function getClassName(tableName) {
  const pascal = toPascalCase(tableName);
  if (pascal.endsWith('s')) return pascal.slice(0, -1);
  return pascal;
}

function getPluralName(tableName) {
  return toKebabCase(tableName);
}

function getServiceName(tableName) {
  return toPascalCase(tableName) + 'Service';
}

function getControllerName(tableName) {
  return toPascalCase(tableName) + 'Controller';
}

function getModuleName(tableName) {
  return toPascalCase(tableName) + 'Module';
}

for (const tableName in entities) {
  const folderName = getPluralName(tableName);
  const folderPath = path.join('src', folderName);
  if (fs.existsSync(folderPath)) continue;

  const className = getClassName(tableName);
  const serviceName = getServiceName(tableName);
  const controllerName = getControllerName(tableName);
  const moduleName = getModuleName(tableName);

  // create folder
  fs.mkdirSync(folderPath, { recursive: true });

  // generate service
  let code = `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${className} } from './${folderName}.entity';

@Injectable()
export class ${serviceName} {
  constructor(
    @InjectRepository(${className})
    private ${toCamelCase(tableName)}Repository: Repository<${className}>,
  ) {}

  findAll(): Promise<${className}[]> {
    return this.${toCamelCase(tableName)}Repository.find();
  }

  findOne(id: string): Promise<${className}> {
    return this.${toCamelCase(tableName)}Repository.findOneBy({ id });
  }
}
`;
  fs.writeFileSync(path.join(folderPath, `${folderName}.service.ts`), code);

  // generate controller
  code = `import { Controller, Get, Param } from '@nestjs/common';
import { ${serviceName} } from './${folderName}.service';
import { ${className} } from './${folderName}.entity';

@Controller('${folderName}')
export class ${controllerName} {
  constructor(private readonly ${toCamelCase(tableName)}Service: ${serviceName}) {}

  @Get()
  findAll(): Promise<${className}[]> {
    return this.${toCamelCase(tableName)}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<${className}> {
    return this.${toCamelCase(tableName)}Service.findOne(id);
  }
}
`;
  fs.writeFileSync(path.join(folderPath, `${folderName}.controller.ts`), code);

  // generate module
  code = `import { Module } from '@nestjs/common';
import { ${serviceName} } from './${folderName}.service';
import { ${controllerName} } from './${folderName}.controller';
import { ${className} } from './${folderName}.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([${className}])],
  providers: [${serviceName}],
  controllers: [${controllerName}],
  exports: [${serviceName}],
})
export class ${moduleName} {}
`;
  fs.writeFileSync(path.join(folderPath, `${folderName}.module.ts`), code);

  // generate dto
  const dtoPath = path.join(folderPath, 'dto');
  fs.mkdirSync(dtoPath, { recursive: true });

  code = `export class Create${className}Dto {}
`;
  fs.writeFileSync(path.join(dtoPath, `create-${folderName}.dto.ts`), code);

  code = `export class Update${className}Dto {}
`;
  fs.writeFileSync(path.join(dtoPath, `update-${folderName}.dto.ts`), code);

  console.log(`Generated module for ${tableName}`);
}