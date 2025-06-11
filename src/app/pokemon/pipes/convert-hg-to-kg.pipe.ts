import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertHgtoKg'
})
export class ConvertHgtoKgPipe implements PipeTransform {

  transform(value: number): number {
    return value / 10;
  }

}
