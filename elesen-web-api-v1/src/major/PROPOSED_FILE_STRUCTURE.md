# Proposed File Structure for src/major

## Current API Endpoints Analysis

Based on your provided API endpoints, here's the current usage:

### Authentication APIs
- `{{base_url}}/api/v1/applications/auth/refresh`
- `{{base_url}}/api/v1/applications/auth/login`
- `{{base_url}}/api/v1/applications/auth/logout`

### User Management APIs
- `{{base_url}}/api/v1/applications/profile-user-details`
- `{{baseUrl}}/api/v1/applications/users/nelayan-minimal`
- `{{base_url}}/api/v1/applications/profile-user-details/:user_id`

### Vessel Management APIs
- `{{baseUrl}}/api/v1/applications/vessels-minimal?page=2&limit=5`
- `{{base_url}}/api/v1/applications/vessel-details?page=1&limit=5`

### Inspection & Appointments APIs
- `{{baseUrl}}/api/v1/applications/appointments-inspections/{{id}}`

### Device Management APIs
- `{{base_url}}/api/v1/applications/device-registration`

### Notification APIs
- `{{baseUrl}}/api/v1/applications/fcm/send`

## Recommended File Structure

```
src/major/
├── authentication/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── auth.entity.ts (if needed)
│   ├── dto/
│   │   ├── login.dto.ts
│   │   ├── refresh-token.dto.ts
│   │   └── logout.dto.ts
│   └── guards/
│       ├── jwt-auth.guard.ts
│       ├── jwt-refresh.guard.ts
│       └── strategies/
│           ├── jwt.strategy.ts
│           └── jwt-refresh.strategy.ts
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│   ├── users.entity.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   ├── update-user.dto.ts
│   │   └── minimal-user.dto.ts
│   └── profile/
│       ├── profile.controller.ts
│       ├── profile.service.ts
│       ├── profile.dto.ts
│       └── profile.entity.ts
│
├── vessels/
│   ├── vessels.controller.ts
│   ├── vessels.service.ts
│   ├── vessels.module.ts
│   ├── vessels.entity.ts
│   ├── dto/
│   │   ├── create-vessel.dto.ts
│   │   ├── update-vessel.dto.ts
│   │   ├── vessel-details.dto.ts
│   │   └── vessel-minimal.dto.ts
│   └── details/
│       ├── vessel-details.controller.ts
│       ├── vessel-details.service.ts
│       ├── vessel-details.entity.ts
│       └── vessel-details.dto.ts
│
├── inspections/
│   ├── inspections.controller.ts
│   ├── inspections.service.ts
│   ├── inspections.module.ts
│   ├── inspections.entity.ts
│   ├── dto/
│   │   ├── create-inspection.dto.ts
│   │   ├── update-inspection.dto.ts
│   │   └── inspection-response.dto.ts
│   └── appointments/
│       ├── appointments.controller.ts
│       ├── appointments.service.ts
│       ├── appointments.entity.ts
│       └── appointments.dto.ts
│
├── devices/
│   ├── devices.controller.ts
│   ├── devices.service.ts
│   ├── devices.module.ts
│   ├── devices.entity.ts
│   └── dto/
│       ├── create-device.dto.ts
│       ├── update-device.dto.ts
│       └── device-registration.dto.ts
│
├── notifications/
│   ├── notifications.controller.ts
│   ├── notifications.service.ts
│   ├── notifications.module.ts
│   ├── dto/
│   │   ├── send-message.dto.ts
│   │   ├── send-to-all.dto.ts
│   │   └── notification.dto.ts
│   └── fcm/
│       ├── fcm.service.ts
│       └── fcm.controller.ts
│
└── common/
    ├── entities/
    ├── dto/
    ├── guards/
    ├── interceptors/
    └── utils/
```

## Migration Steps

### Step 1: Create New Directory Structure
Create the new directories for each module:
- `authentication/`
- `users/`
- `vessels/`
- `inspections/`
- `devices/`
- `notifications/`

### Step 2: Move Files
Move existing files to their appropriate new locations:

#### Authentication Module
```bash
# Move auth-related files
mv src/major/auth/ src/major/authentication/
# Move strategies and guards
mkdir -p src/major/authentication/guards/strategies
mv src/major/auth/jwt/ src/major/authentication/guards/strategies/
```

#### User Management Module
```bash
# Move user-related files
mv src/major/users/ src/major/users/
mv src/major/profile-user-details/ src/major/users/profile/
```

#### Vessel Management Module
```bash
# Move vessel-related files
mv src/major/vessels/ src/major/vessels/
mv src/major/vessel-details/ src/major/vessels/details/
```

#### Inspection Module
```bash
# Move inspection-related files
mv src/major/appointments-inspections/ src/major/inspections/appointments/
```

#### Device Management Module
```bash
# Move device-related files
mv src/major/device-registration/ src/major/devices/
```

#### Notification Module
```bash
# Move notification-related files
mv src/major/fcm/ src/major/notifications/fcm/
```

### Step 3: Update Imports
Update all import statements in moved files to reflect the new directory structure.

### Step 4: Update Module References
Update `app.module.ts` to import from the new module locations.

### Step 5: Update API Routes
Ensure all API routes in controllers match the new structure.

## Benefits of This Structure

1. **Logical Grouping**: Related functionality is grouped together
2. **Scalability**: Easy to add new features to existing modules
3. **Maintainability**: Clear separation of concerns
4. **API Alignment**: Structure matches your current API endpoints
5. **Team Collaboration**: Clear module boundaries for team development

## Unused Components to Archive

The following components exist in src/major but aren't used in your current APIs:
- `darat-vessel-*` modules
- `fishing-log-nds`
- `jetties`
- `kesalahan`
- `kru`
- `kulit`
- `parliament-seats`
- `parliaments`
- `pematuhan`
- `pemilikan`
- `pendaftaran-antarabangsa`
- `profile-pengusaha-skls`
- `profile-pentadbir-hartas`
- `profile-pentadbir-skls`
- `rivers`
- `roles`
- `subsistence-application`

These should be moved to an `archive/` or `legacy/` directory to keep the main codebase clean.