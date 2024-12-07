import { Component, OnInit } from '@angular/core';
import { CCT_MasterXML_BillItems_Param, CCT_MasterXML_Hearder_Param } from 'src/app/core/models/param.models';

@Component({
  selector: 'app-import-aipnxml',
  templateUrl: './import-aipnxml.component.html',
  styleUrls: ['./import-aipnxml.component.scss']
})
export class ImportAIPNXMLComponent implements OnInit {
  DataHearder = new CCT_MasterXML_Hearder_Param();
  DataBill = new CCT_MasterXML_BillItems_Param();
  ListBill = new Array<CCT_MasterXML_BillItems_Param>();
  constructor() { }

  ngOnInit() {
    this.SetValueInvoice();
  }
  SetDefaultHeader() {
    
  }
  SetValueInvoice () {
    const d1 = new CCT_MasterXML_BillItems_Param();
    d1.LCCode = "MD01CS";
    d1.LCCodeName = "ค่าห้องค่าอาหาร";
    d1.LCNo = "01";
    this.ListBill.push(d1);
    const d2 = new CCT_MasterXML_BillItems_Param();
    d2.LCCode = "MD02CS";
    d2.LCCodeName = "อวัยวะเทียมและอุปกรณ์ในการบำบัด";
    d2.LCNo = "02";
    this.ListBill.push(d2);
    const d3 = new CCT_MasterXML_BillItems_Param();
    d3.LCCode = "MD03CS";
    d3.LCCodeName = "ยาสารอาหารทางเส้นเลือดใช้ที่ รพ.";
    d3.LCNo = "03";
    this.ListBill.push(d3);
    const d4 = new CCT_MasterXML_BillItems_Param();
    d4.LCCode = "MD04CS";
    d4.LCCodeName = "ยาสารอาหารทางเส้นเลือดใช้ที่บ้าน";
    d4.LCNo = "04";
    this.ListBill.push(d4);
    const d5 = new CCT_MasterXML_BillItems_Param();
    d5.LCCode = "MD05CS";
    d5.LCCodeName = "เวชภัณฑ์ที่มิใช่ยา";
    d5.LCNo = "05";
    this.ListBill.push(d5);
    const d6 = new CCT_MasterXML_BillItems_Param();
    d6.LCCode = "MD06CS";
    d6.LCCodeName = "บริการโลหิตและส่วนประกอบโลหิต";
    d6.LCNo = "06";
    this.ListBill.push(d6);
    const d7 = new CCT_MasterXML_BillItems_Param();
    d7.LCCode = "MD07CS";
    d7.LCCodeName = "การตรวจทางเทคนิคการแพทย์และพยาธิฯ";
    d7.LCNo = "07";
    this.ListBill.push(d7);
    const d8 = new CCT_MasterXML_BillItems_Param();
    d8.LCCode = "MD08CS";
    d8.LCCodeName = "การวินิจฉัยและรักษาทางรังสีวิทยา";
    d8.LCNo = "08";
    this.ListBill.push(d8);
    const d9 = new CCT_MasterXML_BillItems_Param();
    d9.LCCode = "MD09CS";
    d9.LCCodeName = "การตรวจวินิจฉัยโดยวิธีพิเศษอื่น ๆ";
    d9.LCNo = "09";
    this.ListBill.push(d9);
    const d10 = new CCT_MasterXML_BillItems_Param();
    d10.LCCode = "MD10CS";
    d10.LCCodeName = "อุปกรณ์ของใช้และเครื่องมือทางการแพทย์";
    d10.LCNo = "10";
    this.ListBill.push(d10);
    const d11 = new CCT_MasterXML_BillItems_Param();
    d11.LCCode = "MD11CS";
    d11.LCCodeName = "การทำหัตถการและวิสัญญี";
    d11.LCNo = "11";
    this.ListBill.push(d11);
    const d12 = new CCT_MasterXML_BillItems_Param();
    d12.LCCode = "MD12CS";
    d12.LCCodeName = "บริการทางการพยาบาล";
    d12.LCNo = "12";
    this.ListBill.push(d12);
    const d13 = new CCT_MasterXML_BillItems_Param();
    d13.LCCode = "MD13CS";
    d13.LCCodeName = "บริการทางทันตกรรม";
    d13.LCNo = "13";
    this.ListBill.push(d13);
    const d14 = new CCT_MasterXML_BillItems_Param();
    d14.LCCode = "MD14CS";
    d14.LCCodeName = "บริการกายภาพบำบัดและเวชกรรมฟื้นฟู";
    d14.LCNo = "14";
    this.ListBill.push(d14);
    const d15 = new CCT_MasterXML_BillItems_Param();
    d15.LCCode = "MD15CS";
    d15.LCCodeName = "บริการฝั่งเข็ม/การบำบัดผู้ประกอบโรคศิลปะอื่น ๆ";
    d15.LCNo = "15";
    this.ListBill.push(d15);
    const d16 = new CCT_MasterXML_BillItems_Param();
    d16.LCCode = "MD16CS";
    d16.LCCodeName = "ห้องผ่าตัดและห้องคลอด";
    d16.LCNo = "16";
    this.ListBill.push(d16);
    const d17 = new CCT_MasterXML_BillItems_Param();
    d17.LCCode = "MD17CS";
    d17.LCCodeName = "ค่าธรรมเนียมบุคลากรทางการแพทย์";
    d17.LCNo = "17";
    this.ListBill.push(d17);
    const d88 = new CCT_MasterXML_BillItems_Param();
    d88.LCCode = "MD88CS";
    d88.LCCodeName = "ค่าบริการอื่น ๆ";
    d88.LCNo = "88";
    this.ListBill.push(d88);
  }
}
