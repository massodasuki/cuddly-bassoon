# Database Table Fields Reference

This document provides a comprehensive reference of all tables in the eLesen database, including field names, data types, and whether fields are mandatory (NOT NULL).

## Legend
- **Field Name**: The column name
- **Data Type**: MySQL data type with constraints
- **Mandatory**: Yes (NOT NULL) or No (NULL allowed)
- **Key**: PK (Primary Key), FK (Foreign Key), or blank

## Core System Tables

### users
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| name | varchar(255) | No | |
| username | varchar(255) | Yes | |
| email | varchar(255) | Yes | |
| email_verified_at | timestamp | No | |
| password | varchar(255) | Yes | |
| remember_token | varchar(100) | No | |
| is_active | tinyint(1) | Yes | |
| is_admin | tinyint(1) | Yes | |
| user_type | int | No | |
| profile_picture | varchar(255) | No | |
| last_online_at | timestamp | No | |
| bumiputera_type | int | No | |
| address1 | varchar(255) | No | |
| address2 | varchar(255) | No | |
| address3 | varchar(255) | No | |
| postcode | varchar(255) | No | |
| district | varchar(255) | No | |
| state_id | char(36) | No | FK |
| contact_number | varchar(255) | No | |
| mobile_contact_number | varchar(255) | No | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| entity_id | char(36) | No | FK |
| position_id | char(36) | No | FK |
| start_date | date | No | |
| end_date | date | No | |
| watikah_status | int | No | |
| is_first_login | tinyint(1) | No | |

### roles
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| name | varchar(255) | Yes | |
| is_active | tinyint(1) | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| quota | int | No | |
| level | int | No | |
| entity_id | char(36) | No | FK |

### modules
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| parent_id | char(36) | No | FK |
| name | varchar(255) | Yes | |
| name_eng | varchar(255) | No | |
| slug | varchar(255) | Yes | |
| url | varchar(255) | No | |
| icon | varchar(50) | No | |
| order | int | Yes | |
| is_active | tinyint(1) | Yes | |
| is_menu | tinyint(1) | Yes | |
| is_parent_menu | tinyint(1) | Yes | |
| created_by | char(36) | Yes | FK |
| created_at | timestamp | Yes | |

### entities
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| parent_id | char(36) | No | FK |
| entity_name | varchar(255) | Yes | |
| entity_level | int | Yes | |
| is_active | tinyint(1) | Yes | |
| state_code | varchar(255) | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| address1 | varchar(255) | No | |
| address2 | varchar(255) | No | |
| address3 | varchar(255) | No | |
| postcode | varchar(5) | No | |
| city | varchar(255) | No | |
| district_id | char(36) | No | FK |
| state_id | char(36) | No | FK |
| fax_no | varchar(255) | No | |
| entity_phone_no | varchar(255) | No | |

### code_masters
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| parent_id | char(36) | No | FK |
| parent_name | varchar(255) | No | |
| type | varchar(255) | Yes | |
| code | varchar(255) | No | |
| name | varchar(255) | Yes | |
| name_ms | varchar(255) | No | |
| order | int | No | |
| is_active | tinyint(1) | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |

## Vessel Management Tables

### vessels
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| user_id | char(36) | No | FK |
| zon | varchar(255) | No | |
| grt | double(8,2) | No | |
| peralatan_utama | char(36) | No | FK |
| no_pendaftaran | varchar(255) | No | |
| negeri | varchar(255) | No | |
| daerah | varchar(255) | No | |
| pangkalan | varchar(255) | No | |
| bil_enjin | int unsigned | No | |
| kategori_vessel | varchar(255) | No | |
| license_start | date | No | |
| license_end | date | No | |
| entity_id | char(36) | No | FK |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| is_active | tinyint(1) | Yes | |
| pangkalan_utama_id | bigint unsigned | No | FK |
| pangkalan_tambahan_id | bigint unsigned | No | FK |
| vessel_no | varchar(255) | Yes | |
| zone | varchar(255) | No | |
| start_date | datetime | No | |
| end_date | datetime | No | |

