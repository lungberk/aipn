import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent implements OnInit {
  @Output() getValue: EventEmitter<string> = new EventEmitter();
  @Input() setValue = "";
  @Input() placeholder = "hh:mm";
  @Input() disabled = false;
  @Input() curve = true;
  @Input() readonly = false;
  constructor() { }

  ngOnInit() {
    if (this.disabled) {
      this.readonly = this.disabled;
    }
  }

  Change(time) {
    this._setValue(time);
  }
  Clear() {
    this.setValue = "";
    this.getValue.emit("");
  }
  Enter(time) {
    this._setValue(time);
  }

  _setValue(time) {
    if (!time) {
      this.setValue = '';
      return "";
    }
    const time1 = time.split(":", 2);
    const time2 = time.split(".", 2);

    if (time1.length > 1) {
      this._getValue(time1);
    } else if (time2.length > 1) {
      this._getValue(time2);
    } else {
      const c_time = time.substr(0, 4);
      let h = c_time.substr(0, 2);
      let m = c_time.substr(2, 2);
      if (+h > 23) {
        h = "23";
      }
      if (+m > 59) {
        m = "59";
      }
      const stime = new Array();
      stime.push(h);
      stime.push(m);
      this._getValue(stime);
    }
  }

  _getValue(time) {
    if (!time) {
      this.setValue = '';
      return "";
    }
    const h = time[0].substr(0, 2).padStart(2, '0');
    const m = time[1].substr(0, 2).padStart(2, '0');

    if (!this.isNumber(h)) {
      this.setValue = '';
      this.getValue.emit(this.setValue);
    } else {
      this.setValue = h + ':' + m;
      this.getValue.emit(this.setValue);
    }
  }

  isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
}
