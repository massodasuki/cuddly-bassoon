-- Seed data for duplicated user and related records
-- New user ID: 3c2d530f-b3b5-4b83-bdd5-732b2a914862

-- ProfileUser
INSERT INTO profile_users (id, user_id, gender_id, religion_id, race_id, marital_status_id, type_id, phone, email) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914863', '3c2d530f-b3b5-4b83-bdd5-732b2a914862', '550e8400-e29b-41d4-a716-446655440001', NULL, NULL, NULL, NULL, '0123456789', 'jane@example.com');

-- User-Role
INSERT INTO user_role (user_id, role_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914862', '550e8400-e29b-41d4-a716-446655440006');

-- Vessels
INSERT INTO vessels (id, entity_id, vessel_no, zone, start_date, end_date, is_active, created_by, created_at, updated_by, updated_at, deleted_by, deleted_at) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914865', '550e8400-e29b-41d4-a716-446655440003', 'V002', 'Zone A', '2023-01-01', NULL, 1, '3c2d530f-b3b5-4b83-bdd5-732b2a914862', NOW(), NULL, NULL, NULL, NULL);

-- Appointment
INSERT INTO appointment (id, tarikh_pemeriksaan, status, penyediaan_laporan, kehadiran, dihadiri, vessel_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914866', '2023-05-01 10:00:00', 'Dijadualkan', 'Dalam Semakan', 'Hadir', 'Pemilik', '3c2d530f-b3b5-4b83-bdd5-732b2a914865');

-- Financial
INSERT INTO financial (id, user_id, bank_name, branch, account_no, bantuan_elaun_sara_hidup, bantuan, kwsp, pencen) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914864', '3c2d530f-b3b5-4b83-bdd5-732b2a914862', 'Bank Sample', 'Branch A', '1234567890', 0, 1, 0, 0);

-- FishingActivity
INSERT INTO fishing_activity (id, user_id, is_main_income, fishing_location, first_registered_year, fishing_days_per_month, fishing_days_per_season, season_length, annual_income_estimate, monthly_income_estimate) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914867', '3c2d530f-b3b5-4b83-bdd5-732b2a914862', 1, 'Location A', 2020, 20, 100, 6, 50000.00, 4166.67);

-- LpiForm
INSERT INTO lpi_forms (id, user, vessel_id, createdAt) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914868', '3c2d530f-b3b5-4b83-bdd5-732b2a914862', '3c2d530f-b3b5-4b83-bdd5-732b2a914865', NOW());

-- LpiFormImage
INSERT INTO lpi_form_images (id, filename, path, lpi_form_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914869', 'image1.jpg', '/uploads/image1.jpg', '3c2d530f-b3b5-4b83-bdd5-732b2a914868');

-- Pengkalan
INSERT INTO pengkalan (id, user_id, name, district, state, location, license_no, license_expiry, main_equipment, additional_equipment) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914870', '3c2d530f-b3b5-4b83-bdd5-732b2a914862', 'Pengkalan A', 'District A', 'State A', 'Location A', 'LIC001', '2025-01-01', 'Net', 'Boat');

-- VesselInspection
INSERT INTO pemeriksaan_vessels (id, jenis_borang, vessel_no, pangkalan, lpi_form_id, vessel_id, deleted_at) VALUES
(2, 'value1', 'V002', 'Pangkalan A', '3c2d530f-b3b5-4b83-bdd5-732b2a914868', '3c2d530f-b3b5-4b83-bdd5-732b2a914865', NULL);

-- AlatKeselamatan
INSERT INTO alat_keselamatan (id, nama, ada, keadaan, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914871', 'Life Jacket', 1, 'Good', 2);

-- ButiranEnjin
INSERT INTO butiran_enjin (id, jenama, model, kuasa_kuda, no_enjin, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914872', 'Brand A', 'Model X', 100, 'ENG001', 2);

-- ButiranVesel
INSERT INTO butiran_vessels (id, panjang, lebar, dalam, muatan_grt, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914873', 10.50, 5.20, 3.00, 50.00, 2);

-- EmpunyaVesel
INSERT INTO empunya_vessels (id, nama, ic, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914874', 'Owner Name', '123456789012', 2);

-- InfoVessel
INSERT INTO info_vessels (id, struktur, jenis, jenis_kulit, tarikh_pemeriksaan, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914875', 'Wood', 'Fishing', 'Painted', '2023-05-01', 2);

-- Nakhoda
INSERT INTO nakhoda (id, nama, ic, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914876', 'Captain Name', '123456789013', 2);

-- PenandaanVesel
INSERT INTO penandaan_vessels (id, ditebuk, dicat_terang, di_bumbung, penukul_besi, kod_penukul, tin_plate, no_tin_plate, paku_penanda, rumah_kemudi_dicat, kod_zon, mppl, di_bumbung_rumah, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914877', 1, 1, 0, 1, 'KOD001', 1, 'TP001', 1, 1, 'ZON001', 1, 0, 2);

-- PeralatanMenangkap
INSERT INTO peralatan_menangkap (id, gps, echo_sounder, radar, atur, net_hauler, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914878', 1, 1, 0, 1, 1, 2);

-- PeralatanTambahanTambahan
INSERT INTO peralatan_tambahan_tambahan (id, nama, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914879', 'Extra Equipment', 2);

-- PeralatanTambahanUtama
INSERT INTO peralatan_tambahan_utama (id, nama, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914880', 'Main Equipment', 2);

-- PukatTunda
INSERT INTO pukat_tunda (id, jalur_putih, dicat_terang, pemeriksaan_vessels_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914881', 1, 1, 2);

-- ProfilePentadbirHartas
INSERT INTO profile_pentadbir_hartas (id, user_id, name, icno, address, phone, email, vessel_owner_id, pemilik_vesel, status_pengguna, hubungan, no_vesel, surat_pelantikan_pentadbir, dokumen_sokongan_1, dokumen_sokongan_2, dokumen_sokongan_3, dokumen_sokongan_4, status, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at, vessel_id) VALUES
('3c2d530f-b3b5-4b83-bdd5-732b2a914882', '3c2d530f-b3b5-4b83-bdd5-732b2a914862', 'Admin Name 2', '123456789015', 'Address', '0123456789', 'admin2@example.com', NULL, 'Owner', 'Active', 'Self', 'V002', 'doc1.pdf', 'doc2.pdf', 'doc3.pdf', 'doc4.pdf', 'doc5.pdf', 'Approved', '3c2d530f-b3b5-4b83-bdd5-732b2a914862', NULL, NULL, NOW(), NOW(), NULL, '3c2d530f-b3b5-4b83-bdd5-732b2a914865');
