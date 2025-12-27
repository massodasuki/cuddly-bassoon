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
    noPendaftaranVesel_diTebuk: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    noPendaftaranVesel_diCat: boolean;
  
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
    rumahKemudi_hurufKodZon: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rumahKemudi_diBumbung: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    pukatTundaBerlesen_jalurPutih: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    pukatTundaBerlesen_diCat: boolean;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    panjangMeter_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_panjangMeter: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    lebarMeter_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_lebarMeter: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kedalamanMeter_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_dalamMeter: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    muatanGRT_dalamLesen: number;
  
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_muatanGRT: number;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    enjinAdaPEV_semasaDiperiksa: boolean;
  
    @IsString()
    enjinNomborPEV_semasaDiperiksa: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    enjinAdaTurbo_semasaDiperiksa?: number;
  
    @IsString()
    enjinJenama_semasaDiperiksa: string;
  
    @IsString()
    enjinModel_semasaDiperiksa: string;

    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    enjinKuasaKuda_semasaDiperiksa: number;

    @IsString()
    enjinNombor_semasaDiperiksa: string;


    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    enjinAdaPEV_tambahan: boolean;
  
    @IsString()
    enjinNomborPEV_tambahan: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    enjinAdaTurbo_tambahan?: number;
  
    @IsString()
    enjinJenama_tambahan: string;
  
    @IsString()
    enjinModel_tambahan: string;

    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    enjinKuasaKuda_tambahan: number;

    @IsString()
    enjinNombor_tambahan: string;
  
    @IsString()
    model_dalamLesen: string;

    @IsString()
    jenama_dalamLesen: string;

    

    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kuasaKuda_dalamLesen: number;
  
    @IsString()
    noEnjin_dalamLesen: string;
  
    
  
    @IsOptional()
    @IsString()
    veselImg_keseluruhan?: string;

    @IsOptional()
    @IsString()
    enjinImg_semasaDiperiksa?: string;

    @IsOptional()
    @IsString()
    enjinNomborImg_semasaDiperiksa?: string;

    @IsOptional()
    @IsString()
    penandaEnjinImg?: string;

    @IsOptional()
    @IsString()
    enjinTurboImg_semasaDiperiksa?: string;

    @IsOptional()
    @IsString()
    generatorImg_semasaDiperiksa?: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    jaketKeselamatan_status: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    jaketKeselamatan_keadaan: boolean;
  
    @IsNumber()
    jaketKeselamatan_kuantiti: number;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    boyaKeselamatan_status: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    boyaKeselamatan_keadaan: boolean;
  
    @IsNumber()
    boyaKeselamatan_kuantiti: number;
  
    @IsString()
    alatPemadamApi_status: string;
  
    @IsString()
    alatPemadamApi_keadaan: string;
  
    @IsNumber()
    alatPemadamApi_kuantiti: number;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    wirelessRadio_status: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    wirelessRadio_keadaan: boolean;
  
    @IsNumber()
    wirelessRadio_kuantiti: number;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rakitKeselamatan_status: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rakitKeselamatan_keadaan: boolean;
  
    @IsNumber()
    rakitKeselamatan_kuantiti: number;

    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    lampuPelayaran_status: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    lampuPelayaran_keadaan: boolean;
  
    @IsNumber()
    lampuPelayaran_kuantiti: number;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    mtu_status: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    mtu_keadaan: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsNumber()
    mtu_kuantiti: number;

    @IsString()
    mtu_serialNo: string;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ais_status: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ais_keadaan: string;
  
    @IsNumber()
    ais_kuantiti: number;

    @IsString()
    ais_serialNo: string;

    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    gps_status : boolean ;

    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    gps_keadaan : boolean;

    @IsNumber()
    gps_kuantiti : number;

    @IsString()
    gps_serialNo : string


  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_echoSounder: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    radar: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    satNavigation: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_sonar: boolean;
  
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
    alatTangkapIkan_netHauler: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_powerBlock: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    netDrum: boolean;
  
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_rsw: boolean;
  
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
    vesel_keadaan: string;
  
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
    pemeriksaan_tarikhMula: string;
  
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
    jenisIkan?: string;

    @IsOptional()
    @IsString()
    kesihatanPemilik?: string;

    @IsOptional()
    @IsString()
    vesel_ketulenan?: string;

    @IsOptional()
    @IsString()
    vesel_jenisKulit?: string;

    @IsOptional()
    @IsString()
    vessel_type?: string;

    @IsOptional()
    @IsString()
    pemeriksaan_tarikhTamat?: string;

    @IsOptional()
    @IsString()
    pemeriksaan_lokasi?: string;

    @IsOptional()
    @IsString()
    inspection_deleted_by?: string;

    // Additional fields for lpi_vessels
    @IsOptional()
    @IsString()
    pakuPenandaLebarKomen?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    rumahKemudi_diCatBetul?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    rumahKemudi_diCatTerang?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    rumahKemudi_adaKodZon?: number;

    @IsOptional()
    @IsString()
    rumahKemudi_komen?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    tandaPenukulBesi_bahagianHaluan?: number;

    @IsOptional()
    @IsString()
    tandaPenukulBesi_hurufKodTanda?: string;

    @IsOptional()
    @IsString()
    tandaPenukulBesi_komen?: string;

    @IsOptional()
    @IsString()
    noPendaftaranVesel_komen?: string;

    @IsOptional()
    @IsString()
    tinplate_path?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    QR_diPasang?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    QR_berfungsi?: number;

    @IsOptional()
    @IsString()
    QRImg?: string;

    @IsOptional()
    @IsString()
    QR_komen?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    pukatTundaBerlesen_jumlahNetDrum?: number;

    @IsOptional()
    @IsString()
    pukatTundaBerlesen_komen?: string;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_muatanGT?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UGV_A_semasaDiperiksa?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UGV_B_semasaDiperiksa?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UGV_C_semasaDiperiksa?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UGV_D_semasaDiperiksa?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UGV_E_semasaDiperiksa?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UGV_F_semasaDiperiksa?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UGV_G_semasaDiperiksa?: number;

    @IsOptional()
    @IsString()
    veselImg_kiri?: string;

    @IsOptional()
    @IsString()
    veselImg_kanan?: string;

    @IsOptional()
    @IsString()
    veselImg_depan?: string;

    @IsOptional()
    @IsString()
    veselImg_hadapan?: string;

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
    enjinImg_tambahan?: string;

    @IsOptional()
    @IsString()
    enjinNomborImg_tambahan?: string;

    @IsOptional()
    @IsString()
    enjinNomborPEVImg_tambahan?: string;

    @IsOptional()
    @IsString()
    enjinTurboImg_tambahan?: string;

    @IsOptional()
    @IsString()
    generatorImg_tambahan?: string;

    @IsOptional()
    @IsString()
    enjinNomborPEVImg_semasaDiperiksa?: string;

    // Additional fields for lpi_safety_equipments
    @IsOptional()
    @IsString()
    jaketKeselamatanImg?: string;

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
    alatTangkapIkan_jumlahPetakIkan?: number;

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
    vesel_statusKulit?: string;

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