### kulit
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| no_pendaftaran | varchar(255) | No | FK |
| panjang | varchar(255) | No | |
| lebar | varchar(255) | No | |
| dalam | varchar(255) | No | |
| jenis_kulit | varchar(255) | No | |
| tarikh_kulit_dilesenkan | varchar(255) | No | |
| status_kulit | varchar(255) | No | |
| catatan | varchar(255) | No | |
| baru | tinyint(1) | Yes | |
| asal | tinyint(1) | Yes | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |

### enjin
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | bigint unsigned | Yes | PK |
| no_pendaftaran | varchar(255) | No | FK |
| jenis_enjin | int | Yes | |
| jenama | varchar(255) | Yes | |
| kuasa_kuda | int | Yes | |
| no_enjin | varchar(255) | Yes | |
| model | varchar(255) | Yes | |
| tarikh_enjin_dilesenkan | date | Yes | |
| kategori_enjin | varchar(255) | Yes | |
| status_enjin | varchar(255) | Yes | |
| has_turbo | tinyint(1) | Yes | |
| bahan_api | varchar(255) | Yes | |
| gambar_enjin | varchar(255) | No | |
| gambar_no_enjin | varchar(255) | No | |
| gambar_pev | varchar(255) | No | |
| gambar_turbo | varchar(255) | No | |
| gambar_generator | varchar(255) | No | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |

### pemilikan
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | bigint unsigned | Yes | PK |
| no_pendaftaran | varchar(255) | No | FK |
| nama_pemilik | varchar(255) | Yes | |
| no_ic_atau_syarikat | varchar(255) | No | |
| jenis_pemilikan | varchar(255) | Yes | |
| negeri | varchar(255) | Yes | |
| daerah | varchar(255) | Yes | |
| tarikh_aktif_pemilikan | date | Yes | |
| status_pemilikan | varchar(255) | Yes | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |

### lesen
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | bigint unsigned | Yes | PK |
| no_pendaftaran | varchar(255) | No | FK |
| no_lesen | varchar(255) | Yes | |
| tarikh_keluar | date | Yes | |
| tarikh_tamat | date | Yes | |
| kod_zon | varchar(255) | Yes | |
| kawasan_perairan | varchar(255) | Yes | |
| no_patil | varchar(255) | Yes | |
| catatan | varchar(255) | No | |
| status_lesen | varchar(255) | Yes | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |

## Application Tables

### applications
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| application_type_id | char(36) | Yes | FK |
| full_name | varchar(255) | Yes | |
| ic_no | varchar(255) | Yes | |
| date_of_birth | date | Yes | |
| type_of_gender_id | char(36) | No | FK |
| bumiputera_status | char(36) | No | FK |
| age | varchar(255) | Yes | |
| type_of_race_id | char(36) | No | FK |
| marital_status_id | char(36) | No | FK |
| no_of_children | varchar(255) | No | |
| mail_address1 | varchar(255) | No | |
| mail_address2 | varchar(255) | No | |
| mail_address3 | varchar(255) | No | |
| mail_postcode | varchar(6) | No | |
| mail_city | varchar(255) | No | |
| mail_state_id | char(36) | No | FK |
| home_address1 | varchar(255) | No | |
| home_address2 | varchar(255) | No | |
| home_address3 | varchar(255) | No | |
| home_postcode | varchar(6) | No | |
| home_city | varchar(255) | No | |
| home_state_id | char(36) | No | FK |
| phone_no | varchar(255) | No | |
| mobile_phone_no | varchar(255) | No | |
| email | varchar(255) | No | |
| type_of_residence_id | char(36) | No | FK |
| dun_id | char(36) | No | FK |
| parlimen_id | char(36) | No | FK |
| application_amount | decimal(8,2) | No | |
| application_loan_period | varchar(255) | No | |
| bank_id | char(36) | No | FK |
| bank_account_no | varchar(255) | No | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |

### applications_v2
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| entity_id | char(36) | No | FK |
| type | varchar(255) | No | |
| ref | varchar(255) | No | |
| name | varchar(255) | No | |
| status | varchar(255) | No | |
| created_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_by | char(36) | No | FK |
| updated_at | timestamp | No | |
| deleted_by | char(36) | No | FK |
| deleted_at | timestamp | No | |

