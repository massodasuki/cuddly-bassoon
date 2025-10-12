const fs = require('fs');
const path = require('path');

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

const srcPath = path.join('src');
const dirs = fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

for (const folderName of dirs) {
  const folderPath = path.join(srcPath, folderName);
  const entityFile = path.join(folderPath, `${folderName}.entity.ts`);
  if (!fs.existsSync(entityFile)) continue; // skip if no entity

  const tableName = folderName.replace(/-/g, '_');

  const className = getClassName(tableName) + 'Entity';
  const serviceName = getServiceName(tableName);
  const controllerName = getControllerName(tableName);
  const moduleName = getModuleName(tableName);

  // generate service if not exists
  const serviceFile = path.join(folderPath, `${folderName}.service.ts`);
  if (!fs.existsSync(serviceFile)) {
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
    fs.writeFileSync(serviceFile, code);
    console.log(`Generated service for ${tableName}`);
  }

  // generate controller if not exists
  const controllerFile = path.join(folderPath, `${folderName}.controller.ts`);
  if (!fs.existsSync(controllerFile)) {
    let code = `import { Controller, Get, Param } from '@nestjs/common';
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
    fs.writeFileSync(controllerFile, code);
    console.log(`Generated controller for ${tableName}`);
  }

  // generate module if not exists
  const moduleFile = path.join(folderPath, `${folderName}.module.ts`);
  if (!fs.existsSync(moduleFile)) {
    let code = `import { Module } from '@nestjs/common';
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
    fs.writeFileSync(moduleFile, code);
    console.log(`Generated module for ${tableName}`);
  }

  // generate dto if not exists
  const dtoPath = path.join(folderPath, 'dto');
  if (!fs.existsSync(dtoPath)) {
    fs.mkdirSync(dtoPath, { recursive: true });
  }

  const createDtoFile = path.join(dtoPath, `create-${folderName}.dto.ts`);
  if (!fs.existsSync(createDtoFile)) {
    let code = `export class Create${className}Dto {}
`;
    fs.writeFileSync(createDtoFile, code);
    console.log(`Generated create DTO for ${tableName}`);
  }

  const updateDtoFile = path.join(dtoPath, `update-${folderName}.dto.ts`);
  if (!fs.existsSync(updateDtoFile)) {
    let code = `export class Update${className}Dto {}
`;
    fs.writeFileSync(updateDtoFile, code);
    console.log(`Generated update DTO for ${tableName}`);
  }
}