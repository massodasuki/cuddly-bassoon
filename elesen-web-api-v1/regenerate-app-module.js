const fs = require('fs');
const path = require('path');

function toPascalCase(str) {
  const withUnderscore = str.replace(/-/g, '_');
  return withUnderscore.charAt(0).toUpperCase() + withUnderscore.slice(1);
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
    const moduleContent = fs.readFileSync(moduleFile, 'utf8');
    const match = moduleContent.match(/export class (\w+)Module/);
    if (match) {
      const moduleName = match[1] + 'Module';
      moduleImports.push(`import { ${moduleName} } from './${folderName}/${folderName}.module';`);
      moduleNames.push(moduleName);
    }
  }
}

let content = `import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
${moduleImports.join('\n')}

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
${moduleNames.map(name => `    ${name},`).join('\n')}
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
`;

fs.writeFileSync(path.join(srcPath, 'app.module.ts'), content);
console.log('Regenerated app.module.ts');