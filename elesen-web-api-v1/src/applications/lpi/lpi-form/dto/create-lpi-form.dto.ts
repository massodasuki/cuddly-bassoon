import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateLpiFormDto {
    @IsOptional()
    @IsString()
    userId?: string;

    @IsOptional()
    @IsString()
    vesselId?: string;

    @IsOptional()
    @IsString()
    applicationId?: string;

    @IsOptional()
    @IsString()
    createdBy?: string;

    @IsOptional()
    @IsString()
    updatedBy?: string;
  
    @IsOptional()
    @IsString()
    noVesel?: string;

    @IsOptional()
    @IsString()
    vesel_peralatanDijumpai ?: string;
  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    noPendaftaranVesel_diTebuk?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    noPendaftaranVesel_diCat?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    noVesel_diBumbung?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    tandaBahagianLaluan?: boolean;
  
    @IsOptional()
    @IsString()
    hurufKodTanda?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    tinPlate?: boolean;

    @IsOptional()
    @IsString()
    noTinPlate?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    pakuPenandaLebar?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rumahKemudi_ditebuk?: boolean;

    @IsOptional()
    @IsString()
    rumahKemudi_hurufKodZon?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rumahKemudi_diBumbung?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    pukatTundaBerlesen_jalurPutih?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    pukatTundaBerlesen_diCat?: boolean;
  
    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    panjangMeter_dalamLesen?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_panjangMeter?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    lebarMeter_dalamLesen?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_lebarMeter?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kedalamanMeter_dalamLesen?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_dalamMeter?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    muatanGRT_dalamLesen?: number;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    UDV_muatanGRT?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    enjinAdaPEV_semasaDiperiksa?: boolean;

    @IsOptional()
    @IsString()
    enjinNomborPEV_semasaDiperiksa?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    enjinAdaTurbo_semasaDiperiksa?: number;
  
    @IsOptional()
    @IsString()
    enjinJenama_semasaDiperiksa?: string;

    @IsOptional()
    @IsString()
    enjinModel_semasaDiperiksa?: string;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    enjinKuasaKuda_semasaDiperiksa?: number;

    @IsOptional()
    @IsString()
    enjinNombor_semasaDiperiksa?: string;


    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    enjinKuasaKuda_tambahan?: number;

    @IsOptional()
    @IsString()
    model_dalamLesen?: string;

    @IsOptional()
    @IsString()
    jenama_dalamLesen?: string;



    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    kuasaKuda_dalamLesen?: number;

    @IsOptional()
    @IsString()
    noEnjin_dalamLesen?: string;
  
    
  
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
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    jaketKeselamatan_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    jaketKeselamatan_keadaan?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    jaketKeselamatan_kuantiti?: number;
  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    boyaKeselamatan_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    boyaKeselamatan_keadaan?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    boyaKeselamatan_kuantiti?: number;
  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatPemadamApi_status?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatPemadamApi_keadaan?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    alatPemadamApi_kuantiti?: number;
  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    wirelessRadio_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    wirelessRadio_keadaan?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    wirelessRadio_kuantiti?: number;
  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rakitKeselamatan_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    rakitKeselamatan_keadaan?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    rakitKeselamatan_kuantiti?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    lampuPelayaran_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    lampuPelayaran_keadaan?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    lampuPelayaran_kuantiti?: number;
  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    mtu_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    mtu_keadaan?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    mtu_kuantiti?: number;

    @IsOptional()
    @IsString()
    mtu_serialNo?: string;
  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ais_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ais_keadaan?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    ais_kuantiti?: number;

    @IsOptional()
    @IsString()
    ais_serialNo?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    gps_status ?: boolean ;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    gps_keadaan ?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    gps_kuantiti ?: number;

    @IsOptional()
    @IsString()
    gps_serialNo ?: string


  
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_echoSounder?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    radar?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    satNavigation?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_sonar?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    fishFinder?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    radioWireless?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ATUR?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_netHauler?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_powerBlock?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    netDrum?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    alatTangkapIkan_rsw?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    CCTV?: boolean;
  
    @IsOptional()
    @IsString()
    pemeriksaanPeralatan_utama?: string;


    @IsOptional()
    @IsString()
    peralatan_utama?: string;

    @IsOptional()
    @IsString()
    peralatan_tambahan?: string;

    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    sizeMataPukat?: number;

    @IsOptional()
    @IsString()
    pemeriksaanPeralatan_diJumpai?: string;

    @IsOptional()
    @IsString()
    vesel_keadaan?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    veselAsal?: boolean;

    @IsOptional()
    @IsString()
    jenisKulitVesel?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    veselBaru?: boolean;
  
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    latitude?: number;
  
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    longitude?: number;
  
    @IsOptional()
    @IsString()
    pemeriksaan_tarikhMula?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    permohonan_diSokong?: boolean;

    @IsOptional()
    @IsString()
    permohonan_tarikhPemeriksaan?: string;
       
    @IsOptional()
    @IsString()
    pemeriksaanImg_borangKehadiran?: string;

    @IsOptional()
    @IsString()
    pemeriksaanImg_veselKeseluruhan ?: string;
       
    @IsOptional()
    @IsString()
    pemeriksaanImg_PemeriksaDanPemilik?: string;
       
    @IsOptional()
    @IsString()
    jenisPermohonan?: string;

    @IsOptional()
    @IsString()
    perakuanPemilik_tarikhPemeriksaan?: string;
       
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

    // Additional fields for lpi_engine

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
    enjinJenama_tambahan?: string;

    @IsOptional()
    @IsString()
    enjinModel_tambahan?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    enjinAdaTurbo_tambahan?: number;

    @IsOptional()
    @IsString()
    enjinNombor_tambahan?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    enjinAdaPEV_tambahan?: number;

    @IsOptional()
    @IsString()
    enjinNomborPEV_tambahan?: string;

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
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    has_generator?: number;

    @IsOptional()
    @IsString()
    generator_jenama?: string;

    @IsOptional()
    @IsString()
    generator_model?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    generator_adaTurbo?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    generator_kuasaKW?: number;

    @IsOptional()
    @IsString()
    generator_noEnjin?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    generator_adaPEV?: number;

    @IsOptional()
    @IsString()
    generator_noPEV?: string;

    @IsOptional()
    @IsString()
    generatorImg?: string;



    @IsOptional()
    @IsString()
    generator_jenama_tambahan?: string;

    @IsOptional()
    @IsString()
    generator_model_tambahan?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    generator_adaTurbo_tambahan?: number;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    generator_kuasaKW_tambahan?: number;

    @IsOptional()
    @IsString()
    generator_noEnjin_tambahan?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true ? 1 : 0)
    @IsNumber()
    generator_adaPEV_tambahan?: number;

    @IsOptional()
    @IsString()
    generator_noPEV_tambahan?: string;

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
    rakitKeselamatanImg?: string;

    @IsOptional()
    @IsString()
    alatPemadamApiImg?: string;

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
    lampuPelayaranImg?: string;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ems_status?: boolean;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    ems_quantity?: number;

    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    ems_condition?: boolean;

    @IsOptional()
    @IsString()
    emsImg?: string;

    @IsOptional()
    @IsString()
    mtuImg?: string;

    @IsOptional()
    @IsString()
    aisImg?: string;

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
    pemeriksaanPeralatan_kumpulan?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    pemeriksaanPeralatan_kuantiti?: number;

    @IsOptional()
    @IsString()
    pemeriksaanPeralatan_catatan?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    pemeriksaanPeralatan_displayOrder?: number;

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