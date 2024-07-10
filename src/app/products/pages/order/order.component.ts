import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public sortBy: keyof Hero | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Super Man',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'BatMan',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevill',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero){
    this.sortBy = value;
  }

}
