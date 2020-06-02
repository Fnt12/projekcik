import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { KoszComponent } from './kosz/kosz.component';
import { PromocjeComponent } from './promocje/promocje.component';
import { MakijazComponent } from './makijaz/makijaz.component';
import { ZapachyComponent } from './zapachy/zapachy.component';
import { WlosyComponent } from './wlosy/wlosy.component';
import { CialoComponent } from './cialo/cialo.component';
import { TwarzComponent } from './twarz/twarz.component';
import { HigienaComponent } from './higiena/higiena.component';
import { ZdrowieComponent } from './zdrowie/zdrowie.component';
import { OchronneComponent } from './ochronne/ochronne.component';
import { KoszykComponent } from './kosz/koszyk/koszyk.component';
import { FiltryComponent } from './kosz/filtry/filtry.component';
import { ProduktyComponent } from './kosz/produkty/produkty.component';
import { PrzedmiotComponent } from './przedmiot/przedmiot.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LogowanieComponent,
    KoszComponent,
    PromocjeComponent,
    MakijazComponent,
    ZapachyComponent,
    WlosyComponent,
    CialoComponent,
    TwarzComponent,
    HigienaComponent,
    ZdrowieComponent,
    OchronneComponent,
    KoszykComponent,
    FiltryComponent,
    ProduktyComponent,
    PrzedmiotComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
