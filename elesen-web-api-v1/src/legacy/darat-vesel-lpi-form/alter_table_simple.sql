-- Simple SQL to alter darat_vessel_inspections table
ALTER TABLE darat_vessel_inspections 
ADD COLUMN vessel_roof TINYINT(1) DEFAULT 0,
ADD COLUMN width_marker_nail TINYINT(1) DEFAULT 0,
ADD COLUMN is_no_pev TINYINT(1) DEFAULT 0,
ADD COLUMN no_pev VARCHAR(255) DEFAULT NULL;
