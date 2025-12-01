-- SQL to alter table darat_vessel_inspections to add English field names
-- This script adds the following new columns:
-- - vessel_roof (replaces noVesel_diBumbung)
-- - width_marker_nail (replaces pakuPenandaLebar)  
-- - is_no_pev (replaces isNoPEV)
-- - no_pev (replaces noPEV)

USE your_database_name; -- Replace with your actual database name

-- Add new columns to darat_vessel_inspections table
ALTER TABLE darat_vessel_inspections 
ADD COLUMN vessel_roof TINYINT(1) DEFAULT 0 COMMENT 'Whether vessel has roof (replaces noVesel_diBumbung)',
ADD COLUMN width_marker_nail TINYINT(1) DEFAULT 0 COMMENT 'Width marker nail status (replaces pakuPenandaLebar)',
ADD COLUMN is_no_pev TINYINT(1) DEFAULT 0 COMMENT 'Is No PEV status (replaces isNoPEV)',
ADD COLUMN no_pev VARCHAR(255) DEFAULT NULL COMMENT 'No PEV value (replaces noPEV)';

-- Update existing data if needed (optional migration)
-- You can add any data migration logic here if there are existing Malay field names that need to be migrated

-- Verify the changes
DESCRIBE darat_vessel_inspections;