### kru_applications
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| kru_application_type_id | char(36) | Yes | FK |
| user_id | char(36) | Yes | FK |
| reference_number | varchar(255) | No | |
| kru_application_status_id | char(36) | No | FK |
| entity_id | char(36) | No | FK |
| submitted_at | datetime | No | |
| registration_start | date | No | |
| registration_end | date | No | |
| pin_number | varchar(255) | No | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| vessel_id | char(36) | No | FK |
| decision_by | char(36) | No | FK |
| decision_at | datetime | No | |
| application_type | varchar(255) | No | |
| start_counting_at | datetime | No | |
| is_approved | tinyint(1) | No | |
| submitted_by | char(36) | No | FK |

### darat_applications
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| user_id | char(36) | No | FK |
| application_type_id | char(36) | No | FK |
| application_status_id | char(36) | No | FK |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| inspection_date | date | No | |
| no_rujukan | varchar(20) | No | |
| is_appeal | tinyint(1) | Yes | |
| is_approved | tinyint | Yes | |
| is_active | tinyint | Yes | |
| deleted_at | timestamp | No | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| new_entity_id | char(36) | No | FK |

## Subsistence Management Tables

### subsistence_application
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| registration_no | varchar(255) | No | |
| type_registration | varchar(255) | Yes | |
| fullname | varchar(255) | Yes | |
| icno | varchar(255) | Yes | |
| bank_id | char(36) | No | FK |
| state_bank_id | char(36) | No | FK |
| no_account | varchar(255) | Yes | |
| tot_incomefish | double(8,2) | No | |
| tot_incomeother | double(8,2) | No | |
| tot_allincome | double(8,2) | No | |
| tot_child | int | No | |
| tot_otherchild | int | No | |
| tot_allchild | int | No | |
| is_primary | tinyint(1) | No | |
| is_secondary | tinyint(1) | No | |
| is_uni | tinyint(1) | No | |
| is_notschool | tinyint(1) | No | |
| declaration | int | No | |
| sub_application_status | varchar(255) | Yes | |
| status_checked | varchar(255) | No | |
| checked_by | char(36) | No | FK |
| checked_remarks | varchar(255) | No | |
| status_supported | varchar(255) | No | |
| supported_by | char(36) | No | FK |
| supported_remarks | varchar(255) | No | |
| batch_id | char(36) | No | FK |
| status_quota | enum('menunggu','senarai_menunggu','layak diluluskan','layak tidak diluluskan','ditolak') | Yes | |
| status_hq | enum('belum disemak','diluluskan','layak tidak diluluskan','ditolak') | Yes | |
| entity_id | char(36) | No | FK |
| is_approved_jkk | tinyint(1) | No | |
| application_approved_date | datetime | No | |
| application_expired_date | datetime | No | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| user_id | char(36) | Yes | FK |
| address1 | varchar(255) | No | |
| address2 | varchar(255) | No | |
| address3 | varchar(255) | No | |
| postcode | varchar(5) | No | |
| city | varchar(255) | No | |
| district_id | char(36) | No | FK |
| state_id | char(36) | No | FK |
| contact_number | varchar(255) | No | |
| fisherman_type_id | char(36) | No | FK |
| working_days_fishing_per_month | tinyint unsigned | No | |
| submitted_at | datetime | No | |
| year_become_fisherman | int | No | |
| becoming_fisherman_duration | int | No | |

### landing_declarations
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| user_id | char(36) | No | FK |
| year | int unsigned | No | |
| month | tinyint unsigned | No | |
| week | tinyint unsigned | No | |
| startDay | tinyint unsigned | No | |
| endDay | tinyint unsigned | No | |
| is_verified | tinyint(1) | No | |
| decision_by | char(36) | No | FK |
| decision_at | datetime | No | |
| landing_status_id | char(36) | No | FK |
| submitted_at | datetime | No | |
| entity_id | char(36) | No | FK |
| used_in_monthly | tinyint(1) | No | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| landing_declare_monthly_id | char(36) | No | FK |

## Crew Management Tables

