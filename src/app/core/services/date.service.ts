import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
@Injectable({providedIn: 'root'})
export class DateService {
  constructor(
    private datePipeAg: DatePipe
  ) { }
  getCurrentDate() {
    return new Date();
  }
  getCurrentDateStr() {
    return this.datePipeAg.transform(new Date(), "yyyy-MM-dd");
  }
  getCurrentDateTimeStr() {
    return this.datePipeAg.transform(new Date(), "yyyy-MM-ddTHH:mm:ss");
  }
  getCurrentDateTimeStrFrom() {
    return this.datePipeAg.transform(new Date(), "yyyy-MM-ddT00:00:00");
  }
  getCurrentDateTimeStrTo() {
    return this.datePipeAg.transform(new Date(), "yyyy-MM-ddT23:59:59");
  }
  getCurrentTimeHHmm() {
    return this.datePipeAg.transform(new Date(), "HH:mm");
  }
  getDateTimeTick() {
    const currentDateTime = new Date();
    const ticks = ((currentDateTime.getTime() * 10000) + 621355968000000000);
    return ticks;
  }
  ConvertDateToNums(xDate) {
    try {
      let date;
      if (!xDate) {
        return "";
      } else { date = new Date(xDate); }
      const newDate = date.toLocaleDateString("en-EN");
      const xdate = newDate.split("/");

      return (
        xdate[2] + xdate[0].padStart(2, "0") + xdate[1].padStart(2, "0")
      );
    } catch (e) {
    }
  }
  ConvertDateYMD(xDate) {
    try {
      // console.log("xDate", xDate);
      let date;
      if (!xDate) {
        return "";
      } else { date = new Date(xDate); }
      const newDate = date.toLocaleDateString("en-EN");
      // const newDate = date.toLocaleDateString("th-TH");
      // const newDate = date.toLocaleDateString("en-GB");
      const _NewDate = newDate.split("/");
      // console.log("_NewDate", _NewDate);
      return (
        _NewDate[2] + "-" + _NewDate[0].padStart(2, "0") + "-" + _NewDate[1].padStart(2, "0")

      );

    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
    }
    /// moment(this.date).format('YYYY-MM-DD').toString();
  }
  ConvertDateYMDT(xDate) {
    try {
      // console.log("xDate", xDate);
      let date;
      if (!xDate) {
        return "";
      } else { date = new Date(xDate); }
      const newDate = date.toLocaleDateString("en-EN");
      // const newDate = date.toLocaleDateString("th-TH");
      // const newDate = date.toLocaleDateString("en-GB");
      const xdate = newDate.split("/");

      return (
        xdate[2] + "-" + xdate[0].padStart(2, "0") + "-" + xdate[1].padStart(2, "0") + "T"
        + date.getHours().toString().padStart(2, "0") + ":"
        + date.getMinutes().toString().padStart(2, "0") + ":"
        + date.getSeconds().toString().padStart(2, "0")
      );

    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
    }
    /// moment(this.date).format('YYYY-MM-DD').toString();
  }

  ConvertDateYMDTime(xDate) {
    try {
      // console.log("xDate", xDate);
      let date;
      if (!xDate) {
        return "";
      } else { date = new Date(xDate); }
      const newDate = date.toLocaleDateString("en-EN");
      // const newDate = date.toLocaleDateString("th-TH");
      // const newDate = date.toLocaleDateString("en-GB");
      const xdate = newDate.split("/");

      return (
        xdate[2] + "-" + xdate[0].padStart(2, "0") + "-" + xdate[1].padStart(2, "0") + "T00:00:00"

      );

    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
    }
  }

