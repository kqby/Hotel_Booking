import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BookingComponent } from './hotels/booking/booking.component';
import { DateComponent } from './hotels/booking/date/date.component';
import { CommentsComponent } from './hotels/booking/comments/comments.component';
import { RoomsComponent } from './hotels/booking/rooms/rooms.component';
import { PropertiesComponent } from './hotels/booking/properties/properties.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

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
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
