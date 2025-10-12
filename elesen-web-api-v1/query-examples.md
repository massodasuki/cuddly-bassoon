# Database Query Examples - eLesen System

This document provides practical SQL query examples demonstrating JOIN operations for common use cases in the eLesen fisheries management system. All queries are based on the analyzed database schema and relationships.

## Profile User Management Queries

### Get Profile User Details with Vessel Associations
```sql
SELECT
    pu.id,
    pu.user_id,
    pu.name,
    pu.icno,
    pu.email,
    pu.address1,
    pu.address2,
    pu.address3,
    pu.poskod,
    pu.district,
    pu.state,
    pu.user_type,
    pu.no_phone,
    pu.no_phone_office,
    pu.age,
    pu.gender,
    pu.race,
    pu.wedding_status,
    pu.bumiputera_status,
    pu.is_active,
    pu.verified_at,
    pu.verify_status,
    -- Vessel associations
    COUNT(DISTINCT puv.vessel_id) as associated_vessels,
    GROUP_CONCAT(DISTINCT v.vessel_no SEPARATOR ', ') as vessel_numbers,
    -- SKL license info
    pps.no_lesen_skl,
    pps.tarikh_tamat_lesen,
    pps.keluasan,
    -- Application associations
    COUNT(DISTINCT avpu.application_id) as application_count
FROM profile_users pu
LEFT JOIN profile_user_vessel puv ON pu.id = puv.profile_user_id
LEFT JOIN vessels v ON puv.vessel_id = v.id AND v.is_active = 1
LEFT JOIN profile_pengusaha_skls pps ON pu.id = pps.profile_id
LEFT JOIN application_v2_profile_user avpu ON pu.id = avpu.profile_user_id
WHERE pu.is_active = 1
  AND pu.deleted_at IS NULL
GROUP BY pu.id, pu.user_id, pu.name, pu.icno, pu.email, pu.address1, pu.address2, pu.address3,
         pu.poskod, pu.district, pu.state, pu.user_type, pu.no_phone, pu.no_phone_office,
         pu.age, pu.gender, pu.race, pu.wedding_status, pu.bumiputera_status, pu.is_active,
         pu.verified_at, pu.verify_status, pps.no_lesen_skl, pps.tarikh_tamat_lesen, pps.keluasan
ORDER BY pu.created_at DESC;
```

### Get Profile Users with SKL License Details
```sql
SELECT
    pu.name,
    pu.icno,
    pu.email,
    pu.no_phone,
    pps.no_lesen_skl,
    pps.jenis_sistem_kultur_laut,
    pps.jenis_ternakan,
    pps.tarikh_tamat_lesen,
    pps.keluasan,
    pps.salinan_lesen_skl,
    DATEDIFF(pps.tarikh_tamat_lesen, CURDATE()) as days_until_expiry,
    CASE
        WHEN DATEDIFF(pps.tarikh_tamat_lesen, CURDATE()) <= 30 THEN 'Critical'
        WHEN DATEDIFF(pps.tarikh_tamat_lesen, CURDATE()) <= 90 THEN 'Warning'
        ELSE 'Valid'
    END as license_status,
    u.name as created_by_name,
    pps.created_at
FROM profile_users pu
JOIN profile_pengusaha_skls pps ON pu.id = pps.profile_id
LEFT JOIN users u ON pps.created_by = u.id
WHERE pu.is_active = 1
  AND pu.deleted_at IS NULL
  AND pps.tarikh_tamat_lesen IS NOT NULL
ORDER BY pps.tarikh_tamat_lesen ASC;
```

### Get Profile Users with Application Associations
```sql
SELECT
    pu.name as profile_user_name,
    pu.icno,
    pu.email,
    av2.id as application_id,
    av2.ref as application_ref,
    av2.name as application_name,
    av2.type as application_type,
    av2.status as application_status,
    av2.created_at as application_created,
    u.name as application_created_by,
    e.entity_name
FROM profile_users pu
JOIN application_v2_profile_user avpu ON pu.id = avpu.profile_user_id
JOIN applications_v2 av2 ON avpu.application_id = av2.id
LEFT JOIN users u ON av2.created_by = u.id
LEFT JOIN entities e ON av2.entity_id = e.id
WHERE pu.is_active = 1
  AND pu.deleted_at IS NULL
  AND av2.deleted_at IS NULL
ORDER BY av2.created_at DESC, pu.name;
```

### Get Profile Users with Vessel Management Details
```sql
SELECT
    pu.name as profile_user_name,
    pu.icno,
    pu.user_type,
    v.vessel_no,
    v.no_pendaftaran,
    v.kategori_vessel,
    v.grt,
    puv.role as association_role,
    puv.status as association_status,
    puv.created_at as association_date,
    -- Vessel owner info
    u.name as vessel_owner_name,
    u.contact_number as vessel_owner_contact,
    -- Entity info
    e.entity_name,
    -- License info
    l.no_lesen,
    l.tarikh_tamat as license_expiry
FROM profile_users pu
JOIN profile_user_vessel puv ON pu.id = puv.profile_user_id
JOIN vessels v ON puv.vessel_id = v.id
LEFT JOIN users u ON v.user_id = u.id
LEFT JOIN entities e ON v.entity_id = e.id
LEFT JOIN lesen l ON v.no_pendaftaran = l.no_pendaftaran
WHERE pu.is_active = 1
  AND pu.deleted_at IS NULL
  AND v.is_active = 1
  AND v.deleted_at IS NULL
ORDER BY pu.name, v.vessel_no;
```

