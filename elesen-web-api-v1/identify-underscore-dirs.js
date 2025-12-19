const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const underscoreDirs = [];

try {
  const items = fs.readdirSync(componentsDir);
  
  items.forEach(item => {
    const fullPath = path.join(componentsDir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && item.includes('_')) {
      underscoreDirs.push(item);
    }
  });
  
  console.log('Underscore directories found:');
  underscoreDirs.forEach(dir => {
    const dashName = dir.replace(/_/g, '-');
    console.log(`"${dir}" -> "${dashName}"`);
  });
  
  console.log(`\nTotal: ${underscoreDirs.length} directories need to be renamed`);
  
} catch (error) {
  console.error('Error:', error.message);
}