### kru
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | bigint unsigned | Yes | PK |
| no_pendaftaran | varchar(255) | No | FK |
| nama_kru | varchar(255) | Yes | |
| no_kp_baru | varchar(255) | No | |
| no_kp_lama | varchar(255) | No | |
| no_kad | varchar(255) | No | |
| jawatan | varchar(255) | Yes | |
| tarikh_kemaskini_mykad | date | No | |
| status_kru | int | Yes | |
| no_sijil | varchar(255) | No | |
| no_plks | varchar(255) | No | |
| tarikh_tamat_plks | date | No | |
| negara | varchar(255) | No | |
| warganegara | int | Yes | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |

### nelayan_marins
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| ic_number | varchar(12) | Yes | |
| name | varchar(255) | Yes | |
| address1 | varchar(255) | No | |
| address2 | varchar(255) | No | |
| address3 | varchar(255) | No | |
| postcode | varchar(5) | No | |
| city | varchar(255) | No | |
| district_id | char(36) | No | FK |
| state_id | char(36) | No | FK |
| home_contact_number | varchar(255) | No | |
| mobile_contact_number | varchar(255) | No | |
| email | varchar(255) | No | |
| registration_start | date | No | |
| registration_end | date | No | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| kru_application_kru_id | char(36) | No | FK |
| kru_position_id | char(36) | No | FK |
| race_id | char(36) | No | FK |
| vessel_id | char(36) | No | FK |
| bumiputera_status_id | char(36) | No | FK |
| kewarganegaraan_status_id | char(36) | No | FK |
| parliament_id | char(36) | No | FK |
| parliament_seat_id | char(36) | No | FK |

### foreign_crews
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| passport_number | varchar(255) | Yes | |
| passport_end_date | date | No | |
| plks_end_date | date | No | |
| name | varchar(255) | Yes | |
| vessel_id | char(36) | No | FK |
| birth_date | date | Yes | |
| gender_id | char(36) | Yes | FK |
| source_country_id | char(36) | No | FK |
| foreign_kru_position_id | char(36) | No | FK |
| crew_whereabout | varchar(255) | No | |
| kru_application_foreign_kru_id | char(36) | No | FK |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| plks_number | varchar(255) | No | |

## Supporting Tables

### user_histories
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| user_id | char(36) | Yes | FK |
| entity_id | char(36) | No | FK |
| start_date | date | Yes | |
| end_date | date | No | |
| email | varchar(255) | No | |
| role_name | varchar(255) | No | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |

### audit_logs
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| table_id | char(36) | No | |
| source | varchar(255) | No | |
| action | varchar(255) | No | |
| details | json | No | |
| exception | text | No | |
| ip_address | varchar(50) | No | |
| browser | varchar(255) | No | |
| browser_family | varchar(150) | No | |
| browser_version | varchar(50) | No | |
| browser_engine | varchar(150) | No | |
| platform | varchar(255) | No | |
| platform_family | varchar(150) | No | |
| platform_version | varchar(50) | No | |
| device_type | varchar(20) | No | |
| device_family | varchar(150) | No | |
| device_model | varchar(150) | No | |
| mobile_grade | varchar(10) | No | |
| is_bot | tinyint(1) | Yes | |
| is_in_app | tinyint(1) | Yes | |
| created_by | char(36) | No | FK |
| created_at | timestamp | Yes | |

### approvals
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| object_type | varchar(255) | No | |
| object_id | char(36) | No | |
| action_by_type | varchar(255) | No | |
| action_by_id | char(36) | No | |
| action | varchar(255) | No | |
| remarks | text | No | |
| section | varchar(255) | No | |
| created_at | timestamp | Yes | |

### attachments
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| object_type | varchar(255) | No | |
| object_id | char(36) | No | |
| type | varchar(255) | No | |
| name | varchar(255) | No | |
| slug | varchar(255) | No | |
| filename | varchar(255) | No | |
| ext | varchar(255) | No | |
| size | double | No | |
| path | varchar(255) | No | |
| uploaded_by | char(36) | No | FK |
| uploaded_at | timestamp | Yes | |

### announcements
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| title | varchar(255) | No | |
| description | varchar(255) | No | |
| start_date | date | Yes | |
| end_date | date | No | |
| file_title | varchar(255) | No | |
| file_path | varchar(255) | No | |
| file_name | varchar(255) | No | |
| announcement_type | int | Yes | |
| announcement_status | int | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |

