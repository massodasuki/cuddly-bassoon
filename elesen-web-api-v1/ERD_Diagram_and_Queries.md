# Fisheries Licensing System - ERD Diagram and Database Queries

## Overview

This document provides an Entity Relationship Diagram (ERD) and common SQL queries for the Fisheries Licensing System database. The system manages vessel applications, inspections, payments, licensing, and various other fisheries-related processes.

## ERD Diagram

```mermaid
erDiagram
    %% User Management
    profile_users {
        char(36) id PK
        varchar(255) name
        varchar(255) ic_no
        varchar(255) email
        varchar(255) phone_no
        datetime created_at
        datetime updated_at
    }
    
    roles {
        char(36) id PK
        varchar(255) name
        varchar(255) display_name
        text description
        datetime created_at
        datetime updated_at
    }
    
    user_role {
        char(36) user_id PK,FK
        char(36) role_id PK,FK
    }
    
    modules {
        char(36) id PK
        char(36) parent_id FK
        varchar(255) name
        varchar(255) slug
        varchar(255) url
        int order
        tinyint(1) is_active
        datetime created_at
    }
    
    role_module {
        char(36) role_id PK,FK
        char(36) module_id PK,FK
    }

    %% Vessel Applications
    ppv04a_vessel_application {
        char(36) id PK
        char(36) user_id FK
        char(36) vessel_id FK
        char(36) application_type_id FK
        char(36) application_status_id FK
        varchar(255) ref_no
        varchar(255) approval_no
        varchar(255) general_arrangement_path
        varchar(255) shipyard
        varchar(255) pin_no
        varchar(255) ssd_no
        tinyint(1) is_approved
        datetime created_at
        datetime updated_at
    }
    
    kpv03_vessel_license_applications {
        char(36) id PK
        enum application_type
        char(36) vessel_id FK
        enum type
        varchar(255) ref_no
        varchar(255) name
        varchar(255) address_1
        varchar(255) address_2
        varchar(255) poskod
        char(36) district_id FK
        char(36) state_id FK
        varchar(255) phone_no
        varchar(255) email
        char(36) status_id FK
        datetime created_at
        datetime updated_at
    }
    
    ppv04bs {
        char(36) id PK
        char(36) user_id FK
        char(36) vessel_id FK
        char(36) application_type_cm_id FK
        char(36) application_status_cm_id FK
        enum status
        varchar(20) reference_no
        tinyint(1) is_active
        datetime created_at
        datetime updated_at
    }

    %% Inspections
    inspections {
        char(36) id PK
        char(36) user_id FK
        char(36) vessel_id FK
        char(36) application_id FK
        char(36) type_code_id FK
        date inspection_date
        varchar(255) inspector
        enum inspection_status
        datetime created_at
        datetime updated_at
    }
    
    lpi_inspections {
        char(36) id PK
        char(36) inspection_id FK
        text remarks
        enum fishery_type
        date inspection_date
        varchar(255) location
        varchar(255) attandane_form
        varchar(255) vessel_picture
        datetime created_at
        datetime updated_at
    }
    
    ppv04a_vessel_lpi {
        bigint id PK
        char(36) application_id FK
        tinyint(1) width_marker_nail
        tinyint(1) pilot_house_paint_true
        tinyint(1) iron_hammer_marker
        tinyint(1) registration_number_is_punch
        tinyint(1) has_qr_code
        tinyint(1) has_white_stripes
        int net_drum_quantity
        float length_udv
        float width_udv
        float depth_udv
        float grt_total
        varchar(255) engine_brand
        varchar(255) engine_model
        varchar(255) engine_no
        tinyint(1) has_turbo
        varchar(255) pev_no
        varchar(255) engine_picture_path
        date inspection_date
        varchar(255) inspection_location
        datetime created_at
        datetime updated_at
    }
    
    ppv04b_inspection_lpi {
        char(36) id PK
        char(36) ppv04b_id FK
        tinyint(1) width_marker_nail
        tinyint(1) pilot_house_paint_true
        tinyint(1) iron_hammer_marker
        tinyint(1) registration_number_is_punch
        tinyint(1) has_qr_code
        decimal(10,2) length_udv
        decimal(10,2) width_udv
        decimal(10,2) depth_udv
        decimal(10,2) grt_total
        varchar(255) engine_brand
        varchar(255) engine_model
        varchar(255) engine_no
        tinyint(1) has_pev
        varchar(255) pev_no
        varchar(255) engine_picture_path
        date inspection_date
        varchar(255) inspection_location
        datetime created_at
        datetime updated_at
    }

    %% Payments and Receipts
    application_receipts {
        char(36) id PK
        char(36) application_id FK
        varchar(100) receipt_no
        date receipt_date
        varchar(255) attachment_path
        decimal(12,2) total_amount
        datetime created_at
        datetime updated_at
    }
    
    application_receipt_items {
        char(36) id PK
        char(36) application_receipt_id FK
        varchar(255) description
        decimal(12,2) amount
        datetime created_at
        datetime updated_at
    }
    
    ppv04a_vessel_payment {
        char(36) id PK
        char(36) application_id FK
        varchar(255) resit_no
        varchar(255) resit_pic_path
        varchar(255) created_by
        datetime created_at
        datetime updated_at
    }
    
    ppv04b_payment {
        char(36) id PK
        char(36) ppv04b_id FK
        varchar(100) receipt_number
        date receipt_date
        varchar(255) receipt_file_path
        decimal(12,2) receipt_total_amount
        text receipt_items
        datetime created_at
        datetime updated_at
    }
    
    ppv04b_print_license_grant {
        char(36) id PK
        char(36) ppv04b_id FK
        varchar(100) receipt_number
        date receipt_date
        varchar(255) receipt_file_path
        decimal(12,2) receipt_total_amount
        text receipt_items
        varchar(100) license_number
        varchar(100) license_serial_number
        enum license_status
        varchar(100) grant_number
        varchar(100) grant_serial_number
        enum grant_status
        datetime created_at
        datetime updated_at
    }

    %% Licenses
    application_licenses {
        char(36) application_id PK,FK
        char(36) vessel_id FK
        enum record_type
        varchar(100) ssd_no
        varchar(50) license_no
        enum status
        date issued_at
        date expires_at
        datetime created_at
        datetime updated_at
    }
    
    nelayan_darat_licenses {
        char(36) id PK
        char(36) application_id FK
        char(36) user_id FK
        varchar(50) license_number
        timestamp issued_at
        date license_expiry_date
        enum status
        varchar(50) ssd_number
        tinyint(1) is_active
        datetime created_at
        datetime updated_at
    }

    %% Documents
    application_documents {
        char(36) id PK
        char(36) application_id FK
        varchar(255) name
        varchar(255) path
        datetime created_at
        datetime updated_at
    }
    
    ppv04a_vessel_extra_file {
        char(36) application_id PK,FK
        varchar(255) file_path
        varchar(255) file_name
        datetime created_at
        datetime updated_at
    }

    %% Other Modules
    cultured_shells {
        char(36) id PK
        varchar(255) vessel_no
        varchar(255) shell_type
        varchar(255) item_type
        varchar(255) kawasan_pendaratan
        varchar(255) skl_license_no
        date skl_license_date
        date skl_expiry_date
        varchar(255) license_tol
        varchar(255) license_file
        varchar(255) receipt_no
        char(36) status_id FK
        datetime created_at
        datetime updated_at
    }
    
    sample_areas {
        char(36) id PK
        longtext location
        varchar(255) land_area
        char(36) state_id FK
        char(36) district_id FK
        char(36) hub_id FK
        date start_date
        date end_date
        varchar(255) reference
        char(36) status_id FK
        varchar(255) supporting_doc
        datetime created_at
        datetime updated_at
    }
    
    permohonans {
        char(36) id PK
        char(36) user_id FK
        varchar(255) name
        varchar(255) saiz
        varchar(255) kuantiti
        varchar(255) daerah
        varchar(255) negeri
        date tarikh
        enum keputusan
        datetime created_at
        datetime updated_at
    }
    
    %% Additional Entities Referenced in Relationships
    application_types {
        char(36) id PK
        varchar(255) name
        varchar(255) code
        text description
        tinyint(1) is_active
        datetime created_at
        datetime updated_at
    }
    
    application_statuses {
        char(36) id PK
        varchar(255) name
        varchar(255) code
        varchar(255) color
        text description
        int sort_order
        tinyint(1) is_active
        datetime created_at
        datetime updated_at
    }
    
    vessels {
        char(36) id PK
        varchar(255) vessel_registration_no
        varchar(255) vessel_name
        varchar(255) vessel_type
        char(36) owner_id FK
        float length_overall
        float gross_tonnage
        float engine_power
        varchar(255) fishing_gear
        date registration_date
        varchar(255) registration_document
        enum status
        datetime created_at
        datetime updated_at
    }
    
    cultured_shell_details {
        char(36) id PK
        char(36) cultured_shells_id FK
        varchar(255) description
        decimal(12,2) payment_amount
        varchar(255) payment_method
        varchar(255) reference_number
        datetime created_at
        datetime updated_at
    }
    
    cultured_shell_histories {
        char(36) id PK
        char(36) cultured_shells_id FK
        enum action_type
        text previous_data
        text new_data
        char(36) changed_by FK
        datetime created_at
        datetime updated_at
    }
    
    sample_area_applications {
        char(36) id PK
        char(36) sample_area_id FK
        char(36) user_id FK
        varchar(255) applicant_name
        varchar(255) ic_number
        varchar(255) contact_number
        varchar(255) email
        enum status_id
        text application_purpose
        date application_date
        date approval_date
        char(36) approved_by FK
        text approval_remarks
        datetime created_at
        datetime updated_at
    }
    
    sample_area_application_details {
        char(36) id PK
        char(36) sample_area_application_id FK
        varchar(255) item_name
        varchar(255) specification
        decimal(12,2) quantity
        varchar(255) unit
        decimal(12,2) payment_amount
        datetime created_at
        datetime updated_at
    }
    
    sample_area_application_histories {
        char(36) id PK
        char(36) sample_area_application_id FK
        enum action_type
        text previous_status
        text new_status
        text remarks
        char(36) changed_by FK
        datetime created_at
        datetime updated_at
    }
    
    sample_area_histories {
        char(36) id PK
        char(36) sample_area_id FK
        enum action_type
        text previous_data
        text new_data
        char(36) changed_by FK
        datetime created_at
        datetime updated_at
    }

    %% =====================================================
    %% UML RELATIONSHIPS WITH CARDINALITY
    %% Notation: ||--|| (1:1), ||--o{ (1:N), }o--o{ (M:N)
    %% =====================================================
    
    %% User Management Relationships
    profile_users ||--o{ user_role : "1..* has"
    roles ||--o{ user_role : "1..* assigned_to"
    profile_users }o--o{ roles : "M:N via user_role"
    
    roles ||--o{ role_module : "1..* grants"
    modules ||--o{ role_module : "1..* accessed_by"
    roles }o--o{ modules : "M:N via role_module"
    
    modules ||--o| modules : "0..1 parent_of"
    
    %% Vessel Application Relationships
    profile_users ||--o{ ppv04a_vessel_application : "1..* submits"
    profile_users ||--o{ kpv03_vessel_license_applications : "1..* applies_for"
    profile_users ||--o{ ppv04bs : "1..* creates"
    profile_users ||--o{ permohonans : "1..* requests"
    profile_users ||--o{ nelayan_darat_licenses : "1..* holds"
    
    %% PPV04A Application Relationships
    ppv04a_vessel_application ||--o| ppv04a_vessel_lpi : "0..1 has_inspection"
    ppv04a_vessel_application ||--o| ppv04a_vessel_payment : "0..1 has_payment"
    ppv04a_vessel_application ||--o{ application_receipts : "1..* receives"
    ppv04a_vessel_application ||--o{ application_documents : "1..* contains"
    ppv04a_vessel_application ||--o| ppv04a_vessel_extra_file : "0..1 has_files"
    ppv04a_vessel_application ||--o| application_licenses : "0..1 results_in"
    
    %% PPV04B Application Relationships
    ppv04bs ||--o| ppv04b_inspection_lpi : "0..1 undergoes"
    ppv04bs ||--o| ppv04b_payment : "0..1 makes"
    ppv04bs ||--o| ppv04b_print_license_grant : "0..1 gets_printed"
    
    %% Inspection Relationships
    inspections ||--o{ lpi_inspections : "1..* includes"
    profile_users ||--o{ inspections : "1..* conducts"
    
    %% Receipt Relationships
    application_receipts ||--o{ application_receipt_items : "1..* contains"
    
    %% License Relationships
    application_licenses }o--|| ppv04a_vessel_application : "N:1 issued_for"
    nelayan_darat_licenses }o--|| profile_users : "N:1 belongs_to"
    
    %% Cultured Shells Relationships
    cultured_shells ||--o{ cultured_shell_details : "1..* has_details"
    cultured_shells ||--o{ cultured_shell_histories : "1..* tracks"
    
    %% Sample Area Relationships
    sample_areas ||--o{ sample_area_applications : "1..* receives"
    sample_areas ||--o{ sample_area_items : "1..* contains"
    sample_areas ||--o{ sample_area_locations : "1..* has"
    sample_areas ||--o{ sample_area_notices : "1..* posts"
    sample_areas ||--o{ sample_area_reports : "1..* generates"
    sample_areas ||--o{ sample_area_histories : "1..* logs"
    sample_area_applications ||--o{ sample_area_application_details : "1..* includes"
    sample_area_applications ||--o{ sample_area_application_histories : "1..* tracks"
    
    %% Additional Entity Relationships
    ppv04a_vessel_application }o--|| application_types : "N:1 type"
    ppv04a_vessel_application }o--|| application_statuses : "N:1 status"
    ppv04a_vessel_application }o--|| vessels : "N:1 vessel"
    kpv03_vessel_license_applications }o--|| vessels : "N:1 vessel"
    ppv04bs }o--|| vessels : "N:1 vessel"
    inspections }o--|| vessels : "N:1 vessel"
    inspections }o--|| ppv04a_vessel_application : "N:1 application"
    
    %% Cultured Shell Detail Relationships
    cultured_shells }o--|| profile_users : "N:1 created_by"
    cultured_shell_details }o--|| cultured_shells : "N:1 belongs_to"
    cultured_shell_histories }o--|| cultured_shells : "N:1 tracks"
    cultured_shell_histories }o--|| profile_users : "N:1 changed_by"
    
    %% Sample Area Detail Relationships
    sample_area_applications }o--|| sample_areas : "N:1 area"
    sample_area_applications }o--|| profile_users : "N:1 applicant"
    sample_area_application_details }o--|| sample_area_applications : "N:1 application"
    sample_area_application_histories }o--|| sample_area_applications : "N:1 application"
    sample_area_application_histories }o--|| profile_users : "N:1 changed_by"
    sample_area_histories }o--|| sample_areas : "N:1 area"
    sample_area_histories }o--|| profile_users : "N:1 changed_by"
```