### Get Profile User Activity Summary
```sql
SELECT
    pu.name,
    pu.icno,
    pu.user_type,
    pu.is_active,
    pu.verify_status,
    pu.verified_at,
    -- Vessel associations
    COUNT(DISTINCT puv.vessel_id) as vessel_count,
    -- Application associations
    COUNT(DISTINCT avpu.application_id) as application_count,
    -- SKL licenses
    COUNT(DISTINCT pps.id) as skl_license_count,
    -- Recent activity
    MAX(GREATEST(
        COALESCE(pu.updated_at, pu.created_at),
        COALESCE(puv.created_at, '1970-01-01'),
        COALESCE(avpu.created_at, '1970-01-01'),
        COALESCE(pps.created_at, '1970-01-01')
    )) as last_activity,
    -- Status summary
    CASE
        WHEN pu.verify_status = 1 THEN 'Verified'
        WHEN pu.verify_status = 0 THEN 'Pending Verification'
        ELSE 'Not Verified'
    END as verification_status
FROM profile_users pu
LEFT JOIN profile_user_vessel puv ON pu.id = puv.profile_user_id
LEFT JOIN application_v2_profile_user avpu ON pu.id = avpu.profile_user_id
LEFT JOIN profile_pengusaha_skls pps ON pu.id = pps.profile_id
WHERE pu.deleted_at IS NULL
GROUP BY pu.id, pu.name, pu.icno, pu.user_type, pu.is_active, pu.verify_status, pu.verified_at
ORDER BY last_activity DESC, pu.name;
```

## User Management Queries

### Get User Details with Roles and Entity
```sql
SELECT
    u.id,
    u.name,
    u.username,
    u.email,
    r.name as role_name,
    e.entity_name,
    u.is_active,
    u.created_at
FROM users u
LEFT JOIN user_role ur ON u.id = ur.user_id
LEFT JOIN roles r ON ur.role_id = r.id
LEFT JOIN entities e ON u.entity_id = e.id
WHERE u.deleted_at IS NULL
ORDER BY u.created_at DESC;
```

### Get User Permissions (Roles and Modules)
```sql
SELECT
    u.username,
    r.name as role_name,
    m.name as module_name,
    m.slug as module_slug,
    m.url as module_url
FROM users u
JOIN user_role ur ON u.id = ur.user_id
JOIN roles r ON ur.role_id = r.id
JOIN role_module rm ON r.id = rm.role_id
JOIN modules m ON rm.module_id = m.id
WHERE u.id = 'specific-user-id'
  AND u.is_active = 1
  AND r.is_active = 1
  AND m.is_active = 1
ORDER BY m.order ASC;
```

## Vessel Management Queries

### Get Complete Vessel Information
```sql
SELECT
    v.id,
    v.vessel_no,
    v.no_pendaftaran,
    v.grt,
    v.kategori_vessel,
    u.name as owner_name,
    u.username as owner_username,
    e.entity_name as managing_entity,
    kulit.panjang,
    kulit.lebar,
    kulit.dalam,
    kulit.jenis_kulit,
    enjin.jenama as engine_brand,
    enjin.kuasa_kuda as engine_power,
    enjin.model as engine_model,
    pemilikan.nama_pemilik,
    pemilikan.jenis_pemilikan,
    lesen.no_lesen,
    lesen.tarikh_keluar as license_start,
    lesen.tarikh_tamat as license_end
FROM vessels v
LEFT JOIN users u ON v.user_id = u.id
LEFT JOIN entities e ON v.entity_id = e.id
LEFT JOIN kulit ON v.id = kulit.no_pendaftaran
LEFT JOIN enjin ON v.no_pendaftaran = enjin.no_pendaftaran
LEFT JOIN pemilikan ON v.no_pendaftaran = pemilikan.no_pendaftaran
LEFT JOIN lesen ON v.no_pendaftaran = lesen.no_pendaftaran
WHERE v.is_active = 1
  AND v.deleted_at IS NULL;
```

### Get Vessel with Crew Information
```sql
SELECT
    v.vessel_no,
    v.no_pendaftaran,
    k.nama_kru,
    k.jawatan,
    k.no_kp_baru,
    k.status_kru,
    k.warganegara,
    nm.name as marine_name,
    nm.ic_number,
    nm.kru_position_id,
    fc.name as foreign_crew_name,
    fc.passport_number,
    fc.source_country_id
FROM vessels v
LEFT JOIN kru k ON v.no_pendaftaran = k.no_pendaftaran
LEFT JOIN nelayan_marins nm ON v.id = nm.vessel_id
LEFT JOIN foreign_crews fc ON v.id = fc.vessel_id
WHERE v.is_active = 1;
```

## Application Management Queries

