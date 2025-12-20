-- SQL DDL for all entities in the project
-- Note: Execute tables in dependency order or use ALTER TABLE for foreign keys if needed
-- Enums are defined as ENUM types
-- UUIDs are VARCHAR(36)
-- Booleans are TINYINT(1)
-- Timestamps are TIMESTAMP
-- Dates are DATE
-- Decimals as specified

-- Appointment
CREATE TABLE appointment (
    id VARCHAR(36) PRIMARY KEY,
    tarikh_pemeriksaan DATETIME NOT NULL,
    status ENUM('Dijadualkan', 'Selesai', 'Batal') DEFAULT 'Dijadualkan',
    penyediaan_laporan ENUM('Dalam Semakan', 'Disokong') DEFAULT 'Dalam Semakan',
    kehadiran ENUM('Hadir', 'Tidak Hadir', 'Tangguh Pemeriksaan') NULL,
    dihadiri ENUM('Pemilik', 'Wakil') NULL,
    vessel_id VARCHAR(36) NULL,
    FOREIGN KEY (vessel_id) REFERENCES vessels(id)
);

-- DeviceRegistration
CREATE TABLE device_registration (
    id VARCHAR(36) PRIMARY KEY,
    fcm_token VARCHAR(255) NOT NULL,
    device_name VARCHAR(255) NULL,
    os VARCHAR(255) NULL,
    device_version VARCHAR(255) NULL,
    app_version VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Financial
CREATE TABLE financial (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(255) UNIQUE NOT NULL,
    bank_name VARCHAR(100) NULL,
    branch VARCHAR(100) NULL,
    account_no VARCHAR(50) NULL,
    bantuan_elaun_sara_hidup BOOLEAN DEFAULT FALSE,
    bantuan BOOLEAN DEFAULT FALSE,
    kwsp BOOLEAN DEFAULT FALSE,
    pencen BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- FishingActivity
CREATE TABLE fishing_activity (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    is_main_income BOOLEAN DEFAULT FALSE,
    fishing_location VARCHAR(200) NULL,
    first_registered_year INT NULL,
    fishing_days_per_month INT NULL,
    fishing_days_per_season INT NULL,
    season_length INT NULL,
    annual_income_estimate DECIMAL(15,2) NULL,
    monthly_income_estimate DECIMAL(15,2) NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- LpiForm
CREATE TABLE lpi_forms (
    id VARCHAR(36) PRIMARY KEY,
    user VARCHAR(255) NOT NULL,
    vessel_id VARCHAR(36) NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vessel_id) REFERENCES vessels(id)
);

-- LpiFormImage
CREATE TABLE lpi_form_images (
    id VARCHAR(36) PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    lpi_form_id VARCHAR(36) NULL,
    FOREIGN KEY (lpi_form_id) REFERENCES lpi_forms(id)
);


-- Pengkalan
CREATE TABLE pengkalan (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    name VARCHAR(150) NULL,
    district VARCHAR(100) NULL,
    state VARCHAR(100) NULL,
    location VARCHAR(200) NULL,
    license_no VARCHAR(50) NULL,
    license_expiry DATE NULL,
    main_equipment VARCHAR(100) NULL,
    additional_equipment VARCHAR(100) NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- VesselInspection
CREATE TABLE pemeriksaan_vessels (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    jenis_borang ENUM('value1', 'value2') NOT NULL, -- Replace with actual enum values from JenisBorang
    vessel_no VARCHAR(255) UNIQUE NOT NULL,
    pangkalan VARCHAR(255) NOT NULL,
    lpi_form_id VARCHAR(36) NULL,
    vessel_id VARCHAR(36) NULL,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (lpi_form_id) REFERENCES lpi_forms(id),
    FOREIGN KEY (vessel_id) REFERENCES vessels(id)
);

-- AlatKeselamatan
CREATE TABLE alat_keselamatan (
    id VARCHAR(36) PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    ada BOOLEAN NOT NULL,
    keadaan VARCHAR(255) NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- ButiranEnjin
CREATE TABLE butiran_enjin (
    id VARCHAR(36) PRIMARY KEY,
    jenama VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    kuasa_kuda INT NOT NULL,
    no_enjin VARCHAR(255) NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- ButiranVesel
CREATE TABLE butiran_vessels (
    id VARCHAR(36) PRIMARY KEY,
    panjang DECIMAL(5,2) NOT NULL,
    lebar DECIMAL(5,2) NOT NULL,
    dalam DECIMAL(5,2) NOT NULL,
    muatan_grt DECIMAL(6,2) NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- EmpunyaVesel
CREATE TABLE empunya_vessels (
    id VARCHAR(36) PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    ic VARCHAR(255) NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- InfoVessel
CREATE TABLE info_vessels (
    id VARCHAR(36) PRIMARY KEY,
    struktur VARCHAR(255) NOT NULL,
    jenis VARCHAR(255) NOT NULL,
    jenis_kulit VARCHAR(255) NOT NULL,
    tarikh_pemeriksaan DATE NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- Nakhoda
CREATE TABLE nakhoda (
    id VARCHAR(36) PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    ic VARCHAR(255) NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- PenandaanVesel
CREATE TABLE penandaan_vessels (
    id VARCHAR(36) PRIMARY KEY,
    ditebuk BOOLEAN NOT NULL,
    dicat_terang BOOLEAN NOT NULL,
    di_bumbung BOOLEAN NOT NULL,
    penukul_besi BOOLEAN NOT NULL,
    kod_penukul VARCHAR(255) NULL,
    tin_plate BOOLEAN NOT NULL,
    no_tin_plate VARCHAR(255) NULL,
    paku_penanda BOOLEAN NOT NULL,
    rumah_kemudi_dicat BOOLEAN NOT NULL,
    kod_zon VARCHAR(255) NOT NULL,
    mppl BOOLEAN NOT NULL,
    di_bumbung_rumah BOOLEAN NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- PeralatanMenangkap
CREATE TABLE peralatan_menangkap (
    id VARCHAR(36) PRIMARY KEY,
    gps BOOLEAN NOT NULL,
    echo_sounder BOOLEAN NOT NULL,
    radar BOOLEAN NOT NULL,
    atur BOOLEAN NOT NULL,
    net_hauler BOOLEAN NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- PeralatanTambahanTambahan
CREATE TABLE peralatan_tambahan_tambahan (
    id VARCHAR(36) PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- PeralatanTambahanUtama
CREATE TABLE peralatan_tambahan_utama (
    id VARCHAR(36) PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);

-- PukatTunda
CREATE TABLE pukat_tunda (
    id VARCHAR(36) PRIMARY KEY,
    jalur_putih BOOLEAN NOT NULL,
    dicat_terang BOOLEAN NOT NULL,
    pemeriksaan_vessels_id BIGINT UNSIGNED NULL,
    FOREIGN KEY (pemeriksaan_vessels_id) REFERENCES pemeriksaan_vessels(id)
);


-- Seed data for all tables
-- Execute after creating tables
-- Sample data only, adjust as needed

-- Device Registration
INSERT INTO elesen2024.device_registration (fcm_token,device_name,os,device_version,app_version,created_at) VALUES
	 ('firebase_cloud_messaging_token_here','iPhone 13 Pro','iOS','15.0','15.0','2025-07-18 11:14:58'),
	 ('firebase_cloud_messaging_token_here','iPhone 13 Pro','iOS','15.0','15.0','2025-08-20 15:54:26'),
	 ('dL24KqoCRyaH1mS6YLUc8r:APA91bH3GtERvn677iS94IEsD2yWyXxqkF3oald5RU26Yr4YE0A75lVIZHtRa61IegzrWV_1upTiJIafMRG7lDhmJAEQ3shJiCyhbxmKtMO36f8f0hL3FvI','Galaxy A13','Android','14','0.0.1','2025-08-24 15:21:54'),
	 ('dL24KqoCRyaH1mS6YLUc8r:APA91bH3GtERvn677iS94IEsD2yWyXxqkF3oald5RU26Yr4YE0A75lVIZHtRa61IegzrWV_1upTiJIafMRG7lDhmJAEQ3shJiCyhbxmKtMO36f8f0hL3FvI','Galaxy A13','Android','14','0.0.1','2025-08-25 16:34:31'),
	 ('dL24KqoCRyaH1mS6YLUc8r:APA91bH3GtERvn677iS94IEsD2yWyXxqkF3oald5RU26Yr4YE0A75lVIZHtRa61IegzrWV_1upTiJIafMRG7lDhmJAEQ3shJiCyhbxmKtMO36f8f0hL3FvI','Galaxy A13','Android','14','0.0.1','2025-08-27 02:41:39'),
	 ('dL24KqoCRyaH1mS6YLUc8r:APA91bFogfGu4_GkbZWBurHnQB_SmNKPTbvukO50_BFB_6kUYbrp4onRpEgDlszu3w7sFhIWGRBklMZ4T3QqKjyUthc7U7P3ao7CcU1H8kPvgv7bpNOa57o','Galaxy A13','Android','14','0.0.1','2025-08-27 03:43:05'),
	 ('dL24KqoCRyaH1mS6YLUc8r:APA91bGY_HQ3O8umze3P7GFXDgmwJAoAUJAWGT9e-9lRQ53ulrbfwGdWWVkdfJ7AnqNgycaBv9wTkHILs0cFfdx29VBkRoqGyLiQfp-YN2XZleOQi69wA6A','Galaxy A13','Android','14','0.0.1','2025-09-15 09:26:05'),
	 ('dL24KqoCRyaH1mS6YLUc8r:APA91bE0lnkXWkG8vgpuRZSA3ic5toXImhFK8oViV3bMUq9U85wIq0NLN48zok0mdUCpnI7bf_Wi8aEkeDA1WhHpiARJkRiBwhiEl3NsTVEIytqd8TcEUPQ','Galaxy A13','Android','14','0.0.1','2025-09-15 09:28:18'),
	 ('dL24KqoCRyaH1mS6YLUc8r:APA91bE0lnkXWkG8vgpuRZSA3ic5toXImhFK8oViV3bMUq9U85wIq0NLN48zok0mdUCpnI7bf_Wi8aEkeDA1WhHpiARJkRiBwhiEl3NsTVEIytqd8TcEUPQ','Galaxy A13','Android','14','0.0.1','2025-09-15 09:50:01');

-- CodeMaster
INSERT INTO code_masters (id, code, name, name_ms) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'MALE', 'Male', 'Lelaki'),
('550e8400-e29b-41d4-a716-446655440002', 'FEMALE', 'Female', 'Perempuan');

-- Entities
INSERT INTO entities (id, parent_id, entity_name, entity_level, is_active, state_code, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at) VALUES
('550e8400-e29b-41d4-a716-446655440003', NULL, 'Main Entity', 1, 1, 'MY', NULL, NULL, NULL, NOW(), NOW(), NULL);

-- Users
INSERT INTO users (id, name, username, email, email_verified_at, password, remember_token, is_active, is_admin, user_type, profile_picture, last_online_at, bumiputera_type, address1, address2, address3, postcode, district, state_id, contact_number, mobile_contact_number, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at, entity_id, position_id, start_date, end_date, watikah_status) VALUES
('550e8400-e29b-41d4-a716-446655440004', 'John Doe', 'johndoe', 'john@example.com', NOW(), 'hashedpassword', NULL, 1, 0, 'user', NULL, NOW(), NULL, 'Address 1', NULL, NULL, '12345', 'District', 'State', '0123456789', '0123456789', NULL, NULL, NULL, NOW(), NOW(), NULL, '550e8400-e29b-41d4-a716-446655440003', NULL, '2023-01-01', NULL, NULL);

-- ProfileUser
INSERT INTO profile_users (id, user_id, gender_id, religion_id, race_id, marital_status_id, type_id, phone, email) VALUES
('550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440001', NULL, NULL, NULL, NULL, '0123456789', 'john@example.com');

-- Role
INSERT INTO roles (id, name, is_active, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at, quota, level, entity_id) VALUES
('550e8400-e29b-41d4-a716-446655440006', 'Admin', 1, NULL, NULL, NULL, NOW(), NOW(), NULL, 10, 1, '550e8400-e29b-41d4-a716-446655440003');

-- User-Role
INSERT INTO user_role (user_id, role_id) VALUES
('550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440006');

-- Vessels
INSERT INTO vessels (id, entity_id, vessel_no, zone, start_date, end_date, is_active, created_by, created_at, updated_by, updated_at, deleted_by, deleted_at) VALUES
('550e8400-e29b-41d4-a716-446655440007', '550e8400-e29b-41d4-a716-446655440003', 'V001', 'Zone A', '2023-01-01', NULL, 1, '550e8400-e29b-41d4-a716-446655440004', NOW(), NULL, NULL, NULL, NULL);

-- Appointment
INSERT INTO appointment (id, tarikh_pemeriksaan, status, penyediaan_laporan, kehadiran, dihadiri, vessel_id) VALUES
('550e8400-e29b-41d4-a716-446655440008', '2023-05-01 10:00:00', 'Dijadualkan', 'Dalam Semakan', 'Hadir', 'Pemilik', '550e8400-e29b-41d4-a716-446655440007');

-- Financial
INSERT INTO financial (id, user_id, bank_name, branch, account_no, bantuan_elaun_sara_hidup, bantuan, kwsp, pencen) VALUES
('550e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440004', 'Bank Sample', 'Branch A', '1234567890', 0, 1, 0, 0);

-- FishingActivity
INSERT INTO fishing_activity (id, user_id, is_main_income, fishing_location, first_registered_year, fishing_days_per_month, fishing_days_per_season, season_length, annual_income_estimate, monthly_income_estimate) VALUES
('550e8400-e29b-41d4-a716-446655440011', '550e8400-e29b-41d4-a716-446655440004', 1, 'Location A', 2020, 20, 100, 6, 50000.00, 4166.67);

-- LpiForm
INSERT INTO lpi_forms (id, user, vessel_id, createdAt) VALUES
('550e8400-e29b-41d4-a716-446655440012', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440007', NOW());

-- LpiFormImage
INSERT INTO lpi_form_images (id, filename, path, lpi_form_id) VALUES
('550e8400-e29b-41d4-a716-446655440013', 'image1.jpg', '/uploads/image1.jpg', '550e8400-e29b-41d4-a716-446655440012');

-- Pengkalan
INSERT INTO pengkalan (id, user_id, name, district, state, location, license_no, license_expiry, main_equipment, additional_equipment) VALUES
('550e8400-e29b-41d4-a716-446655440014', '550e8400-e29b-41d4-a716-446655440004', 'Pengkalan A', 'District A', 'State A', 'Location A', 'LIC001', '2025-01-01', 'Net', 'Boat');

-- VesselInspection
INSERT INTO pemeriksaan_vessels (id, jenis_borang, vessel_no, pangkalan, lpi_form_id, vessel_id, deleted_at) VALUES
(1, 'value1', 'V001', 'Pangkalan A', '550e8400-e29b-41d4-a716-446655440012', '550e8400-e29b-41d4-a716-446655440007', NULL);

-- AlatKeselamatan
INSERT INTO alat_keselamatan (id, nama, ada, keadaan, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440015', 'Life Jacket', 1, 'Good', 1);

-- ButiranEnjin
INSERT INTO butiran_enjin (id, jenama, model, kuasa_kuda, no_enjin, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440016', 'Brand A', 'Model X', 100, 'ENG001', 1);

-- ButiranVesel
INSERT INTO butiran_vessels (id, panjang, lebar, dalam, muatan_grt, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440017', 10.50, 5.20, 3.00, 50.00, 1);

-- EmpunyaVesel
INSERT INTO empunya_vessels (id, nama, ic, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440018', 'Owner Name', '123456789012', 1);

-- InfoVessel
INSERT INTO info_vessels (id, struktur, jenis, jenis_kulit, tarikh_pemeriksaan, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440019', 'Wood', 'Fishing', 'Painted', '2023-05-01', 1);

-- Nakhoda
INSERT INTO nakhoda (id, nama, ic, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440020', 'Captain Name', '123456789013', 1);

-- PenandaanVesel
INSERT INTO penandaan_vessels (id, ditebuk, dicat_terang, di_bumbung, penukul_besi, kod_penukul, tin_plate, no_tin_plate, paku_penanda, rumah_kemudi_dicat, kod_zon, mppl, di_bumbung_rumah, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440021', 1, 1, 0, 1, 'KOD001', 1, 'TP001', 1, 1, 'ZON001', 1, 0, 1);

-- PeralatanMenangkap
INSERT INTO peralatan_menangkap (id, gps, echo_sounder, radar, atur, net_hauler, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440022', 1, 1, 0, 1, 1, 1);

-- PeralatanTambahanTambahan
INSERT INTO peralatan_tambahan_tambahan (id, nama, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440023', 'Extra Equipment', 1);

-- PeralatanTambahanUtama
INSERT INTO peralatan_tambahan_utama (id, nama, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440024', 'Main Equipment', 1);

-- PukatTunda
INSERT INTO pukat_tunda (id, jalur_putih, dicat_terang, pemeriksaan_vessels_id) VALUES
('550e8400-e29b-41d4-a716-446655440025', 1, 1, 1);

-- ProfilePentadbirHartas
INSERT INTO profile_pentadbir_hartas (id, user_id, name, icno, address, phone, email, vessel_owner_id, pemilik_vesel, status_pengguna, hubungan, no_vesel, surat_pelantikan_pentadbir, dokumen_sokongan_1, dokumen_sokongan_2, dokumen_sokongan_3, dokumen_sokongan_4, status, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at, vessel_id) VALUES
('550e8400-e29b-41d4-a716-446655440026', '550e8400-e29b-41d4-a716-446655440004', 'Admin Name', '123456789014', 'Address', '0123456789', 'admin@example.com', NULL, 'Owner', 'Active', 'Self', 'V001', 'doc1.pdf', 'doc2.pdf', 'doc3.pdf', 'doc4.pdf', 'doc5.pdf', 'Approved', '550e8400-e29b-41d4-a716-446655440004', NULL, NULL, NOW(), NOW(), NULL, '550e8400-e29b-41d4-a716-446655440007');