## Common SQL Queries

### 1. User Management Queries

#### Get all users with their roles
```sql
SELECT 
    pu.id,
    pu.name,
    pu.email,
    pu.phone_no,
    r.name as role_name,
    r.display_name as role_display
FROM profile_users pu
LEFT JOIN user_role ur ON pu.id = ur.user_id
LEFT JOIN roles r ON ur.role_id = r.id
WHERE pu.deleted_at IS NULL
ORDER BY pu.name;
```

#### Get users with module permissions
```sql
SELECT 
    pu.name as user_name,
    pu.email,
    r.name as role_name,
    m.name as module_name,
    m.url as module_url
FROM profile_users pu
JOIN user_role ur ON pu.id = ur.user_id
JOIN roles r ON ur.role_id = r.id
JOIN role_module rm ON r.id = rm.role_id
JOIN modules m ON rm.module_id = m.id
WHERE pu.deleted_at IS NULL 
    AND r.deleted_at IS NULL
    AND m.deleted_at IS NULL
    AND m.is_active = 1
ORDER BY pu.name, m.order;
```

### 2. Vessel Application Queries

#### Get all vessel applications with user details
```sql
SELECT 
    pva.id,
    pva.ref_no,
    pva.approval_no,
    pu.name as applicant_name,
    pu.ic_no,
    pu.phone_no,
    ats.name as application_type,
    ass.name as application_status,
    pva.created_at,
    CASE 
        WHEN pva.is_approved = 1 THEN 'Approved'
        WHEN pva.is_approved = 0 THEN 'Pending'
        ELSE 'Rejected'
    END as approval_status
FROM ppv04a_vessel_application pva
JOIN profile_users pu ON pva.user_id = pu.id
JOIN application_types ats ON pva.application_type_id = ats.id
JOIN application_statuses ass ON pva.application_status_id = ass.id
WHERE pva.deleted_at IS NULL
ORDER BY pva.created_at DESC;
```

