import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CCT_Master_Param, CCT_MasterXML_BillItems_Param, CCT_MasterXML_ClaimAuth_Param, CCT_MasterXML_Hearder_Param, CCT_MasterXML_Invoice_Param, CCT_MasterXML_IPADT_Param, CCT_MasterXML_IPDp_Param, CCT_MasterXML_IPDx_Param, CCT_MasterXML_Param } from 'src/app/core/models/param.models';
import { InputTimeComponent } from 'src/app/shared/ui/input-time/input-time.component';
import { PickerDateComponent } from 'src/app/shared/ui/picker-date/picker-date.component';
import { DateService } from 'src/app/core/services/date.service';
import { AdmSource, AdmType, Dept, DischStat, DischType, DxEnum, DxType, IDTYPE, MARRIAGE, NATION, SEX, STDCode, STDCodeLabel } from 'src/app/core/enums/enums';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MessageService } from 'src/app/core/services/message.service';
declare const require;
const xml2js = require("xml2js");
@Component({
  selector: 'app-import-aipnxml',
  templateUrl: './import-aipnxml.component.html',
  styleUrls: ['./import-aipnxml.component.scss']
})
export class ImportAIPNXMLComponent implements OnInit {
  DataHearder = new CCT_MasterXML_Hearder_Param();
  DataClaimAuth = new CCT_MasterXML_ClaimAuth_Param();
  DataIPADT = new CCT_MasterXML_IPADT_Param();
  DataIPDx = new CCT_MasterXML_IPDx_Param();
  ListDataIPDx = new Array<CCT_MasterXML_IPDx_Param>();
  DataIPDp = new CCT_MasterXML_IPDp_Param();
  ListDataIPDp = new Array<CCT_MasterXML_IPDp_Param>();

  DataInvoice = new CCT_MasterXML_Invoice_Param();
  DataBill = new CCT_MasterXML_BillItems_Param();
  ListBill = new Array<CCT_MasterXML_BillItems_Param>();
  @ViewChild('DataHearder_EffectiveDateTime', { static: true }) public DataHearder_EffectiveDateTime: PickerDateComponent;
  @ViewChild('DataHearder_EffectiveTime', { static: true }) public DataHearder_EffectiveTime: InputTimeComponent;

  @ViewChild('DataIPADT_BirthDate', { static: true }) public DataIPADT_BirthDate: PickerDateComponent;
  @ViewChild('DataIPADT_AdmitDateTime', { static: true }) public DataIPADT_AdmitDateTime: PickerDateComponent;
  @ViewChild('DataIPADT_AdmitTime', { static: true }) public DataIPADT_AdmitTime: InputTimeComponent;

  @ViewChild('DataIPDx_DiagDate', { static: true }) public DataIPDx_DiagDate: PickerDateComponent;

  @ViewChild('DataIPDp_DateIN', { static: true }) public DataIPDp_DateIN: PickerDateComponent;
  @ViewChild('DataIPDp_DateINTime', { static: true }) public DataIPDp_DateINTime: InputTimeComponent;
  @ViewChild('DataIPDp_DateOut', { static: true }) public DataIPDp_DateOut: PickerDateComponent;
  @ViewChild('DataIPDp_DateOutTime', { static: true }) public DataIPDp_DateOutTime: InputTimeComponent;
  ChAll_Bill = false;

  IDTYPE = IDTYPE;
  IDTYPEOptions = DxEnum.GetOptions(IDTYPE);
  SEX = SEX;
  SEXOptions = DxEnum.GetOptions(SEX);
  MARRIAGE = MARRIAGE;
  MARRIAGEOptions = DxEnum.GetOptions(MARRIAGE);
  NATION = NATION;
  NATIONOptions = DxEnum.GetOptions(NATION);
  AdmType = AdmType;
  AdmTypeOptions = DxEnum.GetOptions2(AdmType);
  AdmSource = AdmSource;
  AdmSourceOptions = DxEnum.GetOptions2(AdmSource);
  DischStat = DischStat;
  DischStatOptions = DxEnum.GetOptions(DischStat);
  DischType = DischType;
  DischTypeOptions = DxEnum.GetOptions(DischType);
  Dept = Dept;
  DeptOptions = DxEnum.GetOptions2(Dept);
  DxType = DxType;
  DxTypeOptions = DxEnum.GetOptions(DxType);
  STDCode = STDCode;
  STDCodeOptions = DxEnum.GetOptions(STDCode);
  STDCodeLabel = STDCodeLabel;
  base64Output: any;
  FileName = "";
  filexml: any;
  @ViewChild("_filexml", { static: true }) public _filexml: ElementRef;
  employees$: Observable<Array<any>>;
  public xmlItems: any;
  constructor(
    private http: HttpClient,
    public date: DateService,
    private api: ApiService,
    private auth: AuthenticationService,
    private msg: MessageService
  ) { }

