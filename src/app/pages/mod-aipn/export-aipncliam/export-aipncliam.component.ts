import { Component, OnInit } from '@angular/core';
import { CCT_Master_Param } from 'src/app/core/models/param.models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MessageService } from 'src/app/core/services/message.service';
@Component({
  selector: 'app-export-aipncliam',
  templateUrl: './export-aipncliam.component.html',
  styleUrls: ['./export-aipncliam.component.scss']
})
export class ExportAIPNCliamComponent implements OnInit {
  data = new CCT_Master_Param();
  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private msg: MessageService
  ) { }

  ngOnInit() {
    this.data.ServiceType = "IP";
    this.data.CareAs = "M";
  }
  
  TestValue() {
    let ierror = "";
    if (!this.data.ServiceType) {
        ierror += "กรุณากรอกข้อมูล Service Type</br>";
    }
    if (!this.data.HMain) {
        ierror += "กรุณากรอกข้อมูล Hospital Main</br>";
    }
    if (!this.data.AdmType) {
        ierror += "กรุณากรอกข้อมูล Admit Type</br>";
    }
    if (!this.data.AdmSource) {
        ierror += "กรุณากรอกข้อมูล Admit Source</br>";
    }
    if (!this.data.CareAs) {
        ierror += "กรุณากรอกข้อมูล Care As</br>";
    }
    if (!this.data.ANSearchKey) {
        ierror += "กรุณากรอกข้อมูล AN</br>";
    }
    if (ierror !== "") {
      this.msg.showWarning(ierror);
      return false;
    }
    return true;
  }
  export() {
    if(!this.TestValue()) {
      return;
    }
    const param = new CCT_Master_Param();
    param.ServiceType = this.data.ServiceType;
    param.CareAs = this.data.CareAs;
    param.HMain = this.data.HMain;
    param.AdmType = this.data.AdmType;
    param.AdmSource = this.data.AdmSource;
    param.ANSearchKey = this.data.ANSearchKey;
    this.api.LoadMaster(param).subscribe(rs=>{
      if(rs.ResultStatus) {
        this.msg.showSuccess("บันทึกข้อมูลเรียบร้อย");
      } else if(rs.ErrorMessage) {
        this.msg.showError(rs.ErrorMessage);
      }
    });
  }
}