#### Get vessel applications pending inspection
```sql
SELECT 
    pva.id,
    pva.ref_no,
    pu.name as applicant_name,
    pva.shipyard,
    pva.ssd_no,
    pva.created_at,
    DATEDIFF(NOW(), pva.created_at) as days_pending
FROM ppv04a_vessel_application pva
JOIN profile_users pu ON pva.user_id = pu.id
WHERE pva.is_approved IS NULL
    AND pva.deleted_at IS NULL
ORDER BY pva.created_at ASC;
```

#### Get application statistics by status
```sql
SELECT 
    ass.name as status,
    COUNT(*) as total_applications,
    COUNT(CASE WHEN pva.is_approved = 1 THEN 1 END) as approved,
    COUNT(CASE WHEN pva.is_approved = 0 THEN 1 END) as rejected,
    COUNT(CASE WHEN pva.is_approved IS NULL THEN 1 END) as pending
FROM application_statuses ass
LEFT JOIN ppv04a_vessel_application pva ON ass.id = pva.application_status_id
WHERE ass.deleted_at IS NULL
GROUP BY ass.id, ass.name
ORDER BY total_applications DESC;
```

### 3. Inspection Queries

#### Get inspection schedules for today
```sql
SELECT 
    i.id,
    i.inspection_date,
    i.inspection_time,
    pu.name as inspector_name,
    pv.vessel_registration_no,
    pva.ref_no as application_ref,
    i.location,
    i.inspection_status
FROM inspections i
JOIN profile_users pu ON i.user_id = pu.id
JOIN vessels pv ON i.vessel_id = pv.id
LEFT JOIN ppv04a_vessel_application pva ON i.application_id = pva.id
WHERE DATE(i.inspection_date) = CURDATE()
    AND i.deleted_at IS NULL
ORDER BY i.inspection_time;
```