### Get Application Details with Status and User
```sql
SELECT
    a.id,
    a.application_type_id,
    cm_type.name as application_type,
    a.full_name,
    a.ic_no,
    a.date_of_birth,
    cm_gender.name as gender,
    cm_race.name as race,
    cm_state.name as state,
    a.application_amount,
    a.created_at,
    u.name as created_by_name
FROM applications a
LEFT JOIN code_masters cm_type ON a.application_type_id = cm_type.id
LEFT JOIN code_masters cm_gender ON a.type_of_gender_id = cm_gender.id
LEFT JOIN code_masters cm_race ON a.type_of_race_id = cm_race.id
LEFT JOIN code_masters cm_state ON a.mail_state_id = cm_state.id
LEFT JOIN users u ON a.created_by = u.id
WHERE a.deleted_at IS NULL
ORDER BY a.created_at DESC;
```

### Get KRU Application with Crew Details
```sql
SELECT
    ka.id,
    ka.reference_number,
    ka.kru_application_type_id,
    u.name as applicant_name,
    u.username,
    v.vessel_no,
    cm_status.name as application_status,
    ka.submitted_at,
    ka.registration_start,
    ka.registration_end,
    -- Local crew count
    (SELECT COUNT(*) FROM kru_application_krus kkr WHERE kkr.kru_application_id = ka.id) as local_crew_count,
    -- Foreign crew count
    (SELECT COUNT(*) FROM kru_application_foreign_krus kfkr WHERE kfkr.kru_application_id = ka.id) as foreign_crew_count
FROM kru_applications ka
JOIN users u ON ka.user_id = u.id
LEFT JOIN vessels v ON ka.vessel_id = v.id
LEFT JOIN code_masters cm_status ON ka.kru_application_status_id = cm_status.id
WHERE ka.deleted_at IS NULL
ORDER BY ka.created_at DESC;
```

### Get Detailed KRU Application with All Crew
```sql
SELECT
    ka.reference_number,
    u.name as applicant_name,
    v.vessel_no,
    -- Local crew details
    kkr.name as local_crew_name,
    kkr.ic_number as local_crew_ic,
    cm_pos.name as local_crew_position,
    -- Foreign crew details
    kfkr.name as foreign_crew_name,
    kfkr.passport_number,
    kfkr.birth_date,
    cm_country.name as foreign_crew_country
FROM kru_applications ka
JOIN users u ON ka.user_id = u.id
LEFT JOIN vessels v ON ka.vessel_id = v.id
LEFT JOIN kru_application_krus kkr ON ka.id = kkr.kru_application_id
LEFT JOIN code_masters cm_pos ON kkr.kru_position_id = cm_pos.id
LEFT JOIN kru_application_foreign_krus kfkr ON ka.id = kfkr.kru_application_id
LEFT JOIN code_masters cm_country ON kfkr.source_country_id = cm_country.id
WHERE ka.id = 'specific-application-id';
```

## Subsistence Management Queries

### Get Subsistence Application with User and Status
```sql
SELECT
    sa.id,
    sa.registration_no,
    sa.fullname,
    sa.icno,
    sa.tot_incomefish,
    sa.tot_incomeother,
    sa.tot_allincome,
    sa.tot_child,
    sa.tot_otherchild,
    sa.status_quota,
    sa.status_hq,
    u.name as applicant_name,
    e.entity_name,
    sa.submitted_at,
    sa.application_approved_date
FROM subsistence_application sa
JOIN users u ON sa.user_id = u.id
LEFT JOIN entities e ON sa.entity_id = e.id
WHERE sa.deleted_at IS NULL
ORDER BY sa.created_at DESC;
```

### Get Landing Declaration with Species and User
```sql
SELECT
    ld.id,
    ld.year,
    ld.month,
    ld.week,
    ld.submitted_at,
    u.name as declarer_name,
    u.username,
    e.entity_name,
    cm_status.name as status,
    ld.created_at
FROM landing_declarations ld
JOIN users u ON ld.user_id = u.id
LEFT JOIN entities e ON ld.entity_id = e.id
LEFT JOIN code_masters cm_status ON ld.landing_status_id = cm_status.id
WHERE ld.deleted_at IS NULL
ORDER BY ld.year DESC, ld.month DESC, ld.week DESC;
```

### Get Landing Declaration with Species Details
```sql
SELECT
    ld.id,
    ld.year,
    ld.month,
    ld.week,
    li.landing_date,
    las.species_id,
    s.common_name,
    s.scientific_name,
    las.weight,
    las.price_per_weight,
    (las.weight * las.price_per_weight) as total_value,
    u.name as declarer_name
FROM landing_declarations ld
JOIN landing_infos li ON ld.id = li.landing_declaration_id
JOIN landing_activity_species las ON li.id = las.landing_info_activity_id
LEFT JOIN species s ON las.species_id = s.id
JOIN users u ON ld.user_id = u.id
WHERE ld.id = 'specific-landing-id'
ORDER BY li.landing_date DESC;
```

## Payment and Financial Queries

