-- DDL for appointments_inspections table
CREATE TABLE `appointments_inspections` (
  `id` char(36) NOT NULL,
  `no_vessel` varchar(255) NOT NULL,
  `kehadiran` enum('Hadir','Tidak hadir','Tangguh pemeriksaan') NOT NULL,
  `dihadiri_oleh` enum('Pemilik','Wakil') DEFAULT NULL,
  `wakil_nama` varchar(255) DEFAULT NULL,
  `wakil_no_ic` varchar(255) DEFAULT NULL,
  `wakil_surat_wakil` text,
  `ulasan` varchar(500) DEFAULT NULL,
  `status` enum('draft','submitted','updated','postponed') DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  `created_by` char(36) DEFAULT NULL,
  `updated_by` char(36) DEFAULT NULL,
  `deleted_by` char(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;