#### Get LPI inspection details for a vessel
```sql
SELECT 
    pvli.id,
    pvli.application_id,
    pvli.inspection_date,
    pvli.inspection_location,
    pvli.length_udv,
    pvli.width_udv,
    pvli.depth_udv,
    pvli.grt_total,
    pvli.engine_brand,
    pvli.engine_model,
    pvli.engine_no,
    pvli.has_turbo,
    pvli.pev_no,
    pvli.engine_picture_path,
    CASE 
        WHEN pvli.width_marker_nail = 1 THEN 'Pass'
        WHEN pvli.width_marker_nail = 0 THEN 'Fail'
        ELSE 'Not Checked'
    END as marker_nail_status,
    CASE 
        WHEN pvli.pilot_house_paint_true = 1 THEN 'Pass'
        WHEN pvli.pilot_house_paint_true = 0 THEN 'Fail'
        ELSE 'Not Checked'
    END as pilot_house_status
FROM ppv04a_vessel_lpi pvli
WHERE pvli.application_id = ?
    AND pvli.deleted_at IS NULL
ORDER BY pvli.created_at DESC;
```

#### Get inspection compliance reports
```sql
SELECT 
    DATE(i.inspection_date) as inspection_date,
    COUNT(*) as total_inspections,
    COUNT(CASE WHEN i.inspection_status = 'completed' THEN 1 END) as completed,
    COUNT(CASE WHEN i.inspection_status = 'rejected' THEN 1 END) as rejected,
    COUNT(CASE WHEN i.inspection_status = 'ongoing' THEN 1 END) as ongoing,
    ROUND(
        (COUNT(CASE WHEN i.inspection_status = 'completed' THEN 1 END) * 100.0 / COUNT(*)), 2
    ) as completion_rate
FROM inspections i
WHERE i.inspection_date >= DATE_SUB(NOW(), INTERVAL 30 DAY)
    AND i.deleted_at IS NULL
GROUP BY DATE(i.inspection_date)
ORDER BY inspection_date DESC;
```