### Get Payment Records with User and Application Details
```sql
SELECT
    p.id,
    p.application_table_name,
    p.application_id,
    p.payee,
    u.name as created_by_name,
    p.created_at,
    -- Get application details based on table name
    CASE
        WHEN p.application_table_name = 'subsistence_application' THEN
            (SELECT sa.fullname FROM subsistence_application sa WHERE sa.id = p.application_id)
        WHEN p.application_table_name = 'kru_applications' THEN
            (SELECT u2.name FROM kru_applications ka JOIN users u2 ON ka.user_id = u2.id WHERE ka.id = p.application_id)
        ELSE 'Unknown'
    END as applicant_name
FROM payments p
LEFT JOIN users u ON p.created_by = u.id
WHERE p.deleted_at IS NULL
ORDER BY p.created_at DESC;
```

### Get Receipt Details with Items
```sql
SELECT
    r.id,
    r.receipt_number,
    r.payment_id,
    p.payee,
    ri.item_name,
    ri.quantity,
    ri.fee,
    (ri.quantity * ri.fee) as line_total,
    r.created_at,
    u.name as created_by_name
FROM receipts r
JOIN payments p ON r.payment_id = p.id
LEFT JOIN receipt_items ri ON r.id = ri.receipt_id
LEFT JOIN users u ON r.created_by = u.id
WHERE r.deleted_at IS NULL
ORDER BY r.created_at DESC, r.id, ri.id;
```

## Audit and History Queries

### Get User Activity History
```sql
SELECT
    uh.id,
    uh.user_id,
    u.name as user_name,
    uh.start_date,
    uh.end_date,
    uh.email,
    uh.role_name,
    e.entity_name,
    uh.created_at
FROM user_histories uh
JOIN users u ON uh.user_id = u.id
LEFT JOIN entities e ON uh.entity_id = e.id
WHERE uh.deleted_at IS NULL
ORDER BY uh.start_date DESC;
```

### Get Audit Logs with User Details
```sql
SELECT
    al.id,
    al.table_id,
    al.source,
    al.action,
    al.details,
    al.ip_address,
    al.browser,
    al.created_at,
    u.name as performed_by,
    u.username
FROM audit_logs al
LEFT JOIN users u ON al.created_by = u.id
WHERE al.created_at >= '2024-01-01'
ORDER BY al.created_at DESC
LIMIT 100;
```

## Complex Multi-Table Queries

### Get Complete Vessel Application Status
```sql
SELECT
    v.vessel_no,
    v.no_pendaftaran,
    u.name as owner_name,
    -- Application counts by type
    COUNT(DISTINCT CASE WHEN ka.kru_application_type_id = 'kru01' THEN ka.id END) as kru01_applications,
    COUNT(DISTINCT CASE WHEN ka.kru_application_type_id = 'kru04' THEN ka.id END) as kru04_applications,
    COUNT(DISTINCT da.id) as darat_applications,
    -- Latest application status
    MAX(ka.created_at) as latest_kru_application,
    MAX(da.created_at) as latest_darat_application,
    -- Crew counts
    COUNT(DISTINCT k.id) as total_crew,
    COUNT(DISTINCT nm.id) as marine_crew,
    COUNT(DISTINCT fc.id) as foreign_crew
FROM vessels v
JOIN users u ON v.user_id = u.id
LEFT JOIN kru_applications ka ON v.id = ka.vessel_id AND ka.deleted_at IS NULL
LEFT JOIN darat_applications da ON v.user_id = da.user_id AND da.deleted_at IS NULL
LEFT JOIN kru k ON v.no_pendaftaran = k.no_pendaftaran
LEFT JOIN nelayan_marins nm ON v.id = nm.vessel_id
LEFT JOIN foreign_crews fc ON v.id = fc.vessel_id
WHERE v.is_active = 1
  AND v.deleted_at IS NULL
GROUP BY v.id, v.vessel_no, v.no_pendaftaran, u.name
ORDER BY v.created_at DESC;
```

### Get Entity Performance Dashboard
```sql
SELECT
    e.entity_name,
    e.entity_level,
    -- User counts
    COUNT(DISTINCT u.id) as total_users,
    COUNT(DISTINCT CASE WHEN u.is_active = 1 THEN u.id END) as active_users,
    -- Vessel counts
    COUNT(DISTINCT v.id) as total_vessels,
    COUNT(DISTINCT CASE WHEN v.is_active = 1 THEN v.id END) as active_vessels,
    -- Application counts
    COUNT(DISTINCT sa.id) as subsistence_applications,
    COUNT(DISTINCT ld.id) as landing_declarations,
    COUNT(DISTINCT ka.id) as kru_applications,
    -- Recent activity
    MAX(sa.created_at) as latest_subsistence_app,
    MAX(ld.created_at) as latest_landing_declaration,
    MAX(ka.created_at) as latest_kru_application
FROM entities e
LEFT JOIN users u ON e.id = u.entity_id AND u.deleted_at IS NULL
LEFT JOIN vessels v ON e.id = v.entity_id AND v.deleted_at IS NULL
LEFT JOIN subsistence_application sa ON e.id = sa.entity_id AND sa.deleted_at IS NULL
LEFT JOIN landing_declarations ld ON e.id = ld.entity_id AND ld.deleted_at IS NULL
LEFT JOIN kru_applications ka ON e.id = ka.entity_id AND ka.deleted_at IS NULL
WHERE e.is_active = 1
  AND e.deleted_at IS NULL
GROUP BY e.id, e.entity_name, e.entity_level
ORDER BY e.entity_level, e.entity_name;
```

