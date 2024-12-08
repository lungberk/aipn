import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { DateService } from 'src/app/core/services/date.service';
import { DatePipe } from 'src/app/core/pipes/date.pipe';
export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY"
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LLL',
    monthYearA11Label: 'DD MMM YYYY'
  }
}
@Component({
  selector: 'app-picker-date',
  templateUrl: './picker-date.component.html',
  styleUrls: ['./picker-date.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class PickerDateComponent implements OnInit {
  datePipe = new DatePipe();
  @Output() getValue: EventEmitter<any> = new EventEmitter();
  @Output() getValueChange: EventEmitter<string> = new EventEmitter();
  @Input() label = "";
  datevalue: any;
  dateshow: any;
  constructor(
    public date: DateService
  ) { }

  ngOnInit() {
    // this.datevalue = new Date();
  }
  dateChange(v) {
    this.datevalue = this.date.ConvertDateYMDTime(v.value);
    this.dateshow = this.datePipe.transform(this.datevalue, 'short/');
    this.getValue.emit(this.datevalue);
  }
  SetDate(date) {
    this.dateshow = this.datePipe.transform(date, 'short/');
    this.datevalue = this.date.ConvertDateYMDTime(date);
    this.getValue.emit(this.datevalue);
  }
  Change(e) {
    console.log("Change", e);
    try {
      if (!e) {
        this.getValueChange.emit("");
        this.getValue.emit("");
        this.datevalue = "";
        this.dateshow = "";
        return;
      }
      const numdate = +e;
      if (numdate < 1500) {
        const date = new Date();
        const datenow = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        datenow.setDate(datenow.getDate() + numdate);
        this.datevalue = this.date.ConvertDateYMDTime(datenow);
        this.dateshow = this.datePipe.transform(this.datevalue, 'short/');
        this.getValue.emit(this.datevalue);
        this.getValueChange.emit(this.datevalue);
      } else {
        const c_date = e.split("/", 3);
        let d = 0;
        let m = 0;
        let y = 0;

        if (c_date.length === 3) {
          d = +c_date[0];
          m = +c_date[1];
          y = +c_date[2];
        } else {
          e = e.padStart(6, '0');
          d = +e.substr(0, 2);
          m = +e.substr(2, 2);
          y = +e.substr(4);
        }
        if (y.toString().length < 4) {
          y += 2000;
        }
        const datenow = new Date(y, m - 1, d);
        this.datevalue = this.date.ConvertDateYMDTime(datenow);
        this.dateshow = this.datePipe.transform(this.datevalue, 'short/');
        this.getValue.emit(this.datevalue);
        this.getValueChange.emit(this.datevalue);
      }
    } catch (e) {
      this.getValueChange.emit("");
      this.Clear();
    }
  }
  Clear() {
    this.datevalue = "";
    this.dateshow = "";
    this.getValue.emit("");
  }
}
