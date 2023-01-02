import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BookingComponent } from './booking/booking.component';
import { DateComponent } from './booking/date/date.component';
import { CommentsComponent } from './booking/comments/comments.component';
import { RoomsComponent } from './booking/rooms/rooms.component';
import { PropertiesComponent } from './booking/properties/properties.component';
import { HotelsComponent } from './hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    MainpageComponent,
    LoginComponent,
    SigninComponent,
    BookingComponent,
    DateComponent,
    CommentsComponent,
    RoomsComponent,
    PropertiesComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