### Get Application Approval Workflow
```sql
SELECT
    a.id as application_id,
    CASE
        WHEN a.application_type_id IS NOT NULL THEN 'Legacy Application'
        WHEN ka.id IS NOT NULL THEN 'KRU Application'
        WHEN da.id IS NOT NULL THEN 'Darat Application'
        WHEN sa.id IS NOT NULL THEN 'Subsistence Application'
    END as application_type,
    COALESCE(a.full_name, ka.user_id, da.user_id, sa.fullname) as applicant_name,
    -- Status tracking
    COALESCE(
        (SELECT cm.name FROM code_masters cm WHERE cm.id = a.application_status_id),
        (SELECT cm.name FROM code_masters cm WHERE cm.id = ka.kru_application_status_id),
        (SELECT cm.name FROM code_masters cm WHERE cm.id = da.application_status_id),
        sa.sub_application_status
    ) as current_status,
    -- Approval history
    COUNT(DISTINCT ap.id) as approval_count,
    MAX(ap.created_at) as last_approval_date,
    -- Document count
    COUNT(DISTINCT att.id) as attached_documents
FROM (
    SELECT id, application_type_id, full_name, NULL as kru_id, NULL as darat_id, NULL as subsistence_id FROM applications
    UNION ALL
    SELECT id, NULL, NULL, id, NULL, NULL FROM kru_applications
    UNION ALL
    SELECT id, NULL, NULL, NULL, id, NULL FROM darat_applications
    UNION ALL
    SELECT id, NULL, fullname, NULL, NULL, id FROM subsistence_application
) combined_apps a
LEFT JOIN kru_applications ka ON a.kru_id = ka.id
LEFT JOIN darat_applications da ON a.darat_id = da.id
LEFT JOIN subsistence_application sa ON a.subsistence_id = sa.id
LEFT JOIN approvals ap ON (
    (a.application_type_id IS NOT NULL AND ap.object_type = 'applications' AND ap.object_id = a.id) OR
    (a.kru_id IS NOT NULL AND ap.object_type = 'kru_applications' AND ap.object_id = a.kru_id) OR
    (a.darat_id IS NOT NULL AND ap.object_type = 'darat_applications' AND ap.object_id = a.darat_id) OR
    (a.subsistence_id IS NOT NULL AND ap.object_type = 'subsistence_application' AND ap.object_id = a.subsistence_id)
)
LEFT JOIN attachments att ON (
    (a.application_type_id IS NOT NULL AND att.object_type = 'applications' AND att.object_id = a.id) OR
    (a.kru_id IS NOT NULL AND att.object_type = 'kru_applications' AND att.object_id = a.kru_id) OR
    (a.darat_id IS NOT NULL AND att.object_type = 'darat_applications' AND att.object_id = a.darat_id) OR
    (a.subsistence_id IS NOT NULL AND att.object_type = 'subsistence_application' AND att.object_id = a.subsistence_id)
)
GROUP BY a.id, application_type, applicant_name, current_status
ORDER BY a.id DESC
LIMIT 50;
```

## Performance Optimization Tips

### Use Proper Indexes
```sql
-- Ensure these indexes exist for common queries
CREATE INDEX idx_users_entity_id ON users(entity_id);
CREATE INDEX idx_vessels_user_id ON vessels(user_id);
CREATE INDEX idx_applications_user_id ON applications(created_by);
CREATE INDEX idx_subsistence_user_id ON subsistence_application(user_id);
CREATE INDEX idx_landing_user_id ON landing_declarations(user_id);
```

### Query Optimization Patterns
```sql
-- Use EXISTS instead of COUNT for existence checks
SELECT * FROM vessels v
WHERE EXISTS (
    SELECT 1 FROM kru_applications ka
    WHERE ka.vessel_id = v.id AND ka.deleted_at IS NULL
);

-- Use UNION ALL for combining similar queries
-- Avoid OR conditions in JOINs when possible
-- Use LIMIT for large result sets
```

## Additional Query Examples

### Reporting and Analytics Queries

#### Monthly Application Summary by Entity
```sql
SELECT
    e.entity_name,
    YEAR(a.created_at) as year,
    MONTH(a.created_at) as month,
    COUNT(CASE WHEN a.application_type_id IS NOT NULL THEN 1 END) as legacy_applications,
    COUNT(CASE WHEN ka.id IS NOT NULL THEN 1 END) as kru_applications,
    COUNT(CASE WHEN da.id IS NOT NULL THEN 1 END) as darat_applications,
    COUNT(CASE WHEN sa.id IS NOT NULL THEN 1 END) as subsistence_applications,
    COUNT(*) as total_applications
FROM entities e
LEFT JOIN applications a ON e.id = a.created_by_entity_id AND a.deleted_at IS NULL
LEFT JOIN kru_applications ka ON e.id = ka.entity_id AND ka.deleted_at IS NULL
LEFT JOIN darat_applications da ON e.id = da.new_entity_id AND da.deleted_at IS NULL
LEFT JOIN subsistence_application sa ON e.id = sa.entity_id AND sa.deleted_at IS NULL
WHERE e.is_active = 1
  AND e.deleted_at IS NULL
  AND YEAR(a.created_at) = YEAR(CURDATE())
GROUP BY e.id, e.entity_name, YEAR(a.created_at), MONTH(a.created_at)
ORDER BY year DESC, month DESC, e.entity_name;
```

