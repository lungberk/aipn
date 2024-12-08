export enum IDTYPE {
    บัตรประชาชน = 0,
    ต่างด้าว = 1,
    ใบอนุญาตฯ = 2,
    Passport = 3,
    อื่นๆ = 9,
}
export enum SEX {
    ชาย = 1,
    หญิง = 2,
}
export enum MARRIAGE {
    "โสด" = 1,
    "สมรส" = 2,
	"หม้าย/หย่า" = 3,
	"อื่นๆ" = 4,
}
export enum NATION {
    จีน = 44,
    อินเดีย = 45,
	เวียดนาม = 46,
	พม่า = 48,
	ลาว = 56,
	กัมพูชา = 57,
	อื่นๆ = 97,
	ไทย = 99,
}
export enum AdmType {
    "accident" = "A",
    "emergency" = "E",
	"elective" = "C",
	"labor_and_delivery" = "L",
	"newborn" = "N",
	"urgent" = "U",
	"all_other" = "O",
}
export enum AdmSource {
    "OPD ใน รพ." = "O",
    "แผนก Emergency" = "E",
	"หน่วยบริการอื่นๆ ใน รพ." = "S",
	"เกิดใน รพ." = "B",
	"ส่งย้ายจาก รพ. อื่น" = "T",
	"Refer จากแพทย์/รพ. อื่น" = "R",
}
export enum DischStat {
    "complete recovery" = 1,
	"improved" = 2,
	"not improved" = 3,
	"normal delivery" = 4,
	"un-delivery" = 5,
	"normal child d/c with mother" = 6,
	"normal child d/c separate" = 7,
	"stillbirth" = 8,
	"dead" = 9,
}
export enum DischType {
    "with approval" = 1,
	"against advice" = 2,
	"escape" = 3,
	"by transfer" = 4,
	"other" = 5,
	"dead autopsy" = 8,
	"dead not autopsy" = 9,
}
export enum Dept {
    "อายุรกรรม" = "01",
	"ศัลยกรรม" = "02",
	"สูติกรรม" = "03",
	"นรีเวชกรรม" = "04",
	"กุมารเวช" = "05",
	"โสตศอนาสิก" = "06",
	"จักษุ" = "07",
	"ศัลยกรรมกระดูก" = "08",
	"จิตเวช" = "09",
	"รังสีวิทยา" = "10",
	"ทันตกรรม" = "11",
	"อื่นๆ" = "12",
}
export enum DxType {
    "principal diag" = 1,
	"comorbidity" = 2,
	"complication" = 3,
	"other Dx" = 4,
	"external cause" = 5,
}
export enum STDCode {
    "MD01CS" = "01",
	"MD02CS" = "02",
	"MD03CS" = "03",
	"MD04CS" = "04",
	"MD05CS" = "05",
	"MD06CS" = "06",
	"MD07CS" = "07",
	"MD08CS" = "08",
	"MD09CS" = "09",
	"MD10CS" = "10",
	"MD11CS" = "11",
	"MD12CS" = "12",
	"MD13CS" = "13",
	"MD14CS" = "14",
	"MD15CS" = "15",
	"MD16CS" = "16",
	"MD17CS" = "17",
	"MD88CS" = "88",
}
export const STDCodeLabel = new Map<string, string>([
    [STDCode.MD01CS, 'ค่าห้องค่าอาหาร'],
    [STDCode.MD02CS, 'อวัยวะเทียมและอุปกรณ์ในการบำบัด'],
    [STDCode.MD03CS, 'ยาสารอาหารทางเส้นเลือดใช้ที่ รพ.'],
    [STDCode.MD04CS, 'ยาสารอาหารทางเส้นเลือดใช้ที่บ้าน'],
    [STDCode.MD05CS, 'เวชภัณฑ์ที่มิใช่ยา'],
    [STDCode.MD06CS, 'บริการโลหิตและส่วนประกอบโลหิต'],
    [STDCode.MD07CS, 'การตรวจทางเทคนิคการแพทย์และพยาธิฯ'],
    [STDCode.MD08CS, 'การวินิจฉัยและรักษาทางรังสีวิทยา'],
    [STDCode.MD09CS, 'การตรวจวินิจฉัยโดยวิธีพิเศษอื่น ๆ'],
    [STDCode.MD10CS, 'อุปกรณ์ของใช้และเครื่องมือทางการแพทย์'],
    [STDCode.MD11CS, 'การทำหัตถการและวิสัญญี'],
    [STDCode.MD12CS, 'บริการทางการพยาบาล'],
    [STDCode.MD13CS, 'บริการทางทันตกรรม'],
    [STDCode.MD14CS, 'บริการกายภาพบำบัดและเวชกรรมฟื้นฟู'],
    [STDCode.MD15CS, 'บริการฝั่งเข็ม/การบำบัดผู้ประกอบโรคศิลปะอื่น ๆ'],
    [STDCode.MD16CS, 'ห้องผ่าตัดและห้องคลอด'],
    [STDCode.MD17CS, 'ค่าธรรมเนียมบุคลากรทางการแพทย์'],
    [STDCode.MD88CS, 'ค่าบริการอื่น ๆ']
]);
export enum DocumentType {
    VisitDate_Doctor = 5,
    Doctor = 10,
    DocumentType = 2,
    OPD_IPD_VisitDate = 3,
    DiseaseCode = 4,
    Out_Investigate = 8,
    Clinic = 11
}
export const DocumentTypeLabel = new Map<number, string>([
    [DocumentType.VisitDate_Doctor, 'วันที่รักษาและแพทย์'],
    [DocumentType.Doctor, 'Doctor'],
    [DocumentType.DocumentType, 'ประเภทเอกสาร'],
    [DocumentType.OPD_IPD_VisitDate, 'OPD/IPDและวันที่รักษา'],
    [DocumentType.DiseaseCode, 'เอกสารตามรหัสโรค'],
    [DocumentType.Out_Investigate, 'Out Investigate'],
    [DocumentType.Clinic, 'Clinic']
]);
import { Injectable } from '@angular/core';
import { EnumInfo } from '../models/result.models';
@Injectable({
    providedIn: 'root'
})
export class DxEnum {
    constructor() { }
    static GetOptions(a) {
        const xx = Object.keys(a).slice(Object.keys(a).length / 2);
        return Object.keys(a).slice(Object.keys(a).length / 2);
    }
    static GetOptions2(a) {
        const listraw = new Array();
        for (const key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                const element = key;
                listraw.push(element);
            }
        }
        return listraw;
    }
    static GetArrayEnums(d) {
        console.log("GetArrayEnums", d);
        const listreturn = new Array<EnumInfo>();
        const listraw = new Array();

        for (const key in d) {
            if (Object.prototype.hasOwnProperty.call(d, key)) {
                console.log("hasOwnProperty key", key);
                console.log("hasOwnProperty d", d);
                console.log("hasOwnProperty d[key]", d[key]);
                const element = d[key];
                listraw.push(element);
            }
        }
        console.log("listraw", listraw);
        const numminr = listraw.length / 2;
        for (let index = 0; index < numminr; index++) {
            const data = new EnumInfo();
            data.Code = listraw[index + numminr];
            data.NameShow = listraw[index];
            listreturn.push(data);
        }
        console.log("listreturn", listreturn);
        return listreturn;
    }
}
