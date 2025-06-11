import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    const lettersArray = value.split("");
    lettersArray[0] = lettersArray[0].toUpperCase();
    return lettersArray.join("");
  }

}
