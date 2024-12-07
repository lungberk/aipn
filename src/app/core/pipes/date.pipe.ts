import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'datepipe'
})
export class DatePipe implements PipeTransform {
    transform(date: string, format: string): string {
        if (!date) {
            return date;
        }
        let ThaiDay = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
        let shortThaiMonth = [
            'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
            'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
        ];
        let shortEngMonth = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        let longThaiMonth = [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ];
        let Hours = date.split('T')[1].split(":")[0];
        let Minutes = date.split('T')[1].split(":")[1];
        date = date.split(':')[0] + ':' + date.split(':')[1] + ':' + date.split(':')[1];
        let inputDate = new Date(date);
        let dataDate = [
            inputDate.getDay(), inputDate.getDate(), inputDate.getMonth(), inputDate.getFullYear()
        ];
        let outputDateFull = [
            'วัน ' + ThaiDay[dataDate[0]],
            'ที่ ' + dataDate[1],
            'เดือน ' + longThaiMonth[dataDate[2]],
            'พ.ศ. ' + (dataDate[3] + 543)
        ];
        let outputDateShort = [
            dataDate[1],
            shortThaiMonth[dataDate[2]],
            dataDate[3] + 543
        ];
        let outputDateMedium = [
            dataDate[1],
            longThaiMonth[dataDate[2]],
            dataDate[3] + 543
        ];
        let outputDateShort_num = [
            dataDate[1],
            dataDate[2] + 1,
            dataDate[3] + 543
        ];
        let outputDateeng = [
            dataDate[1],
            shortEngMonth[dataDate[2]],
            dataDate[3]
        ];
        let outputMonthyear = [
            longThaiMonth[dataDate[2]],
            dataDate[3] + 543
        ];
        let returnDate: string;
        returnDate = outputDateMedium.join(" ");
        if (format === 'full') {
            returnDate = outputDateFull.join(" ");
        }
        if (format === 'MMM d, yyyy time' || format === 'wiht') {
            returnDate = shortEngMonth[dataDate[2]] + ' ' + dataDate[1] + ', ' + dataDate[3] + ' ' + Hours + ':' + Minutes;
        }
        if (format === 'MMM d, yyyy' || format === 'wih') {
            returnDate = shortEngMonth[dataDate[2]] + ' ' + dataDate[1] + ', ' + dataDate[3]
        }
        if (format === 'medium') {
            returnDate = outputDateMedium.join(" ");
        }
        if (format === 'MMM') {
            returnDate = outputMonthyear.join(" ");
        }
        if (format === 'short') {
            returnDate = outputDateShort.join(" ");
        } if (format === 'short/') {
            returnDate = outputDateShort_num.join("/");
        }
        if (format === 'short_num_time') {
            returnDate = outputDateShort.join(" ") + ' ' + date.split('T')[1].split(':')[0] + ':' + date.split('T')[1].split(':')[1];
        } if (format === 'short_hhmm') {
            returnDate = outputDateShort.join(" ") + ' ' + date.split('T')[1].split(':')[0] + ':' + date.split('T')[1].split(':')[1];
        }
        if (format === 'just_time') {
            returnDate = date.split('T')[1].split(':')[0] + ':' + date.split('T')[1].split(':')[1];
        }
        return returnDate;
    }
}
