#!/usr/bin/env python3
import os
import re
import glob

def fix_imports():
    """Fix all incorrect imports in the major/api directory"""
    
    # Find all TypeScript files in major/api directory
    pattern = "src/major/api/**/*.ts"
    files = glob.glob(pattern, recursive=True)
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix incorrect imports based on the file type and content
            
            # Fix @nestjs/common imports
            content = re.sub(
                r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]../common/entities['\"];",
                lambda m: fix_nestjs_imports(m.group(1), file_path),
                content
            )
            
            # Fix typeorm imports
            content = re.sub(
                r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]../common/entities['\"];",
                lambda m: fix_typeorm_imports(m.group(1), file_path),
                content
            )
            
            # Fix other specific imports based on common patterns
            content = re.sub(
                r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]../common/entities['\"];",
                lambda m: fix_specific_imports(m.group(1), file_path),
                content
            )
            
            # Write back if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed imports in: {file_path}")
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

def fix_nestjs_imports(imports, file_path):
    """Fix @nestjs/common imports"""
    import_list = [imp.strip() for imp in imports.split(',')]
    
    # NestJS decorators and classes
    nestjs_items = [
        'Module', 'Controller', 'Get', 'Post', 'Patch', 'Delete', 'Put', 'Param', 
        'Body', 'Query', 'Injectable', 'Inject', 'InjectRepository', 'Repository',
        'UnauthorizedException', 'NotFoundException', 'BadRequestException',
        'UseGuards', 'Res', 'Req'
    ]
    
    # Swagger decorators
    swagger_items = [
        'ApiTags', 'ApiOperation', 'ApiResponse', 'ApiQuery', 'ApiProperty', 
        'ApiPropertyOptional', 'ApiOkResponse'
    ]
    
    # Items that should come from @nestjs/common
    common_items = nestjs_items + swagger_items
    
    # Filter imports that should be from @nestjs/common
    filtered_imports = [imp for imp in import_list if imp in common_items]
    
    if filtered_imports:
        return f"import {{ {', '.join(filtered_imports)} }} from '@nestjs/common';"
    
    return f"import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';"

def fix_typeorm_imports(imports, file_path):
    """Fix typeorm imports"""
    import_list = [imp.strip() for imp in imports.split(',')]
    
    # TypeORM decorators and classes
    typeorm_items = [
        'Entity', 'Column', 'PrimaryGeneratedColumn', 'PrimaryColumn', 'CreateDateColumn',
        'UpdateDateColumn', 'DeleteDateColumn', 'OneToOne', 'ManyToOne', 'OneToMany',
        'ManyToMany', 'JoinColumn', 'JoinTable'
    ]
    
    # Filter imports that should be from typeorm
    filtered_imports = [imp for imp in import_list if imp in typeorm_items]
    
    if filtered_imports:
        return f"import {{ {', '.join(filtered_imports)} }} from 'typeorm';"
    
    return f"// No typeorm imports found"

def fix_specific_imports(imports, file_path):
    """Fix other specific imports"""
    import_list = [imp.strip() for imp in imports.split(',')]
    
    # JWT imports
    jwt_items = ['JwtService', 'JwtModule', 'PassportModule', 'JwtStrategy', 'JwtRefreshStrategy', 'JwtPayload']
    
    # Class validator imports
    validator_items = ['IsString', 'IsNumber', 'IsOptional', 'IsBoolean', 'IsDateString', 'IsNotEmpty', 'IsEmail']
    
    # Class transformer imports
    transformer_items = ['PartialType']
    
    # OpenAPI imports
    openapi_items = ['ApiProperty', 'ApiPropertyOptional']
    
    all_specific_items = jwt_items + validator_items + transformer_items + openapi_items
    
    # Filter imports that should be from specific packages
    filtered_imports = [imp for imp in import_list if imp in all_specific_items]
    
    if filtered_imports:
        # Group by package
        jwt_imports = [imp for imp in filtered_imports if imp in jwt_items]
        validator_imports = [imp for imp in filtered_imports if imp in validator_items]
        transformer_imports = [imp for imp in filtered_imports if imp in transformer_items]
        openapi_imports = [imp for imp in filtered_imports if imp in openapi_items]
        
        imports_str = ""
        
        if jwt_imports:
            imports_str += f"import {{ {', '.join(jwt_imports)} }} from '@nestjs/jwt';\n"
        
        if validator_imports:
            imports_str += f"import {{ {', '.join(validator_imports)} }} from 'class-validator';\n"
        
        if transformer_imports:
            imports_str += f"import {{ {', '.join(transformer_imports)} }} from '@nestjs/mapped-types';\n"
        
        if openapi_imports:
            imports_str += f"import {{ {', '.join(openapi_imports)} }} from '@nestjs/swagger';"
        
        return imports_str
    
    return f"// No specific imports found"

if __name__ == "__main__":
    fix_imports()