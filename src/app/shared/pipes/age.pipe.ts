import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
  transform(date: Date): number {
    const today = new Date();
    const birthDate = new Date(date);
    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
}
