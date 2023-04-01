import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vietnameseMonth'
})
export class VietnameseMonthPipe implements PipeTransform {

  transform(dateString: string | null): string {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    const months: string[] = [
      'Tháng Giêng', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu',
      'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'
    ];
    return months[date.getMonth()] + ', ' + date.getFullYear();
  }

}
