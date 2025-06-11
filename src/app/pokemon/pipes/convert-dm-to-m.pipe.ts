import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDmtoM'
})
export class ConvertDmtoMPipe implements PipeTransform {

  transform(value: number): number {
    return value / 10;
  }


}
