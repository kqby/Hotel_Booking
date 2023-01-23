import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelsComponent} from "./hotels/hotels.component";
import {LoginComponent} from "./auth/login/login.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {BookingComponent} from "./hotels/booking/booking.component";
import {ReservationListComponent} from "./reservation-list/reservation-list.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path:'booking',component:HotelsComponent},
  { path:'login',component:LoginComponent},
  { path:'signin',component:SigninComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'hotel/:id',component:BookingComponent},
  {path:'reservation-list',component:ReservationListComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