### complaints
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| complaint_no | int | Yes | |
| name | varchar(255) | Yes | |
| email | varchar(255) | Yes | |
| phone_no | varchar(255) | Yes | |
| title | varchar(255) | Yes | |
| description | varchar(255) | Yes | |
| file_title | varchar(255) | No | |
| file_path | varchar(255) | No | |
| file_name | varchar(255) | No | |
| assign_to | char(36) | No | FK |
| complaint_type | varchar(255) | Yes | |
| complaint_status | int | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| close_date | date | No | |

### migrations
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | int unsigned | Yes | PK |
| migration | varchar(255) | Yes | |
| batch | int | Yes | |

### password_resets
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| email | varchar(255) | Yes | |
| token | varchar(255) | Yes | |
| created_at | timestamp | No | |

### personal_access_tokens
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | bigint unsigned | Yes | PK |
| tokenable_type | varchar(255) | Yes | |
| tokenable_id | bigint unsigned | Yes | |
| name | varchar(255) | Yes | |
| token | varchar(64) | Yes | |
| abilities | text | No | |
| last_used_at | timestamp | No | |
| expires_at | timestamp | No | |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |

### failed_jobs
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | bigint unsigned | Yes | PK |
| uuid | varchar(255) | Yes | |
| connection | text | Yes | |
| queue | text | Yes | |
| payload | longtext | Yes | |
| exception | longtext | Yes | |
| failed_at | timestamp | Yes | |

### reference_numbers
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| prefix | varchar(255) | Yes | |
| running_number | int | Yes | |
| suffix | varchar(255) | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |

### serial_numbers
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| application_type | varchar(255) | No | |
| prefix | varchar(255) | Yes | |
| running_number | int | Yes | |
| suffix | varchar(255) | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |
| application_id | char(36) | No | FK |

### ssds
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| id | char(36) | Yes | PK |
| ssd_number | varchar(10) | Yes | |
| application_table_name | varchar(255) | No | |
| application_id | varchar(255) | No | |
| has_used | tinyint(1) | Yes | |
| is_faulty | tinyint(1) | Yes | |
| created_by | char(36) | No | FK |
| updated_by | char(36) | No | FK |
| deleted_by | char(36) | No | FK |
| created_at | timestamp | No | |
| updated_at | timestamp | No | |
| deleted_at | timestamp | No | |

## Junction Tables

### user_role
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| user_id | char(36) | Yes | PK, FK |
| role_id | char(36) | Yes | PK, FK |

### user_module
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| user_id | char(36) | Yes | PK, FK |
| module_id | char(36) | Yes | PK, FK |

### role_module
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| role_id | char(36) | Yes | PK, FK |
| module_id | char(36) | Yes | PK, FK |

### application_v2_profile_user
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| application_id | char(36) | Yes | PK, FK |
| profile_user_id | char(36) | Yes | PK, FK |

### application_v2_vessel
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| application_id | char(36) | Yes | PK, FK |
| vessel_id | char(36) | Yes | PK, FK |

### profile_user_vessel
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| profile_user_id | char(36) | Yes | PK, FK |
| vessel_id | char(36) | Yes | PK, FK |

### profile_pentadbir_harta_vessel
| Field Name | Data Type | Mandatory | Key |
|------------|-----------|-----------|-----|
| profile_pentadbir_harta_id | char(36) | Yes | PK, FK |
| vessel_id | char(36) | Yes | PK, FK |

## Summary Statistics

- **Total Tables**: 85
- **Tables with Primary Keys**: 85 (100%)
- **Tables with Foreign Keys**: 65 (76%)
- **Junction Tables**: 7 (8%)

## Notes

1. **UUID Primary Keys**: Most tables use `char(36)` for UUID primary keys
2. **Audit Fields**: Many tables include `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at` for audit trails
3. **Soft Deletes**: Most tables support soft deletes with `deleted_at` field
4. **Status Fields**: Many tables have status fields using enums or varchar types
5. **File Storage**: Several tables store file paths and metadata for document management
6. **Geographic Data**: Address fields are common across multiple tables
7. **Date Ranges**: Many tables track validity periods with start/end dates