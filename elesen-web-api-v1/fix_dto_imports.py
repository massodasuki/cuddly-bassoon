#!/usr/bin/env python3
"""
Script to fix DTO import issues in TypeScript files
"""

import os
import re
import glob

def fix_dto_imports_in_file(file_path):
    """Fix DTO import statements in a single TypeScript file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix DTO imports that still have underscores
        content = re.sub(r"from '\./create-([a-zA-Z0-9_]+)\.dto'", 
                        lambda m: f"from './create-{m.group(1).replace('_', '-')}.dto'", 
                        content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript files in src/components"""
    src_dir = "src/components"
    fixed_count = 0
    total_files = 0
    
    # Find all update DTO files
    dto_files = glob.glob(f"{src_dir}/**/dto/update-*.dto.ts", recursive=True)
    
    print(f"Processing {len(dto_files)} DTO files...")
    
    for file_path in dto_files:
        total_files += 1
        if fix_dto_imports_in_file(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"\nSummary:")
    print(f"Total DTO files processed: {total_files}")
    print(f"DTO files fixed: {fixed_count}")
    print(f"DTO files unchanged: {total_files - fixed_count}")

if __name__ == "__main__":
    main()