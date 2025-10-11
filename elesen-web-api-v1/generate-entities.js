const fs = require('fs');

const dump = fs.readFileSync('dump.sql', 'utf8');

// Split by table structure comments
const tableSections = dump.split(/--\s*Table structure for table `([^`]+)`/);

const entities = {};

for (let i = 1; i < tableSections.length; i += 2) {
  const tableName = tableSections[i];
  const tableBlock = tableSections[i + 1];

  // Find CREATE TABLE statement
  const createTableMatch = tableBlock.match(/CREATE TABLE `[^`]+` \(([\s\S]*?)\)\s*ENGINE/);
  if (createTableMatch) {
    const columnsText = createTableMatch[1];
    console.log(`Table: ${tableName}, columnsText length: ${columnsText.length}`);
    console.log('columnsText start:', columnsText.substring(0, 200));
    const columns = columnsText.split(/,\n/).map(s => s.trim()).filter(line =>
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

console.log(JSON.stringify(entities, null, 2));