import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelsComponent} from "./hotels/hotels.component";
import {LoginComponent} from "./login/login.component";
import {SigninComponent} from "./signin/signin.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {BookingComponent} from "./hotels/booking/booking.component";

const routes: Routes = [
  { path:'booking',component:HotelsComponent},
  { path:'login',component:LoginComponent},
  { path:'signin',component:SigninComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'hotel/:id',component:BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
