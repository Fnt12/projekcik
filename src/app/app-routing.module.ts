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
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ { path: 'first-component', component: FirstComponent },
{ path: 'second-component', component: SecondComponent },
{ path: 'logowanie-component', component: LogowanieComponent },
{ path: 'kosz-component', component: KoszComponent },
{ path: 'promocje-component', component: PromocjeComponent },
{ path: 'makijaz-component', component: MakijazComponent },
{ path: 'zapachy-component', component: ZapachyComponent },
{ path: 'wlosy-component', component: WlosyComponent },
{ path: 'cialo-component', component: CialoComponent },
{ path: 'twarz-component', component: TwarzComponent },
{ path: 'higiena-component', component: HigienaComponent },
{ path: 'zdrowie-component', component: ZdrowieComponent },
{ path: 'ochronne-component', component: OchronneComponent },
{ path: 'koszyk-component', component: KoszykComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