  ConvertInputDateDDMMYY_HHMM(strDate: string) {
    try {
      let day = "";
      let mon = "";
      let yea = "";
      let hou = "";
      let min = "";

      //310164,310121
      console.log("#pnz", strDate);
      if (strDate.length == 6) {
        day = strDate.substring(0, 2);
        mon = strDate.substring(2, 2);
        yea = strDate.substring(4, 2);


        if (+yea > 40) {
          yea = "25" + yea;
          yea = "" + (+yea - 543);
        }
        else {
          yea = "20" + yea;
        }
        return yea + "-" + mon.padStart(2, "0") + "-" + day.padStart(2, "0") + "T00:00:00"
      }
      else if (strDate.length == 11 && strDate.includes('.')) {
        //120564.1010
        day = strDate.substring(0, 2);
        mon = strDate.substring(2, 2);
        yea = strDate.substring(4, 2);
        //
        hou = strDate.substring(7, 2);
        min = strDate.substring(9, 2);

        if (+yea > 40) {
          yea = "25" + yea;
          yea = "" + (+yea - 543);
        }
        else {
          yea = "20" + yea;
        }
        return yea + "-" + mon.padStart(2, "0") + "-" + day.padStart(2, "0") + "T" + hou + ":" + min + ":00";
      }
      else if (strDate.length == 8) {
        //12052564
        day = strDate.substring(0, 2);
        mon = strDate.substring(2, 2);
        yea = strDate.substring(4, 4);
        //
        hou = "00";//strDate.substring(7,2);
        min = "00";//strDate.substring(9,2);

        if (+yea > 40) {
          yea = "25" + yea;
          yea = "" + (+yea - 543);
        }
        else {
          yea = "20" + yea;
        }
        return yea + "-" + mon.padStart(2, "0") + "-" + day.padStart(2, "0") + "T" + hou + ":" + min + ":00";
      }
      else if (strDate.length == 8) {
        //12052564
        day = strDate.substring(0, 2);
        mon = strDate.substring(2, 2);
        yea = strDate.substring(4, 4);
        //
        hou = "00";//strDate.substring(7,2);
        min = "00";//strDate.substring(9,2);

        if (+yea > 40) {
          yea = "25" + yea;
          yea = "" + (+yea - 543);
        }
        else {
          yea = "20" + yea;
        }
        return yea + "-" + mon.padStart(2, "0") + "-" + day.padStart(2, "0") + "T" + hou + ":" + min + ":00";
      }
      else if (strDate.length == 13) {
        //12052564.2230
        day = strDate.substring(0, 2);
        mon = strDate.substring(2, 2);
        yea = strDate.substring(4, 4);
        //
        hou = strDate.substring(9, 2);
        min = strDate.substring(11, 2);

        if (+yea > 40) {
          yea = "25" + yea;
          yea = "" + (+yea - 543);
        }
        else {
          yea = "20" + yea;
        }
        return yea + "-" + mon.padStart(2, "0") + "-" + day.padStart(2, "0") + "T" + hou + ":" + min + ":00";
      }




    } catch (e) {
      //console.log("#Error ConvertDateYMD ", xDate);
    }

    return "";

  }

  ConvertDateToAmout(xDate) {
    try {
      // console.log("xDate", xDate);
      let date;
      if (!xDate) {
        return "";
      } else { date = new Date(xDate); }
      const newDate = date.toLocaleDateString("en-EN");
      // const newDate = date.toLocaleDateString("th-TH");
      // const newDate = date.toLocaleDateString("en-GB");
      const xdate = newDate.split("/");

      return (
        xdate[2] + xdate[0].padStart(2, "0") + xdate[1].padStart(2, "0") + date.getHours().toString().padStart(2, "0") + date.getMinutes().toString().padStart(2, "0")
      );

    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
    }
    /// moment(this.date).format('YYYY-MM-DD').toString();
  }
  ConvertDateYMDTimeTo(xDate) {
    try {
      // console.log("xDate", xDate);
      let date;
      if (!xDate) {
        return "";
      } else { date = new Date(xDate); }
      const newDate = date.toLocaleDateString("en-EN");
      // const newDate = date.toLocaleDateString("th-TH");
      // const newDate = date.toLocaleDateString("en-GB");
      const xdate = newDate.split("/");

      return (
        xdate[2] + "-" + xdate[0].padStart(2, "0") + "-" + xdate[1].padStart(2, "0") + "T23:59:59"

      );

    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
    }
    /// moment(this.date).format('YYYY-MM-DD').toString();
  }

