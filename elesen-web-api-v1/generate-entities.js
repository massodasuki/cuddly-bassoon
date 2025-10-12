const fs = require('fs');
const path = require('path');

const dump = fs.readFileSync('dump.sql', 'utf8');

// Split by table structure comments
const tableSections = dump.split(/--\s*Table structure for table `([^`\r\n]+)`/);

const entities = {};

for (let i = 1; i < tableSections.length; i += 2) {
  const tableName = tableSections[i];
  const tableBlock = tableSections[i + 1];

  // Find CREATE TABLE statement
  const createTableMatch = tableBlock.match(/CREATE TABLE `[^`]+` \(([\s\S]*?)\)\s*ENGINE/);
  if (createTableMatch) {
    const columnsText = createTableMatch[1].trim();
    console.log(`Table: ${tableName}, columnsText length: ${columnsText.length}`);
    console.log('columnsText start:', columnsText.substring(0, 200));
    const columns = columnsText.split(/,\s*\n/).map(s => s.trim()).filter(line =>
      line &&
      !line.includes('PRIMARY KEY') &&
      !line.includes('KEY ') &&
      !line.includes('CONSTRAINT') &&
      !line.includes('ENGINE=')
    );

    console.log(`Table: ${tableName}, Columns found: ${columns.length}`);
    if (columns.length > 0) console.log('First column:', columns[0]);

    entities[tableName] = columns.map(col => {
      const trimmed = col.trim();
      const match = trimmed.match(/`([^`]+)` ([^ ]+)(.*)/);
      if (match) {
        return {
          name: match[1],
          type: match[2],
          extra: match[3].trim()
        };
      }
      return null;
    }).filter(Boolean);
  } else {
    console.log(`No match for table: ${tableName}`);
  }
}

fs.writeFileSync('entities.json', JSON.stringify(entities, null, 2));

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

function mapType(mysqlType) {
  if (mysqlType.startsWith('varchar') || mysqlType.startsWith('char') || mysqlType.startsWith('text') || mysqlType.startsWith('enum')) return 'string';
  if (mysqlType.startsWith('int') || mysqlType.startsWith('bigint') || mysqlType.startsWith('tinyint') || mysqlType.startsWith('decimal') || mysqlType.startsWith('double') || mysqlType.startsWith('float')) return 'number';
  if (mysqlType.startsWith('date') || mysqlType.startsWith('datetime') || mysqlType.startsWith('timestamp')) return 'Date';
  if (mysqlType.startsWith('json')) return 'any';
  return 'string';
}

function isNullable(extra) {
  return !extra.includes('NOT NULL');
}

for (const tableName in entities) {
  const folderName = tableName.replace(/_/g, '-');
  const entityFile = path.join('src', folderName, `${folderName}.entity.ts`);
  if (fs.existsSync(entityFile)) continue;
  const className = getClassName(tableName) + 'Entity';
  const columns = entities[tableName];
  let code = `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';\n\n`;
  code += `@Entity('${tableName}')\n`;
  code += `export class ${className} {\n`;
  for (const col of columns) {
    const colName = col.name;
    const mysqlType = col.type;
    const extra = col.extra;
    const tsType = mapType(mysqlType);
    const nullable = isNullable(extra);
    if (colName === 'id') {
      if (mysqlType === 'char(36)') {
        code += `  @PrimaryGeneratedColumn('uuid')\n`;
      } else {
        code += `  @PrimaryGeneratedColumn()\n`;
      }
    } else {
      code += `  @Column({ nullable: ${nullable} })\n`;
    }
    code += `  ${colName}: ${tsType};\n\n`;
  }
  code += `}\n`;
  const folderPath = path.join('src', folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  fs.writeFileSync(entityFile, code);
  console.log(`Generated entity for ${tableName}`);
}