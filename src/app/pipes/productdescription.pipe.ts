import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productdescription',
  standalone: true
})
export class ProductdescriptionPipe implements PipeTransform {

  transform(value: string, showFull: boolean = false): string {
    if (!value) return '';
    
    if (showFull) return value;

    const words = value.split(' ');
    const firstThreeUpper = words.slice(0, 3).map(word => word.toUpperCase()).join(' ');
    
    return words.length > 3 ? `${firstThreeUpper}...` : firstThreeUpper;
  }

}
