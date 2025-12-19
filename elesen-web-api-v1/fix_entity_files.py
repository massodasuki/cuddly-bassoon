#!/usr/bin/env python3
import os
import re
import glob

def fix_entity_files():
    """Fix the entity files that are missing class declarations"""
    
    # List of entity files that need fixing
    entity_files = [
        'src/major/api/common/entities/catching-location-nd.entity.ts',
        'src/major/api/common/entities/darat-base-jetties.entity.ts',
        'src/major/api/common/entities/enjin.entity.ts',
        'src/major/api/common/entities/fishing-log-nd.entity.ts',
        'src/major/api/common/entities/fishing-log-nds.entity.ts',
        'src/major/api/common/entities/jetties.entity.ts',
        'src/major/api/common/entities/kesalahan.entity.ts',
        'src/major/api/common/entities/kulit.entity.ts',
        'src/major/api/common/entities/parliament-seat.entity.ts',
        'src/major/api/common/entities/parliament-seats.entity.ts',
        'src/major/api/common/entities/parliament.entity.ts',
        'src/major/api/common/entities/parliaments.entity.ts'
    ]
    
    for file_path in entity_files:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Fix the import statement
                content = re.sub(
                    r"import\s*{[^}]*}\s*from\s*['\"][^'\"]*['\"];",
                    "import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';",
                    content
                )
                
                # Fix the class declaration
                # Extract filename without extension and path
                filename = os.path.basename(file_path)
                entity_name = filename.replace('.entity.ts', '').replace('-', '').title()
                
                # Create proper class name (e.g., EnjinEntity, KulitEntity, etc.)
                if 'enjin' in filename:
                    class_name = 'EnjinEntity'
                elif 'kulit' in filename:
                    class_name = 'KulitEntity'
                elif 'jettie' in filename:
                    class_name = 'JettiesEntity'
                elif 'kesalahan' in filename:
                    class_name = 'KesalahanEntity'
                elif 'parliament' in filename:
                    if 'seat' in filename:
                        if filename.endswith('seats.entity.ts'):
                            class_name = 'ParliamentSeatsEntity'
                        else:
                            class_name = 'ParliamentSeatEntity'
                    else:
                        if filename.endswith('s.entity.ts'):
                            class_name = 'ParliamentsEntity'
                        else:
                            class_name = 'ParliamentEntity'
                elif 'catching' in filename:
                    if filename.endswith('s.entity.ts'):
                        class_name = 'CatchingLocationNdsEntity'
                    else:
                        class_name = 'CatchingLocationNdEntity'
                elif 'fishing' in filename:
                    if filename.endswith('s.entity.ts'):
                        class_name = 'FishingLogNdsEntity'
                    else:
                        class_name = 'FishingLogNdEntity'
                elif 'darat' in filename and 'jettie' in filename:
                    class_name = 'DaratBaseJettiesEntity'
                else:
                    # Fallback: use the filename to create class name
                    class_name = entity_name + 'Entity'
                
                # Remove any commented class declaration and add proper one
                content = re.sub(r'//\s*export\s+class\s+\w+\s*{', f'export class {class_name} {{', content)
                
                # Add missing decorators and proper class structure if needed
                if '@Entity' not in content:
                    # Add Entity decorator and class declaration at the beginning
                    lines = content.split('\n')
                    new_lines = []
                    for i, line in enumerate(lines):
                        if i == 0:
                            # Insert Entity decorator after imports
                            if line.strip().startswith('import'):
                                new_lines.append(line)
                                new_lines.append('')
                                new_lines.append('@Entity()')
                                continue
                        new_lines.append(line)
                    content = '\n'.join(new_lines)
                
                # Write the fixed content back
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                    
                print(f"Fixed: {file_path}")
                
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    fix_entity_files()