### 4. Payment and Receipt Queries

#### Get payment summaries by application
```sql
SELECT 
    pva.id as application_id,
    pva.ref_no,
    pu.name as applicant_name,
    COALESCE(pvp.total_amount, 0) as payment_total,
    ar.receipt_no,
    ar.receipt_date,
    ar.total_amount as receipt_amount,
    CASE 
        WHEN ar.id IS NOT NULL THEN 'Paid'
        WHEN pvp.id IS NOT NULL THEN 'Payment Recorded'
        ELSE 'No Payment'
    END as payment_status
FROM ppv04a_vessel_application pva
JOIN profile_users pu ON pva.user_id = pu.id
LEFT JOIN (
    SELECT 
        application_id,
        SUM(CAST(amount AS DECIMAL(12,2))) as total_amount
    FROM ppv04a_vessel_payment_info 
    WHERE deleted_at IS NULL
    GROUP BY application_id
) pvp ON pva.id = pvp.application_id
LEFT JOIN application_receipts ar ON pva.id = ar.application_id
WHERE pva.deleted_at IS NULL
ORDER BY pva.created_at DESC;
```

#### Get PPV04B payment details
```sql
SELECT 
    pvb.id,
    pvb.reference_no,
    pu.name as applicant_name,
    pbp.receipt_number,
    pbp.receipt_date,
    pbp.receipt_total_amount,
    JSON_UNQUOTE(JSON_EXTRACT(pbp.receipt_items, '$[0].description')) as item_description,
    JSON_UNQUOTE(JSON_EXTRACT(pbp.receipt_items, '$[0].amount')) as item_amount,
    CASE 
        WHEN pbp.license_number IS NOT NULL THEN 'License Printed'
        WHEN pbp.grant_number IS NOT NULL THEN 'Grant Printed'
        ELSE 'Pending Printing'
    END as printing_status
FROM ppv04bs pvb
JOIN profile_users pu ON pvb.user_id = pu.id
LEFT JOIN ppv04b_payment pbp ON pvb.id = pbp.ppv04b_id
LEFT JOIN ppv04b_print_license_grant pblg ON pvb.id = pblg.ppv04b_id
WHERE pvb.deleted_at IS NULL
ORDER BY pvb.created_at DESC;
```

