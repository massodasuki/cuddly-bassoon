#!/usr/bin/env python3
"""
Script to rename entity files from snake_case to kebab-case format
"""
import os
import subprocess
import re

def convert_snake_to_kebab(filename):
    """Convert snake_case to kebab-case"""
    # Remove .entity.ts extension
    name_without_ext = filename.replace('.entity.ts', '')
    # Convert snake_case to kebab-case
    kebab_case = name_without_ext.replace('_', '-')
    return f"{kebab_case}.entity.ts"

def get_entity_files_to_rename():
    """Get list of all entity files with underscores in their names"""
    files_to_rename = []
    
    # Walk through src directory to find entity files
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith('.entity.ts') and '_' in file:
                old_path = os.path.join(root, file)
                new_filename = convert_snake_to_kebab(file)
                new_path = os.path.join(root, new_filename)
                
                # Only include if the filename actually changes
                if old_path != new_path:
                    files_to_rename.append((old_path, new_path))
    
    return files_to_rename

def rename_files():
    """Rename all entity files from snake_case to kebab-case"""
    files_to_rename = get_entity_files_to_rename()
    
    if not files_to_rename:
        print("No files need to be renamed.")
        return
    
    print(f"Found {len(files_to_rename)} files to rename:")
    for old_path, new_path in files_to_rename:
        print(f"  {old_path} -> {new_path}")
    
    # Rename files
    for old_path, new_path in files_to_rename:
        try:
            print(f"Renaming: {old_path} -> {new_path}")
            os.rename(old_path, new_path)
            print(f"[SUCCESS] Successfully renamed {old_path}")
        except Exception as e:
            print(f"[ERROR] Error renaming {old_path}: {e}")
    
    print(f"\nCompleted renaming {len(files_to_rename)} files.")

if __name__ == "__main__":
    rename_files()