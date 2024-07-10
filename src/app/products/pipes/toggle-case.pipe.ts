import { Pipe, PipeTransform } from '@angular/core';

// esau | toggleCase = 'ESAU'
// ESAU | toggleCase = 'esau'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
    }

}
