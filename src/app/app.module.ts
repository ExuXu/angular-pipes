import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuracion del localee de la app
import localeEsMX from '@angular/common/locales/es-MX'

import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsMX);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