#### Revenue analysis by month
```sql
SELECT 
    DATE_FORMAT(ar.receipt_date, '%Y-%m') as month,
    COUNT(DISTINCT ar.application_id) as total_applications,
    SUM(ar.total_amount) as total_revenue,
    AVG(ar.total_amount) as average_amount,
    COUNT(DISTINCT pva.id) as vessel_applications
FROM application_receipts ar
LEFT JOIN ppv04a_vessel_application pva ON ar.application_id = pva.id
WHERE ar.receipt_date >= DATE_SUB(NOW(), INTERVAL 12 MONTH)
    AND ar.deleted_at IS NULL
GROUP BY DATE_FORMAT(ar.receipt_date, '%Y-%m')
ORDER BY month DESC;
```

### 5. License Management Queries

#### Get active licenses expiring soon
```sql
SELECT 
    al.application_id,
    al.license_no,
    al.ssd_no,
    al.record_type,
    al.issued_at,
    al.expires_at,
    pu.name as licensee_name,
    DATEDIFF(al.expires_at, NOW()) as days_until_expiry,
    CASE 
        WHEN DATEDIFF(al.expires_at, NOW()) < 0 THEN 'Expired'
        WHEN DATEDIFF(al.expires_at, NOW()) <= 30 THEN 'Expiring Soon'
        ELSE 'Active'
    END as expiry_status
FROM application_licenses al
LEFT JOIN profile_users pu ON al.application_id = pu.id
WHERE al.status = 'active'
    AND al.expires_at <= DATE_ADD(NOW(), INTERVAL 90 DAY)
    AND al.deleted_at IS NULL
ORDER BY al.expires_at ASC;
```

#### License statistics by type
```sql
SELECT 
    al.record_type,
    COUNT(*) as total_licenses,
    COUNT(CASE WHEN al.status = 'active' THEN 1 END) as active,
    COUNT(CASE WHEN al.status = 'expired' THEN 1 END) as expired,
    COUNT(CASE WHEN al.status = 'revoked' THEN 1 END) as revoked,
    MIN(al.issued_at) as earliest_issue,
    MAX(al.issued_at) as latest_issue
FROM application_licenses al
WHERE al.deleted_at IS NULL
GROUP BY al.record_type
ORDER BY total_licenses DESC;
```

### 6. Vessel Registration Queries

#### Get vessel fleet overview
```sql
SELECT 
    pv.vessel_registration_no,
    pv.vessel_name,
    pv.vessel_type,
    pv.registration_date,
    pu.name as owner_name,
    pv.length_overall,
    pv.gross_tonnage,
    pv.engine_power,
    pv.fishing_gear,
    CASE 
        WHEN al.id IS NOT NULL THEN 'Licensed'
        ELSE 'Unlicensed'
    END as license_status
FROM vessels pv
LEFT JOIN profile_users pu ON pv.owner_id = pu.id
LEFT JOIN application_licenses al ON pv.id = al.vessel_id AND al.status = 'active'
WHERE pv.deleted_at IS NULL
ORDER BY pv.registration_date DESC;
```

#### Vessels requiring inspection renewal
```sql
SELECT 
    pv.vessel_registration_no,
    pv.vessel_name,
    pu.name as owner_name,
    al.expires_at,
    DATEDIFF(al.expires_at, NOW()) as days_until_expiry,
    i.inspection_date as last_inspection_date
FROM vessels pv
JOIN profile_users pu ON pv.owner_id = pu.id
JOIN application_licenses al ON pv.id = al.vessel_id
LEFT JOIN inspections i ON pv.id = i.vessel_id
WHERE al.status = 'active'
    AND al.expires_at <= DATE_ADD(NOW(), INTERVAL 60 DAY)
    AND (i.inspection_date IS NULL OR i.inspection_date < DATE_SUB(NOW(), INTERVAL 1 YEAR))
    AND pv.deleted_at IS NULL
ORDER BY al.expires_at ASC;
```

