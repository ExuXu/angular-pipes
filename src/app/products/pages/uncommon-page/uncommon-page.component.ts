import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select

  public name: string = 'Esaú';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Esaú', 'Melissa']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KyValue Pipe
  public person = {
    addres: 'Ags, México',
    age: 26,
    name: 'Esaú',
  }

  // Async pipe

  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap :', value))
    );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  });

}
