#!/usr/bin/env python3
"""
Script to fix import path issues in TypeScript files
- Replace underscore paths with hyphen paths
- Remove .ts extensions from import paths
"""

import os
import re
import glob

def fix_imports_in_file(file_path):
    """Fix import statements in a single TypeScript file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern 1: Fix underscore to hyphen in import paths
        # Match patterns like: './component_name.service' -> './component-name.service'
        content = re.sub(r"from '\./([a-zA-Z0-9_]+)\.service'", 
                        lambda m: f"from './{m.group(1).replace('_', '-')}.service'", 
                        content)
        
        content = re.sub(r"from '\./([a-zA-Z0-9_]+)\.controller'", 
                        lambda m: f"from './{m.group(1).replace('_', '-')}.controller'", 
                        content)
        
        content = re.sub(r"from '\./dto/create-([a-zA-Z0-9_]+)\.dto'", 
                        lambda m: f"from './dto/create-{m.group(1).replace('_', '-')}.dto'", 
                        content)
        
        content = re.sub(r"from '\./dto/update-([a-zA-Z0-9_]+)\.dto'", 
                        lambda m: f"from './dto/update-{m.group(1).replace('_', '-')}.dto'", 
                        content)
        
        content = re.sub(r"from '\./([a-zA-Z0-9_]+)\.entity'", 
                        lambda m: f"from './{m.group(1).replace('_', '-')}.entity'", 
                        content)
        
        # Pattern 2: Remove .ts extensions from import paths
        content = re.sub(r"from '\./([a-zA-Z0-9-]+)\.entity\.ts'", 
                        r"from './\1.entity'", 
                        content)
        
        content = re.sub(r"from '\.\./([a-zA-Z0-9-]+)\.entity\.ts'", 
                        r"from '../\1.entity'", 
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
    
    # Find all TypeScript files
    ts_files = glob.glob(f"{src_dir}/**/*.ts", recursive=True)
    
    print(f"Processing {len(ts_files)} TypeScript files...")
    
    for file_path in ts_files:
        total_files += 1
        if fix_imports_in_file(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"\nSummary:")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_count}")
    print(f"Files unchanged: {total_files - fixed_count}")

if __name__ == "__main__":
    main()