### 7. Cultured Shell Queries

#### Shell farming applications summary
```sql
SELECT 
    cs.id,
    cs.vessel_no,
    cs.shell_type,
    cs.item_type,
    cs.kawasan_pendaratan,
    cs.skl_license_no,
    cs.skl_license_date,
    cs.skl_expiry_date,
    pu.name as applicant_name,
    cs.status_id,
    cs.created_at,
    CASE 
        WHEN cs.skl_expiry_date < NOW() THEN 'License Expired'
        WHEN cs.skl_expiry_date <= DATE_ADD(NOW(), INTERVAL 30 DAY) THEN 'Expiring Soon'
        ELSE 'Valid'
    END as license_status
FROM cultured_shells cs
JOIN profile_users pu ON cs.created_by = pu.id
WHERE cs.deleted_at IS NULL
ORDER BY cs.created_at DESC;
```

#### Shell payment details
```sql
SELECT 
    cs.id,
    cs.vessel_no,
    cs.shell_type,
    cs.skl_license_no,
    SUM(csd.payment_amount) as total_payment,
    COUNT(csd.id) as payment_items,
    cs.receipt_no,
    cs.created_at
FROM cultured_shells cs
LEFT JOIN cultured_shell_details csd ON cs.id = csd.cultured_shells_id
WHERE cs.deleted_at IS NULL
GROUP BY cs.id, cs.vessel_no, cs.shell_type, cs.skl_license_no, cs.receipt_no, cs.created_at
ORDER BY cs.created_at DESC;
```

### 8. Sample Area Queries

#### Sample area utilization report
```sql
SELECT 
    sa.id,
    sa.location,
    sa.land_area,
    sa.start_date,
    sa.end_date,
    sa.reference,
    COUNT(saa.id) as total_applications,
    COUNT(CASE WHEN saa.status_id = 'approved' THEN 1 END) as approved_applications,
    SUM(CASE WHEN saa.status_id = 'approved' THEN sad.payment_amount ELSE 0 END) as total_revenue
FROM sample_areas sa
LEFT JOIN sample_area_applications saa ON sa.id = saa.sample_area_id
LEFT JOIN sample_area_application_details sad ON saa.id = sad.sample_area_application_id
WHERE sa.deleted_at IS NULL
    AND (sa.end_date IS NULL OR sa.end_date >= NOW())
GROUP BY sa.id, sa.location, sa.land_area, sa.start_date, sa.end_date, sa.reference
ORDER BY sa.created_at DESC;
```

#### Sample area items and locations
```sql
SELECT 
    sa.location as area_location,
    sai.name as item_name,
    sal.name as location_name,
    COUNT(saa.id) as applications_count
FROM sample_areas sa
LEFT JOIN sample_area_items sai ON sa.id = sai.sample_area_id
LEFT JOIN sample_area_locations sal ON sa.id = sal.sample_area_id
LEFT JOIN sample_area_applications saa ON sa.id = saa.sample_area_id
WHERE sa.deleted_at IS NULL
GROUP BY sa.id, sa.location, sai.id, sai.name, sal.id, sal.name
ORDER BY sa.location, sai.name, sal.name;
```

### 9. Reporting and Analytics Queries

#### Monthly application trends
```sql
SELECT 
    DATE_FORMAT(pva.created_at, '%Y-%m') as month,
    COUNT(*) as total_applications,
    COUNT(CASE WHEN pva.is_approved = 1 THEN 1 END) as approved,
    COUNT(CASE WHEN pva.is_approved = 0 THEN 1 END) as rejected,
    ROUND(
        (COUNT(CASE WHEN pva.is_approved = 1 THEN 1 END) * 100.0 / COUNT(*)), 2
    ) as approval_rate,
    AVG(DATEDIFF(pva.updated_at, pva.created_at)) as avg_processing_days
FROM ppv04a_vessel_application pva
WHERE pva.created_at >= DATE_SUB(NOW(), INTERVAL 12 MONTH)
    AND pva.deleted_at IS NULL
GROUP BY DATE_FORMAT(pva.created_at, '%Y-%m')
ORDER BY month DESC;
```

