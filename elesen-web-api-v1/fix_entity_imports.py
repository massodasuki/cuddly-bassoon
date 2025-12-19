#!/usr/bin/env python3
import os
import re
import glob

# List of non-existent entities to remove
NON_EXISTENT_ENTITIES = [
    'JettieEntity',
    'KesalahanEntity', 
    'ParliamentEntity',
    'ParliamentSeatEntity',
    'FishingLogNdEntity',
    'CatchingLocationNdEntity',
    'KulitEntity',
    'EnjinEntity'
]

def clean_entity_imports(content):
    """Remove non-existent entities from import statements"""
    # Fix import statement
    import_pattern = r'import\s*{([^}]+)}\s*from\s*[\'"][^\'"]*[\'"];'
    
    def replace_import(match):
        imports = match.group(1)
        # Split by comma and clean up whitespace
        entity_list = [entity.strip() for entity in imports.split(',')]
        # Remove non-existent entities
        filtered_entities = [entity for entity in entity_list if entity not in NON_EXISTENT_ENTITIES]
        return f"import {{ {', '.join(filtered_entities)} }} from '../common/entities';"
    
    content = re.sub(import_pattern, replace_import, content)
    return content

def clean_repository_injections(content):
    """Remove @InjectRepository and repository properties for non-existent entities"""
    lines = content.split('\n')
    filtered_lines = []
    skip_next = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this line has @InjectRepository for non-existent entity
        if '@InjectRepository(' in line:
            entity_name = None
            match = re.search(r'@InjectRepository\(([^)]+)\)', line)
            if match:
                entity_name = match.group(1).strip()
            
            # If it's a non-existent entity, skip this line and the next property line
            if entity_name in NON_EXISTENT_ENTITIES:
                skip_next = True
                i += 1  # Skip current line
                continue
            else:
                filtered_lines.append(line)
        elif skip_next and ('private' in line or 'protected' in line) and 'Repository<' in line:
            # Skip the repository property line
            skip_next = False
            i += 1  # Skip this line too
            continue
        else:
            filtered_lines.append(line)
            skip_next = False
        
        i += 1
    
    return '\n'.join(filtered_lines)

def clean_method_usage(content):
    """Remove or comment out method usage of non-existent entities"""
    lines = content.split('\n')
    filtered_lines = []
    
    for line in lines:
        # Check if line uses non-existent entities
        if any(entity in line for entity in NON_EXISTENT_ENTITIES):
            # Comment out the line instead of removing it
            filtered_lines.append('// ' + line)
        else:
            filtered_lines.append(line)
    
    return '\n'.join(filtered_lines)

def fix_file(file_path):
    """Fix a single TypeScript file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = clean_entity_imports(content)
        content = clean_repository_injections(content)
        content = clean_method_usage(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript files in major/api directory
    pattern = "src/major/api/**/*.ts"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    total_files = len(files)
    
    print(f"Processing {total_files} TypeScript files...")
    
    for file_path in files:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nSummary:")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_count}")

if __name__ == "__main__":
    main()