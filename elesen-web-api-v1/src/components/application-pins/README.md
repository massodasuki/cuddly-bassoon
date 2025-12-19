# Application Pins Module

This module provides CRUD operations for the `application_pins` table.

## Overview

The `application_pins` module is a Nest.js module that manages pin codes associated with applications. It provides a complete REST API with standard CRUD operations.

## Features

- **Create**: Add new application pins
- **Read**: Get all application pins or specific pins by ID
- **Update**: Modify existing application pins
- **Delete**: Remove application pins
- **Query**: Find pins by application ID

## API Endpoints

### Base URL: `/application-pins`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/application-pins` | Create a new application pin |
| GET | `/application-pins` | Get all application pins |
| GET | `/application-pins/:id` | Get a specific application pin by ID |
| GET | `/application-pins/application/:applicationId` | Get all pins for a specific application |
| PATCH | `/application-pins/:id` | Update an existing application pin |
| DELETE | `/application-pins/:id` | Delete an application pin |

## Entity Structure

The `ApplicationPinEntity` represents the following database table structure:

```typescript
{
  id: string;                    // UUID primary key
  application_id: string;        // Foreign key to applications table
  pin_code: string;              // The pin code value
  pin_type?: string;             // Type/category of pin
  description?: string;          // Optional description
  is_active?: number;            // Status flag (1 = active, 0 = inactive)
  is_deleted?: number;           // Soft delete flag
  created_by?: string;           // User who created the record
  updated_by?: string;           // User who last updated the record
  deleted_by?: string;           // User who deleted the record
  created_at?: Date;             // Creation timestamp
  updated_at?: Date;             // Last update timestamp
  deleted_at?: Date;             // Deletion timestamp
}
```

## Usage Examples

### Create a new application pin

```typescript
POST /application-pins
{
  "application_id": "550e8400-e29b-41d4-a716-446655440000",
  "pin_code": "123456",
  "pin_type": "verification",
  "description": "Email verification pin",
  "created_by": "user-123"
}
```

### Get all application pins

```typescript
GET /application-pins
```

### Get pins for a specific application

```typescript
GET /application-pins/application/550e8400-e29b-41d4-a716-446655440000
```

### Update an application pin

```typescript
PATCH /application-pins/123e4567-e89b-12d3-a456-426614174000
{
  "pin_type": "reset",
  "description": "Password reset pin",
  "updated_by": "user-456"
}
```

### Delete an application pin

```typescript
DELETE /application-pins/123e4567-e89b-12d3-a456-426614174000
```

## Database Setup

The module includes a SQL file `application_pins_table.sql` that contains the table definition:

```sql
CREATE TABLE `application_pins` (
  `id` char(36) NOT NULL,
  `application_id` char(36) NOT NULL,
  `pin_code` varchar(255) NOT NULL,
  `pin_type` varchar(100) DEFAULT NULL,
  `description` text,
  `is_active` int DEFAULT 1,
  `is_deleted` int DEFAULT 0,
  `created_by` char(36) DEFAULT NULL,
  `updated_by` char(36) DEFAULT NULL,
  `deleted_by` char(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_application_pins_application_id` (`application_id`),
  KEY `idx_application_pins_pin_code` (`pin_code`),
  CONSTRAINT `fk_application_pins_application_id` FOREIGN KEY (`application_id`) REFERENCES `applications` (`id`) ON DELETE CASCADE
);
```

## Dependencies

This module depends on:
- `@nestjs/common`
- `@nestjs/typeorm`
- `typeorm`
- `class-validator`

## Module Registration

The module is automatically registered in `app.module.ts` and available throughout the application.