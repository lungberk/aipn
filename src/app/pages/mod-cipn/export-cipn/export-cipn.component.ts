import { Component, OnInit } from '@angular/core';
import { CCT_Master_Param } from 'src/app/core/models/param.models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MessageService } from 'src/app/core/services/message.service';
@Component({
  selector: 'app-export-cipn',
  templateUrl: './export-cipn.component.html',
  styleUrls: ['./export-cipn.component.scss']
})
export class ExportCIPNComponent implements OnInit {
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
    if (!this.data.AN) {
        ierror += "กรุณากรอกข้อมูล AN</br>";
    }
    if (!this.data.AuthenCode) {
        ierror += "กรุณากรอกข้อมูล AuthenC Code</br>";
    }
    if (!this.data.AuthenDate) {
        ierror += "กรุณากรอกข้อมูล Authen Date</br>";
    }
    if (!this.data.AuthenTime) {
        ierror += "กรุณากรอกข้อมูล Authen Time</br>";
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
    this.msg.showWarning("อยู่ระหว่างการพัฒนา");
    return;
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