  ConvertDateToyyyyMMddThh_mm_ss_ms(xDate) {
    try {
      let date;
      if (!xDate) {
        return "";
      } else {
        date = new Date(xDate);
      }
      const newDate = date.toLocaleDateString("en-EN");
      const xdate = newDate.split("/");
      // console.log("xdate", xdate);
      // console.log("getHours()", date.getHours());
      // console.log("getMinutes()", date.getMinutes());
      // console.log("getSeconds()", date.getSeconds());
      // console.log("getMilliseconds()", date.getMilliseconds());
      return (
        xdate[2] + "-" + xdate[0].padStart(2, "0") + "-" + xdate[1].padStart(2, "0") + "T" +
        + date.getHours().toString().padStart(2, "0") + "_"
        + date.getMinutes().toString().padStart(2, "0") + "_"
        + date.getSeconds().toString().padStart(2, "0") + "_"
        + date.getMilliseconds().toString().padStart(3, "0")
      );

    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
    }
    /// moment(this.date).format('YYYY-MM-DD').toString();
  }
  ConvertDateDMY(xDate) {
    // console.log("xDate", xDate);
    if (xDate === null || xDate === "") {
      return "";
    }
    const date = new Date(xDate);
    const newDate = date.toLocaleDateString("en-EN");
    const xdate = newDate.split("/");
    return (
      xdate[0].padStart(2, "0") + "/" + xdate[1].padStart(2, "0") + "/" + xdate[2]
    );

  }
  GetTimeFromDateTime(xDate) {
    try {
      if (!xDate) {
        return "";
      }
      const date = new Date(xDate);
      return date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0");
    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
    }
  }
  AddMinutes(xDate, Minutes: number) {
    try {
      if (!xDate) {
        return "";
      }
      const date = new Date(xDate);
      date.setMinutes(date.getMinutes() + Minutes);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0")
        + "T"
        + date.getHours().toString().padStart(2, "0") + ":"
        + date.getMinutes().toString().padStart(2, "0") + ":00"
      );
    } catch (e) {
      console.log("#Error ConvertDateYMD ", xDate);
      return xDate;
    }
  }
  CheckYearEmpty(xDate) {
    if (xDate === null || xDate === "") {
      return "";
    }
    const date = new Date(xDate);
    const newDate = date.toLocaleDateString("en-EN");
    const xdate = newDate.split("/");

    if (Number(xdate[2]) < 1900) {
      return "";
    } else {
      return xDate;
    }

  }

  parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');
      const year = Number(str[2]);
      const month = Number(str[2]) - 1;
      const date = Number(str[2]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
  ConvertStringToDate(xDate) {
    // console.log("xDate", xDate);
    let date;
    if (xDate === null || xDate === "") {
      return "";
    } else { date = new Date(xDate); }
    return date;
  }
  DateYMDCutminsec(d) {
    try {
      if (d === null || d === "") {
        return d;
      }
      const ar_date = d.split(":");
      return (
        ar_date[0] + ":" + ar_date[1] + ":" + ar_date[2]
      );
    } catch (e) {
      return d;
    }
  }
  ConvertZtoDate(xDate) {
    // console.log("xDate", xDate);
    if (!xDate) {
      return "";
    }
    const ar_date = xDate.split("T");
    const d = this.ConvertYearTh2En(ar_date[0].substring(0, 4)) + "-" + ar_date[0].substring(4, 6) + "-" + ar_date[0].substring(6, 8) + "T" + ar_date[1]
    return d;
  }
  ConvertYearTh2En(y) {
    if (+y > 2500) {
      return (+y - 543).toString()
    } else {
      return y;
    }
  }
  AddYearToDateTime(y, dt) {
    y = +y * 365;
    try {
      let date;
      if (!dt) {
        return "";
      } else {
        date = new Date(dt);
        date.setDate(date.getDate() + y);
      }
      const newDate = date.toLocaleDateString("en-EN");
      const xdate = newDate.split("/");
      return (
        xdate[2] + "-" + xdate[0].padStart(2, "0") + "-" + xdate[1].padStart(2, "0") + "T00:00:00"
      );
    } catch (e) {
      console.log("#Error ConvertDateYMD ", dt);
    }
  }
  RemoveDate30(xDate) {
    console.log("xDate RemoveDate30", xDate);

    if (xDate === null || xDate === '') {
      return "";
    }
    const date = new Date(xDate);
    date.setDate(date.getDate() - 30);

    const newDate = date.toLocaleDateString("en-EN");
    const xdate = newDate.split("/");
    // const xx = newDate.
    //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    // console.log("xdate", xdate);
    return (
      xdate[2] +
      "-" +
      this.padleft0(xdate[0]) +
      "-" +
      this.padleft0(xdate[1])
    );
  }

  RemoveDate7(xDate) {
    // console.log("xDate RemoveDate30", xDate);
    if (xDate === null || xDate === '') {
      // return new Date(1900, 1, 1).toLocaleDateString("en-EN");
      return "";
    }
    const date = new Date(xDate);
    date.setDate(date.getDate() - 7);

    const newDate = date.toLocaleDateString("en-EN");
    const xdate = newDate.split("/");
    // const xx = newDate.
    //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    // console.log("xdate", xdate);
    return (
      xdate[2] +
      "-" +
      this.padleft0(xdate[0]) +
      "-" +
      this.padleft0(xdate[1])
    );
  }
  padleft0(str) {
    if (str.length === 1) {
      str = "0" + str;
    }
    return str;
  }
}
export const MY_FORMATS_MMYYYY = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LLLL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
export const MY_FORMATS_MMMYYYY = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LLLL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
export const MY_FORMATS_DDMMYYYY = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LLLL',
    monthYearA11yLabel: 'DD MMMM YYYY'
  },
};
export const MY_FORMATS_MonDDYYYY = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LLLL',
    monthYearA11yLabel: 'DD MMMM YYYY'
  },
};
