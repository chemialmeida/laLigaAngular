import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';
import { FooterComponent } from './footer/footer.component';

import { DisplayClasificacionService } from './display-clasificacion.service';
import { DisplayGoleadoresService } from './display-goleadores.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule
  ],
  providers: [
    DisplayClasificacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