  ngOnInit() {
    this.SetDefault();
  }
  SetDefault() {
    this.SetDefaultHeader();
    this.SetDefaultIPADT();
    this.SetDefaultIPDx();
    this.SetValueInvoice();
  }
  SetDefaultHeader() {
    this.DataHearder_EffectiveDateTime.SetDate(this.date.getCurrentDateTimeStr());
    this.DataHearder_EffectiveTime._setValue(this.date.getCurrentTimeHHmm());
  }
  SetDefaultIPADT() {
    this.DataIPADT.LeaveDay = "0";
  }
  SetDefaultIPDx() {
    this.DataIPDx.DiagTerm = "N/A";
  }
  SetDefaultIPDp() {
    this.DataIPDp.ProcTerm = "N/A";
  }
  SetValueInvoice() {
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
  Apply_DataIPDx() {
    const d = new CCT_MasterXML_IPDx_Param();
    d.DxType = this.DataIPDx.DxType;
    d.CodeSys = this.DataIPDx.CodeSys;
    d.ICDCode = this.DataIPDx.ICDCode;
    d.DiagTerm = this.DataIPDx.DiagTerm;
    d.DR = this.DataIPDx.DR;
    d.DiagDate = this.DataIPDx.DiagDate;
    if (this.ListDataIPDx.length > 0) {
      d.index = (+this.ListDataIPDx[this.ListDataIPDx.length - 1].index + 1).toString();
    } else {
      d.index = "1";
    }
    this.ListDataIPDx.push(d);
  }
  Delete_DataIPDx(d) {
    let index = this.ListDataIPDx.findIndex(d => d.index === d.index);
    this.ListDataIPDx.splice(index, 1);
    let id = 0;
    this.ListDataIPDx.forEach(i => {
      i.index = (id + 1).toString();
      id++;
    });
  }
  Apply_DataIPDp() {
    const DateIN = this.date.ConvertDateYMD(this.DataIPDp.DateIN);
    const DateINTime = this.DataIPDp.DateINTime + ":00" ? this.DataIPDp.DateINTime : "00:00:00";
    const DateOut = this.date.ConvertDateYMD(this.DataIPDp.DateOut);
    const DateOutTime = this.DataIPDp.DateOutTime + ":00" ? this.DataIPDp.DateOutTime : "00:00:00";

    const d = new CCT_MasterXML_IPDp_Param();
    // d.DxType = this.DataIPDp.DxType;
    d.CodeSys = this.DataIPDp.CodeSys;
    d.ICDCMCode = this.DataIPDp.ICDCMCode;
    d.ProcTerm = this.DataIPDp.ProcTerm;
    d.DR = this.DataIPDp.DR;
    d.DateIN = DateIN + "T" + DateINTime;
    d.DateOut = DateOut + "T" + DateOutTime;
    d.Location = this.DataIPDp.Location;
    if (this.ListDataIPDp.length > 0) {
      d.index = (+this.ListDataIPDp[this.ListDataIPDp.length - 1].index + 1).toString();
    } else {
      d.index = "1";
    }
    this.ListDataIPDp.push(d);
  }
  Delete_DataIPDp(d) {
    let index = this.ListDataIPDp.findIndex(d => d.index === d.index);
    this.ListDataIPDp.splice(index, 1);
    let id = 0;
    this.ListDataIPDp.forEach(i => {
      i.index = (id + 1).toString();
      id++;
    });
  }
  CheckAll_Bill(check) {
    this.ListBill.forEach(i => {
      i.checked = check;
    });
  }
  CheckSet_Bill(check) {
    let all = true;
    this.ListBill.forEach(i => {
      if (!i.checked) {
        all = false;
      }
    });
    this.ChAll_Bill = all;
  }
  GenXML() {
    console.log("DataHearder.EffectiveDateTime", this.DataHearder);
    const param = new CCT_MasterXML_Param();
    const EffectiveDateTime = this.date.ConvertDateYMD(this.DataHearder.EffectiveDateTime);
    const EffectiveTime = this.DataHearder.EffectiveTime + ":00" ? this.DataHearder.EffectiveTime : "00:00:00";
    param.Hearder = this.DataHearder;
    param.Hearder.EffectiveDateTime = EffectiveDateTime + "T" + EffectiveTime;

    param.ClaimAuth = this.DataClaimAuth;

    param.IPADT = this.DataIPADT;
    const AdmitDateTime = this.date.ConvertDateYMD(this.DataIPADT.AdmitDateTime);
    const AdmitTime = this.DataIPADT.AdmitTime + ":00" ? this.DataIPADT.AdmitTime : "00:00:00";
    const DischargeDateTime = this.date.ConvertDateYMD(this.DataIPADT.DischargeDateTime);
    const DischargeTime = this.DataIPADT.DischargeTime + ":00" ? this.DataIPADT.DischargeTime : "00:00:00";
    param.IPADT.AdmitDateTime = AdmitDateTime + "T" + AdmitTime;
    param.IPADT.DischargeDateTime = DischargeDateTime + "T" + DischargeTime;

    param.ListOfIPDx = new Array<CCT_MasterXML_IPDx_Param>();
    this.ListDataIPDx.forEach(i => {
      param.ListOfIPDx.push(i);
    });
    param.ListOfIPDp = new Array<CCT_MasterXML_IPDp_Param>();
    this.ListDataIPDp.forEach(i => {
      param.ListOfIPDp.push(i);
    });
    param.Invoice = this.DataInvoice;
    param.Invoice.ListOfBillItems = new Array<CCT_MasterXML_BillItems_Param>();
    this.ListBill.forEach(i => {
      if (i.checked) {
        const ServiceDate = this.date.ConvertDateYMD(i.ServiceDate);
        const ServiceTime = i.ServiceTime + ":00" ? i.ServiceTime : "00:00:00";
        i.ServiceDateTime = ServiceDate + "T" + ServiceTime;
        param.Invoice.ListOfBillItems.push(i);
      }
    });

    console.log("param", param);
    this.Clear();
  }
  Clear() {
    this.DataHearder = new CCT_MasterXML_Hearder_Param();
    this.DataClaimAuth = new CCT_MasterXML_ClaimAuth_Param();
    this.DataIPADT = new CCT_MasterXML_IPADT_Param();
    this.DataIPDx = new CCT_MasterXML_IPDx_Param();
    this.ListDataIPDx = new Array<CCT_MasterXML_IPDx_Param>();
    this.DataIPDp = new CCT_MasterXML_IPDp_Param();
    this.ListDataIPDp = new Array<CCT_MasterXML_IPDp_Param>();
    this.DataInvoice = new CCT_MasterXML_Invoice_Param();
    this.DataBill = new CCT_MasterXML_BillItems_Param();
    this.ListBill = new Array<CCT_MasterXML_BillItems_Param>();

    this.DataHearder_EffectiveDateTime.Clear();
    this.DataHearder_EffectiveTime.Clear();
    this.DataIPADT_BirthDate.Clear();
    this.DataIPADT_AdmitDateTime.Clear();
    this.DataIPADT_AdmitTime.Clear();
    this.DataIPDx_DiagDate.Clear();
    this.DataIPDp_DateIN.Clear();
    this.DataIPDp_DateINTime.Clear();
    this.DataIPDp_DateOut.Clear();
    this.DataIPDp_DateOutTime.Clear();
    this.SetDefault();
  }
  handleUpload(event) {
    // console.log("event", event);
    // console.log("event.target.files", event.target.files);

    if (!event.target.files.length) {
      this.FileName = "";
      this.base64Output = "";
      return;
    }
    const file = event.target.files[0];

    // console.log("file", file);
    this.FileName = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Output = reader.result;
      this.LoadXMLData(this.base64Output);
    };
  }
  clearvalue() {
    this.FileName = "";
    this.base64Output = "";
    this._filexml.nativeElement.val = "";
  }
  LoadXMLData(base64Output) {
    const param = new CCT_Master_Param();
    param.FileName = this.FileName;
    param.FileDataBase64 = base64Output;
    this.api.LoadMasterXMLFile(param).subscribe(rs => {
      this.clearvalue();
      if (rs.ResultStatus) {
        this.msg.showSuccess("บันทึกข้อมูลเรียบร้อย");
      } else if (rs.ErrorMessage) {
        this.msg.showError(rs.ErrorMessage);
      }
    });
  }
}
