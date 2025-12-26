import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateLpiFormDto {
  @IsString()
    userId: string;
  
    @IsString()
    vesselId: string;
  
    @IsString()
    applicationId: string;
  
    @IsString()
    createdBy: string;
  
    @IsString()
    updatedBy: string;
  
    @IsString()
    noVesel: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    noVesel_ditebuk: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    noVesel_dicat: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    noVesel_diBumbung: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    tandaBahagianLaluan: boolean;
  
    @IsString()
    hurufKodTanda: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    tinPlate: boolean;
  
    @IsString()
    noTinPlate: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    pakuPenandaLebar: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rumahKemudi_ditebuk: boolean;
  
    @IsString()
    kodZon: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rumahKemudi_diBumbung: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    jalurPutih: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    pukatTundaBerlesen_dicat: boolean;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    panjangMeter_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    panjangMeter_semasaDiperiksa: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    lebarMeter_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    lebarMeter_semasaDiperiksa: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kedalamanMeter_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kedalamanMeter_semasaDiperiksa: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    muatanGRT_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    muatanGRT_semasaDiperiksa: number;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    isNoPEV: boolean;
  
    @IsString()
    noPEV: string;
  
    @IsString()
    jenama_dalamLesen: string;
  
    @IsString()
    jenama_semasaDiperiksa: string;
  
    @IsString()
    model_dalamLesen: string;
  
    @IsString()
    model_semasaDiperiksa: string;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kuasaKuda_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kuasaKuda_semasaDiperiksa: number;
  
    @IsString()
    noEnjin_dalamLesen: string;
  
    @IsString()
    noEnjin_semasaDiperiksa: string;
  
    @IsOptional()
    @IsString()
    veselKeseluruhanImg?: string;

    @IsOptional()
    @IsString()
    enjinImg?: string;

    @IsOptional()
    @IsString()
    noEnjinImg?: string;

    @IsOptional()
    @IsString()
    penandaEnjinImg?: string;

    @IsOptional()
    @IsString()
    turboImg?: string;

    @IsOptional()
    @IsString()
    generatorImg?: string;
  
    @IsString()
    pelampungKeselamatan_status: string;
  
    @IsString()
    pelampungKeselamatan_keadaan: string;
  
    @IsString()
    pelampungKeselamatan_kuantiti: string;
  
    @IsString()
    boyaKeselamatan_status: string;
  
    @IsString()
    boyaKeselamatan_keadaan: string;
  
    @IsString()
    boyaKeselamatan_kuantiti: string;
  
    @IsString()
    alatPemadamApi_status: string;
  
    @IsString()
    alatPemadamApi_keadaan: string;
  
    @IsString()
    alatPemadamApi_kuantiti: string;
  
    @IsString()
    lampuPelayaran_status: string;
  
    @IsString()
    lampuPelayaran_keadaan: string;
  
    @IsString()
    lampuPelayaran_kuantiti: string;
  
    @IsString()
    rakitKeselamatan_status: string;
  
    @IsString()
    rakitKeselamatan_keadaan: string;
  
    @IsString()
    rakitKeselamatan_kuantiti: string;
  
    @IsString()
    mtu_status: string;
  
    @IsString()
    mtu_keadaan: string;
  
    @IsString()
    mtu_kuantiti: string;
  
    @IsString()
    ais_status: string;
  
    @IsString()
    ais_keadaan: string;
  
    @IsString()
    ais_kuantiti: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    GPS: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    echoSounder: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    radar: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    satNavigation: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    sonar: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    fishFinder: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    radioWireless: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ATUR: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    netHouler: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    powerBlock: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    netDrum: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    RSW: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    CCTV: boolean;
  
    @IsString()
    peralatan_utama: string;
  
    @IsString()
    peralatan_tambahan: string;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    sizeMataPukat: number;
  
    @IsString()
    peralatan_dijumpai: string;
  
    @IsString()
    keadaanVeselSemasa: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    veselAsal: boolean;
  
    @IsString()
    jenisKulitVesel: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    veselBaru: boolean;
  
    @IsOptional()
    @IsNumber()
    latitude?: number;
  
    @IsOptional()
    @IsNumber()
    longitude?: number;
  
    @IsString()
    tarikhPemeriksaan: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    permohonan_diSokong: boolean;
  
    @IsString()
    permohonan_tarikhPemeriksaan: string;
       
    @IsOptional()
    @IsString()
    tandaTanganPembantuImg?: string;
       
    @IsOptional()
    @IsString()
    tandatanganPegawaiImg?: string;
       
    @IsString()
    jenisPermohonan: string;
  
    @IsString()
    perakuanPemilik_tarikhPemeriksaan: string;
       
    @IsOptional()
    @IsString()
    tandaTanganEmpunyaVeselImg?: string;
       
    @IsOptional()
    @IsString()
    veselKiriImg?: string;
       
    @IsOptional()
    @IsString()
    veselKananImg?: string;
       
    @IsOptional()
    @IsString()
    veselHadapanImg?: string;
       
    @IsOptional()
    @IsString()
    veselBelakangImg?: string;
       
    @IsOptional()
    @IsString()
    MTUImg?: string;
       
    @IsOptional()
    @IsString()
    AISImg?: string;

    // Additional fields for lpi_inspections
    @IsOptional()
    @IsString()
    inspection_id?: string;

    @IsOptional()
    @IsString()
    remarks?: string;

    @IsOptional()
    @IsString()
    fishery_type?: string;

    @IsOptional()
    @IsString()
    owner_health?: string;

    @IsOptional()
    @IsString()
    vessel_originality?: string;

    @IsOptional()
    @IsString()
    vessel_type?: string;

    @IsOptional()
    @IsString()
    end_date?: string;

    @IsOptional()
    @IsString()
    inspection_deleted_by?: string;

    // Additional fields for lpi_vessels
    @IsOptional()
    @IsString()
    width_marker_nail_comment?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    pilot_house_paint_bright?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    pilot_house_has_zone_code?: number;

    @IsOptional()
    @IsString()
    pilot_house_comment?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    iron_hammer_marker?: number;

    @IsOptional()
    @IsString()
    iron_hammer_alphabet?: string;

    @IsOptional()
    @IsString()
    iron_hammer_comment?: string;

    @IsOptional()
    @IsString()
    registration_number_comment?: string;

    @IsOptional()
    @IsString()
    tinplate_path?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    has_qr_code?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    qr_code_is_working?: number;

    @IsOptional()
    @IsString()
    qr_picture_path?: string;

    @IsOptional()
    @IsString()
    qr_picture_comment?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    net_drum_quantity?: number;

    @IsOptional()
    @IsString()
    pukat_tunda_comment?: string;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    gt_amount?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    ugv_a?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    ugv_b?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    ugv_c?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    ugv_d?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    ugv_e?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    ugv_f?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    ugv_g?: number;

    @IsOptional()
    @IsString()
    vessel_picture_left_path?: string;

    @IsOptional()
    @IsString()
    vessel_picture_right_path?: string;

    @IsOptional()
    @IsString()
    vessel_picture_front_path?: string;

    @IsOptional()
    @IsString()
    vessel_picture_back_path?: string;

    @IsOptional()
    @IsString()
    vessel_deleted_by?: string;

    // Additional fields for lpi_engines
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    engine_number?: number;

    @IsOptional()
    @IsString()
    engine_brand_field?: string;

    @IsOptional()
    @IsString()
    engine_model_field?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    engine_turbo?: number;

    @IsOptional()
    @IsString()
    engine_serial_no?: string;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    engine_power_kw?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    engine_cylinders?: number;

    @IsOptional()
    @IsString()
    engine_stroke?: string;

    @IsOptional()
    @IsString()
    engine_displacement?: string;

    @IsOptional()
    @IsString()
    fuel_type_code_id?: string;

    @IsOptional()
    @IsString()
    condition_code_id?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    is_main_engine?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    is_functional?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    is_compliant?: number;

    @IsOptional()
    @IsString()
    engine_overall_picture_path?: string;

    @IsOptional()
    @IsString()
    engine_plate_picture_path?: string;

    @IsOptional()
    @IsString()
    engine_remarks?: string;

    @IsOptional()
    @IsString()
    engine_deleted_by?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    engine_has_turbo?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    engine_turbo_hp?: number;

    @IsOptional()
    @IsString()
    engine_brand_additional?: string;

    @IsOptional()
    @IsString()
    engine_model_additional?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    engine_has_turbo_additional?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    turbo_hp_additional?: number;

    @IsOptional()
    @IsString()
    engine_no_additional?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    has_pev_additional?: number;

    @IsOptional()
    @IsString()
    pev_no_additional?: string;

    @IsOptional()
    @IsString()
    engine_picture_path_additional?: string;

    @IsOptional()
    @IsString()
    engine_no_picture_path_additional?: string;

    @IsOptional()
    @IsString()
    pev_no_picture_path_additional?: string;

    @IsOptional()
    @IsString()
    turbo_picture_path_additional?: string;

    @IsOptional()
    @IsString()
    generator_picture_path_additional?: string;

    @IsOptional()
    @IsString()
    pev_no_picture_path?: string;

    // Additional fields for lpi_safety_equipments
    @IsOptional()
    @IsString()
    jacket_picture_path?: string;

    @IsOptional()
    @IsString()
    raft_picture_path?: string;

    @IsOptional()
    @IsString()
    fire_extinguisher_picture_path?: string;

    @IsOptional()
    @IsString()
    safety_deleted_by?: string;

    // Additional fields for lpi_sailing_equipments
    @IsOptional()
    @IsString()
    sailing_deleted_by?: string;

    // Additional fields for lpi_navigations
    @IsOptional()
    @IsString()
    shipping_lights_picture_path?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    ems_status?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    ems_quantity?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    ems_condition?: number;

    @IsOptional()
    @IsString()
    ems_picture_path?: string;

    @IsOptional()
    @IsString()
    mtu_picture_path?: string;

    @IsOptional()
    @IsString()
    ais_picture_path?: string;

    @IsOptional()
    @IsString()
    navigation_deleted_by?: string;

    // Additional fields for lpi_fishing_equipments
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    fish_compartment_quantity?: number;

    @IsOptional()
    @IsString()
    fishing_equip_deleted_by?: string;

    // Additional fields for lpi_fishing_gears
    @IsOptional()
    @IsString()
    fishing_gears_deleted_by?: string;

    // Additional fields for lpi_inland_fishing_equipments
    @IsOptional()
    @IsString()
    extra_equipment_2_cm_id?: string;

    @IsOptional()
    @IsString()
    extra_equipment_3_cm_id?: string;

    @IsOptional()
    @IsString()
    extra_equipment_4_cm_id?: string;

    @IsOptional()
    @IsString()
    extra_equipment_5_cm_id?: string;

    @IsOptional()
    @IsString()
    inland_fishing_deleted_by?: string;

    // Additional fields for lpi_inland_fishing_equipment_items
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    position?: number;

    @IsOptional()
    @IsString()
    inland_item_deleted_by?: string;

    // Additional fields for lpi_inspection_details
    @IsOptional()
    @IsString()
    keadaan_vesel?: string;

    @IsOptional()
    @IsString()
    ketulinan_vesel?: string;

    @IsOptional()
    @IsString()
    jenis_kulit?: string;

    @IsOptional()
    @IsString()
    jenis_vesel?: string;

    @IsOptional()
    @IsString()
    tarikh_pemeriksaan?: string;

    @IsOptional()
    @IsString()
    lokasi?: string;

    @IsOptional()
    @IsString()
    borang_kehadiran?: string;

    @IsOptional()
    @IsString()
    gambar_vesel_semak?: string;

    @IsOptional()
    @IsString()
    gambar_pemeriksa_pemilik?: string;

    @IsOptional()
    @IsString()
    inspection_details_deleted_by?: string;

    // Additional fields for lpi_inspection_items
    @IsOptional()
    @IsString()
    kumpulan_peralatan?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    kuantiti?: number;

    @IsOptional()
    @IsString()
    catatan?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    display_order?: number;

    @IsOptional()
    @IsString()
    inspection_items_deleted_by?: string;

    // Additional fields for lpi_equipment_items
    @IsOptional()
    @IsString()
    group_id?: string;

    @IsOptional()
    @IsString()
    equipment_items_deleted_by?: string;

    // Additional fields for lpi_equipments
    @IsOptional()
    @IsString()
    equipments_deleted_by?: string;
}