#### Inspector performance metrics
```sql
SELECT 
    pu.name as inspector_name,
    COUNT(i.id) as total_inspections,
    COUNT(CASE WHEN i.inspection_status = 'completed' THEN 1 END) as completed,
    COUNT(CASE WHEN i.inspection_status = 'rejected' THEN 1 END) as rejected,
    ROUND(
        (COUNT(CASE WHEN i.inspection_status = 'completed' THEN 1 END) * 100.0 / COUNT(i.id)), 2
    ) as completion_rate,
    AVG(DATEDIFF(i.updated_at, i.inspection_date)) as avg_processing_days
FROM inspections i
JOIN profile_users pu ON i.user_id = pu.id
WHERE i.inspection_date >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
    AND i.deleted_at IS NULL
GROUP BY pu.id, pu.name
ORDER BY total_inspections DESC;
```

#### Revenue by application type
```sql
SELECT 
    at.name as application_type,
    COUNT(DISTINCT ar.application_id) as total_applications,
    SUM(ar.total_amount) as total_revenue,
    AVG(ar.total_amount) as avg_revenue,
    MIN(ar.total_amount) as min_revenue,
    MAX(ar.total_amount) as max_revenue
FROM application_receipts ar
JOIN ppv04a_vessel_application pva ON ar.application_id = pva.id
JOIN application_types at ON pva.application_type_id = at.id
WHERE ar.receipt_date >= DATE_SUB(NOW(), INTERVAL 12 MONTH)
    AND ar.deleted_at IS NULL
GROUP BY at.id, at.name
ORDER BY total_revenue DESC;
```

### 10. System Administration Queries

#### User activity logs
```sql
SELECT 
    pu.name as user_name,
    pu.email,
    COUNT(DISTINCT pva.id) as applications_created,
    COUNT(DISTINCT i.id) as inspections_conducted,
    MAX(pva.created_at) as last_application_date,
    MAX(i.inspection_date) as last_inspection_date
FROM profile_users pu
LEFT JOIN ppv04a_vessel_application pva ON pu.id = pva.created_by
LEFT JOIN inspections i ON pu.id = i.user_id
WHERE pu.deleted_at IS NULL
    AND (pva.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) 
         OR i.inspection_date >= DATE_SUB(NOW(), INTERVAL 30 DAY)
         OR pva.created_at IS NULL)
GROUP BY pu.id, pu.name, pu.email
ORDER BY applications_created DESC, inspections_conducted DESC;
```

#### Database usage statistics
```sql
SELECT 
    table_name,
    table_rows,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) as size_mb,
    ROUND((data_length / 1024 / 1024), 2) as data_mb,
    ROUND((index_length / 1024 / 1024), 2) as index_mb
FROM information_schema.TABLES
WHERE table_schema = DATABASE()
    AND table_name IN (
        'ppv04a_vessel_application',
        'inspections',
        'application_receipts',
        'application_licenses',
        'cultured_shells',
        'sample_areas'
    )
ORDER BY size_mb DESC;
```

#### System health check
```sql
-- Check for orphaned records
SELECT 'Orphaned LPI records' as check_type, COUNT(*) as count
FROM ppv04a_vessel_lpi pvli
LEFT JOIN ppv04a_vessel_application pva ON pvli.application_id = pva.id
WHERE pva.id IS NULL AND pvli.deleted_at IS NULL

UNION ALL

SELECT 'Orphaned payment records' as check_type, COUNT(*) as count
FROM ppv04a_vessel_payment pvp
LEFT JOIN ppv04a_vessel_application pva ON pvp.application_id = pva.id
WHERE pva.id IS NULL AND pvp.deleted_at IS NULL

UNION ALL

SELECT 'Expired licenses' as check_type, COUNT(*) as count
FROM application_licenses al
WHERE al.status = 'active' 
    AND al.expires_at < NOW() 
    AND al.deleted_at IS NULL

UNION ALL

SELECT 'Applications without payments' as check_type, COUNT(*) as count
FROM ppv04a_vessel_application pva
LEFT JOIN application_receipts ar ON pva.id = ar.application_id
WHERE pva.is_approved = 1 
    AND ar.id IS NULL 
    AND pva.deleted_at IS NULL;
```

## Usage Notes

### Performance Considerations
- Add appropriate indexes on frequently queried columns
- Use `EXPLAIN` to analyze query performance
- Consider partitioning large tables by date
- Use connection pooling for better performance

### Security Considerations
- Always use parameterized queries to prevent SQL injection
- Implement proper user authentication and authorization
- Log sensitive operations for audit trails
- Regularly backup and test restore procedures

### Maintenance Queries
- Schedule regular cleanup of soft-deleted records
- Monitor table sizes and growth patterns
- Update statistics periodically for query optimization
- Archive old records to improve performance

This comprehensive query set covers the main functionality of the Fisheries Licensing System and can be extended based on specific business requirements.