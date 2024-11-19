import { Injectable } from '@angular/core';
import { ToastrManager } from "ng6-toastr-notifications";
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrManager) { }

  showSuccess(_str) {
    this.toastr.successToastr(_str, "Success!", {
      enableHTML: true
    });
  }

  showError(_str) {
    this.toastr.errorToastr(_str, "เกิดข้อผิดพลาด!", {
      enableHTML: true
    });
  }

  showWarning(_str) {
    this.toastr.warningToastr(_str, "คำเตือน!", {
      enableHTML: true
    });
  }

  showInfo(_str) {
    this.toastr.infoToastr(_str, "Info", {
      enableHTML: true
    });
  }

  showCustom() {
    this.toastr.customToastr(
      "<span style='color: green; font-size: 16px; text-align: center;'>Custom Toast</span>",
      null,
      { enableHTML: true }
    );
  }

  showToast(position: any = "top-left") {
    this.toastr.infoToastr("This is a toast.", "Toast", {
      position: position
    });
  }
  log(header, detail) {
    // console.log(header, JSON.stringify({ param: detail }));
    // console.log(header, detail);
  }

  logResult(header, detail) {
    // console.log(header, detail);
  }
}