#### Vessel License Expiry Report
```sql
SELECT
    v.vessel_no,
    v.no_pendaftaran,
    u.name as owner_name,
    u.contact_number,
    u.email,
    l.no_lesen,
    l.tarikh_keluar as license_start,
    l.tarikh_tamat as license_end,
    DATEDIFF(l.tarikh_tamat, CURDATE()) as days_until_expiry,
    CASE
        WHEN DATEDIFF(l.tarikh_tamat, CURDATE()) <= 30 THEN 'Critical'
        WHEN DATEDIFF(l.tarikh_tamat, CURDATE()) <= 90 THEN 'Warning'
        ELSE 'Normal'
    END as expiry_status,
    e.entity_name as managing_entity
FROM vessels v
JOIN users u ON v.user_id = u.id
LEFT JOIN entities e ON v.entity_id = e.id
LEFT JOIN lesen l ON v.no_pendaftaran = l.no_pendaftaran
WHERE v.is_active = 1
  AND v.deleted_at IS NULL
  AND l.tarikh_tamat IS NOT NULL
  AND l.tarikh_tamat >= CURDATE()
ORDER BY l.tarikh_tamat ASC;
```

#### Top Species by Landing Volume
```sql
SELECT
    s.common_name,
    s.scientific_name,
    s.family_name,
    SUM(las.weight) as total_weight_kg,
    AVG(las.price_per_weight) as avg_price_per_kg,
    SUM(las.weight * las.price_per_weight) as total_value,
    COUNT(DISTINCT ld.id) as landing_count,
    COUNT(DISTINCT ld.user_id) as unique_fishers
FROM species s
JOIN landing_activity_species las ON s.id = las.species_id
JOIN landing_infos li ON las.landing_info_activity_id = li.id
JOIN landing_declarations ld ON li.landing_declaration_id = ld.id
WHERE ld.deleted_at IS NULL
  AND ld.year = YEAR(CURDATE())
GROUP BY s.id, s.common_name, s.scientific_name, s.family_name
ORDER BY total_weight_kg DESC
LIMIT 20;
```

### Compliance and Monitoring Queries

#### Applications Pending Approval
```sql
SELECT
    'Legacy Application' as application_type,
    a.id,
    a.full_name as applicant_name,
    a.ic_no,
    cm_type.name as application_type_name,
    a.created_at as submitted_date,
    DATEDIFF(CURDATE(), a.created_at) as days_pending,
    u.name as submitted_by,
    e.entity_name
FROM applications a
LEFT JOIN code_masters cm_type ON a.application_type_id = cm_type.id
LEFT JOIN users u ON a.created_by = u.id
LEFT JOIN entities e ON u.entity_id = e.id
WHERE a.deleted_at IS NULL
  AND a.application_status_id NOT IN (
      SELECT id FROM code_masters WHERE type = 'application_status' AND code IN ('approved', 'rejected')
  )

UNION ALL

SELECT
    'KRU Application' as application_type,
    ka.id,
    u.name as applicant_name,
    u.username as ic_no,
    cm_type.name as application_type_name,
    ka.created_at as submitted_date,
    DATEDIFF(CURDATE(), ka.created_at) as days_pending,
    u2.name as submitted_by,
    e.entity_name
FROM kru_applications ka
JOIN users u ON ka.user_id = u.id
LEFT JOIN code_masters cm_type ON ka.kru_application_type_id = cm_type.id
LEFT JOIN users u2 ON ka.created_by = u2.id
LEFT JOIN entities e ON ka.entity_id = e.id
WHERE ka.deleted_at IS NULL
  AND ka.is_approved IS NULL

ORDER BY days_pending DESC, submitted_date DESC;
```

#### Foreign Crew Compliance Check
```sql
SELECT
    fc.name as crew_name,
    fc.passport_number,
    fc.plks_number,
    fc.plks_end_date,
    fc.passport_end_date,
    v.vessel_no,
    v.no_pendaftaran,
    u.name as vessel_owner,
    e.entity_name,
    DATEDIFF(fc.plks_end_date, CURDATE()) as plks_days_remaining,
    DATEDIFF(fc.passport_end_date, CURDATE()) as passport_days_remaining,
    CASE
        WHEN DATEDIFF(fc.plks_end_date, CURDATE()) <= 30 OR DATEDIFF(fc.passport_end_date, CURDATE()) <= 30 THEN 'Critical'
        WHEN DATEDIFF(fc.plks_end_date, CURDATE()) <= 90 OR DATEDIFF(fc.passport_end_date, CURDATE()) <= 90 THEN 'Warning'
        ELSE 'Valid'
    END as compliance_status
FROM foreign_crews fc
JOIN vessels v ON fc.vessel_id = v.id
LEFT JOIN users u ON v.user_id = u.id
LEFT JOIN entities e ON v.entity_id = e.id
WHERE fc.plks_end_date IS NOT NULL
  AND fc.passport_end_date IS NOT NULL
ORDER BY
    CASE
        WHEN DATEDIFF(fc.plks_end_date, CURDATE()) <= 30 OR DATEDIFF(fc.passport_end_date, CURDATE()) <= 30 THEN 1
        WHEN DATEDIFF(fc.plks_end_date, CURDATE()) <= 90 OR DATEDIFF(fc.passport_end_date, CURDATE()) <= 90 THEN 2
        ELSE 3
    END,
    fc.plks_end_date ASC;
```

