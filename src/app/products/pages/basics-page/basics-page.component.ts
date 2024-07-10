import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLowerCase: string = 'esau';
  public nameUpperCase: string = 'ESAU';
  public nameTitleCase: string = 'EsAu';

  public customDate: Date = new Date();
}
