-- SQL query to join darat_vessels with related tables

SELECT
    dv.id,
    dv.registration_number,
    dv.length,
    dv.width,
    dv.depth,
    dv.transportation,
    dv.is_approved,
    dv.is_active,
    u.name AS user_name,
    u.email AS user_email,
    dvi.inspection_date,
    dvi.vessel_condition,
    dvi.hull_type,
    dvi.engine_brand,
    dvi.engine_model,
    dvi.horsepower,
    dvi.safety_jacket_status,
    dvi.safety_jacket_quantity,
    dvi.safety_jacket_condition,
    dve.model AS engine_model,
    dve.brand AS engine_brand,
    dve.horsepower AS engine_hp,
    dve.engine_number,
    dvh.hull_type AS hull_type,
    dvh.length AS hull_length,
    dvh.width AS hull_width,
    dvh.depth AS hull_depth,
    da.no_rujukan,
    da.is_approved AS application_approved,
    cm_type.name AS application_type,
    cm_status.name AS application_status
FROM
    darat_vessels dv
LEFT JOIN users u ON dv.user_id = u.id
LEFT JOIN darat_vessel_inspections dvi ON dv.id = dvi.vessel_id
LEFT JOIN darat_vessel_engines dve ON dv.id = dve.vessel_id
LEFT JOIN darat_vessel_hulls dvh ON dv.id = dvh.vessel_id
LEFT JOIN darat_applications da ON dvi.application_id = da.id
LEFT JOIN code_masters cm_type ON da.application_type_id = cm_type.id
LEFT JOIN code_masters cm_status ON da.application_status_id = cm_status.id
WHERE
    dv.is_active = 1
ORDER BY
    dv.created_at DESC;