### Financial and Revenue Queries

#### Monthly Revenue by Application Type
```sql
SELECT
    YEAR(p.created_at) as year,
    MONTH(p.created_at) as month,
    p.application_table_name,
    COUNT(DISTINCT p.id) as payment_count,
    SUM(CASE WHEN ri.fee IS NOT NULL THEN ri.quantity * ri.fee ELSE 0 END) as total_revenue,
    AVG(CASE WHEN ri.fee IS NOT NULL THEN ri.quantity * ri.fee ELSE 0 END) as avg_payment_amount,
    e.entity_name as collecting_entity
FROM payments p
LEFT JOIN receipts r ON p.id = r.payment_id
LEFT JOIN receipt_items ri ON r.id = ri.receipt_id
LEFT JOIN users u ON p.created_by = u.id
LEFT JOIN entities e ON u.entity_id = e.id
WHERE p.deleted_at IS NULL
  AND YEAR(p.created_at) = YEAR(CURDATE())
GROUP BY YEAR(p.created_at), MONTH(p.created_at), p.application_table_name, e.id, e.entity_name
ORDER BY year DESC, month DESC, total_revenue DESC;
```

#### Subsistence Payment Summary
```sql
SELECT
    YEAR(sp.created_at) as year,
    MONTH(sp.created_at) as month,
    COUNT(DISTINCT sp.id) as total_payments,
    SUM(sp.amount) as total_amount_paid,
    AVG(sp.amount) as avg_payment_amount,
    COUNT(DISTINCT spp.user_id) as unique_recipients,
    e.entity_name as paying_entity,
    COUNT(CASE WHEN spp.has_landing = 1 THEN 1 END) as payments_with_landing
FROM subsistence_payments sp
LEFT JOIN subsistence_payment_payees spp ON sp.id = spp.subsistence_payment_id
LEFT JOIN entities e ON sp.entity_id = e.id
WHERE sp.deleted_at IS NULL
GROUP BY YEAR(sp.created_at), MONTH(sp.created_at), e.id, e.entity_name
ORDER BY year DESC, month DESC, total_amount_paid DESC;
```

### User Activity and Access Queries

#### User Login Activity Report
```sql
SELECT
    u.username,
    u.name,
    u.email,
    COUNT(al.id) as total_actions,
    MAX(al.created_at) as last_activity,
    DATEDIFF(CURDATE(), MAX(al.created_at)) as days_since_last_activity,
    GROUP_CONCAT(DISTINCT al.action ORDER BY al.action) as actions_performed,
    e.entity_name,
    r.name as primary_role
FROM users u
LEFT JOIN audit_logs al ON u.id = al.created_by AND al.created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
LEFT JOIN entities e ON u.entity_id = e.id
LEFT JOIN user_role ur ON u.id = ur.user_id
LEFT JOIN roles r ON ur.role_id = r.id
WHERE u.is_active = 1
  AND u.deleted_at IS NULL
GROUP BY u.id, u.username, u.name, u.email, e.entity_name, r.name
ORDER BY last_activity DESC;
```

#### Module Access by Role
```sql
SELECT
    r.name as role_name,
    r.level as role_level,
    COUNT(DISTINCT rm.module_id) as accessible_modules,
    GROUP_CONCAT(DISTINCT m.name ORDER BY m.order SEPARATOR ', ') as module_list,
    COUNT(DISTINCT u.id) as users_with_role,
    e.entity_name
FROM roles r
LEFT JOIN role_module rm ON r.id = rm.role_id
LEFT JOIN modules m ON rm.module_id = m.id AND m.is_active = 1
LEFT JOIN user_role ur ON r.id = ur.role_id
LEFT JOIN users u ON ur.user_id = u.id AND u.is_active = 1
LEFT JOIN entities e ON r.entity_id = e.id
WHERE r.is_active = 1
  AND r.deleted_at IS NULL
GROUP BY r.id, r.name, r.level, e.entity_name
ORDER BY r.level ASC, accessible_modules DESC;
```

### Data Quality and Validation Queries

#### Incomplete Applications Check
```sql
SELECT
    'KRU Application' as type,
    ka.id,
    u.name as applicant,
    ka.reference_number,
    CASE
        WHEN ka.vessel_id IS NULL THEN 'Missing Vessel'
        WHEN (SELECT COUNT(*) FROM kru_application_krus kkr WHERE kkr.kru_application_id = ka.id) = 0 THEN 'No Local Crew'
        WHEN ka.submitted_at IS NULL THEN 'Not Submitted'
        ELSE 'Other Issues'
    END as issue_type,
    ka.created_at
FROM kru_applications ka
JOIN users u ON ka.user_id = u.id
WHERE ka.deleted_at IS NULL
  AND (ka.vessel_id IS NULL
       OR (SELECT COUNT(*) FROM kru_application_krus kkr WHERE kkr.kru_application_id = ka.id) = 0
       OR ka.submitted_at IS NULL)

UNION ALL

SELECT
    'Subsistence Application' as type,
    sa.id,
    sa.fullname as applicant,
    sa.registration_no as reference_number,
    CASE
        WHEN sa.no_account IS NULL OR sa.no_account = '' THEN 'Missing Bank Account'
        WHEN sa.declaration != 1 THEN 'Declaration Not Accepted'
        WHEN sa.submitted_at IS NULL THEN 'Not Submitted'
        ELSE 'Other Issues'
    END as issue_type,
    sa.created_at
FROM subsistence_application sa
WHERE sa.deleted_at IS NULL
  AND (sa.no_account IS NULL OR sa.no_account = ''
       OR sa.declaration != 1
       OR sa.submitted_at IS NULL)

ORDER BY created_at DESC;
```

