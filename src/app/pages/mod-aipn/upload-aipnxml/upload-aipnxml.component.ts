import { Component, OnInit } from '@angular/core';
import { CCT_Master_Param } from 'src/app/core/models/param.models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MessageService } from 'src/app/core/services/message.service';
import $ from "jquery";
@Component({
  selector: 'app-upload-aipnxml',
  templateUrl: './upload-aipnxml.component.html',
  styleUrls: ['./upload-aipnxml.component.scss']
})
export class UploadAIPNXMLComponent implements OnInit {
  data = new CCT_Master_Param();
  base64Output: any;
  FileName = "";
  filexml: any;
  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private msg: MessageService
  ) { }

  ngOnInit() {
  }

  TestValue() {
    let ierror = "";
    if (!this.base64Output) {
      ierror += "กรุณาใส่ข้อมูล ไฟล์ xml</br>";
    }
    if (ierror !== "") {
      this.msg.showWarning(ierror);
      return false;
    }
    return true;
  }
  clearvalue() {
    this.FileName = "";
    this.base64Output = "";
    $("#filexml").val("");
  }
  export() {
    if (!this.TestValue()) {
      return;
    }
    const param = new CCT_Master_Param();
    param.FileName = this.FileName;
    param.FileDataBase64 = this.base64Output;
    this.api.LoadMasterFile(param).subscribe(rs => {
      this.clearvalue();
      if (rs.ResultStatus) {
        this.msg.showSuccess("บันทึกข้อมูลเรียบร้อย");
      } else if (rs.ErrorMessage) {
        this.msg.showError(rs.ErrorMessage);
      }
    });
  }
  handleUpload(event) {
    // console.log("event", event);
    // console.log("event.target.files", event.target.files);
    
    if(!event.target.files.length) {
      this.FileName = "";
      this.base64Output = "";
      return;
    }
    const file = event.target.files[0];
    console.log("file", file);
    this.FileName = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Output = reader.result;
      console.log(reader.result);
    };
  }
}