#### Duplicate User Check
```sql
SELECT
    u.username,
    u.email,
    u.name,
    COUNT(*) as duplicate_count,
    GROUP_CONCAT(u.id) as user_ids,
    GROUP_CONCAT(e.entity_name) as entities,
    MAX(u.created_at) as latest_created
FROM users u
LEFT JOIN entities e ON u.entity_id = e.id
WHERE u.deleted_at IS NULL
GROUP BY u.username, u.email, u.name
HAVING COUNT(*) > 1
ORDER BY duplicate_count DESC, latest_created DESC;
```

### Geographic and Location-Based Queries

#### Applications by State and District
```sql
SELECT
    cm_state.name as state,
    cm_district.name as district,
    COUNT(DISTINCT a.id) as legacy_applications,
    COUNT(DISTINCT ka.id) as kru_applications,
    COUNT(DISTINCT sa.id) as subsistence_applications,
    COUNT(DISTINCT ld.id) as landing_declarations,
    COUNT(DISTINCT u.id) as registered_users
FROM code_masters cm_state
LEFT JOIN code_masters cm_district ON cm_district.parent_id = cm_state.id
LEFT JOIN applications a ON (
    a.mail_state_id = cm_state.id OR
    a.home_state_id = cm_state.id
) AND a.deleted_at IS NULL
LEFT JOIN users u ON u.state_id = cm_state.id AND u.deleted_at IS NULL
LEFT JOIN subsistence_application sa ON sa.state_id = cm_state.id AND sa.deleted_at IS NULL
LEFT JOIN landing_declarations ld ON ld.user_id IN (
    SELECT id FROM users WHERE state_id = cm_state.id
) AND ld.deleted_at IS NULL
LEFT JOIN kru_applications ka ON ka.user_id IN (
    SELECT id FROM users WHERE state_id = cm_state.id
) AND ka.deleted_at IS NULL
WHERE cm_state.type = 'state'
  AND cm_state.is_active = 1
GROUP BY cm_state.id, cm_state.name, cm_district.id, cm_district.name
ORDER BY cm_state.name, cm_district.name;
```

#### Vessel Distribution by State
```sql
SELECT
    cm_state.name as state_name,
    COUNT(DISTINCT v.id) as total_vessels,
    COUNT(DISTINCT CASE WHEN v.is_active = 1 THEN v.id END) as active_vessels,
    COUNT(DISTINCT CASE WHEN kulit.id IS NOT NULL THEN v.id END) as vessels_with_hull_info,
    COUNT(DISTINCT CASE WHEN enjin.id IS NOT NULL THEN v.id END) as vessels_with_engine_info,
    COUNT(DISTINCT CASE WHEN pemilikan.id IS NOT NULL THEN v.id END) as vessels_with_ownership,
    COUNT(DISTINCT CASE WHEN lesen.id IS NOT NULL THEN v.id END) as vessels_with_license,
    AVG(v.grt) as avg_grt,
    SUM(v.grt) as total_grt
FROM code_masters cm_state
LEFT JOIN users u ON u.state_id = cm_state.id AND u.deleted_at IS NULL
LEFT JOIN vessels v ON v.user_id = u.id AND v.deleted_at IS NULL
LEFT JOIN kulit ON v.no_pendaftaran = kulit.no_pendaftaran
LEFT JOIN enjin ON v.no_pendaftaran = enjin.no_pendaftaran
LEFT JOIN pemilikan ON v.no_pendaftaran = pemilikan.no_pendaftaran
LEFT JOIN lesen ON v.no_pendaftaran = lesen.no_pendaftaran
WHERE cm_state.type = 'state'
  AND cm_state.is_active = 1
GROUP BY cm_state.id, cm_state.name
ORDER BY total_vessels DESC;
```

## Notes

1. **Soft Deletes**: Always include `WHERE table.deleted_at IS NULL` for active records
2. **Audit Fields**: Most tables have `created_by`, `updated_by` for tracking changes
3. **Status Fields**: Use appropriate status lookups from `code_masters` table
4. **Date Ranges**: Many tables have validity periods (start_date, end_date)
5. **File Storage**: File paths are stored in various tables for document management
6. **Geographic Data**: Multiple address levels (state, district, city, postcode)

These additional queries provide comprehensive coverage for reporting, compliance monitoring, financial analysis, user activity tracking, data quality validation, and geographic analysis across the eLesen system. Always test queries in a development environment before production use.