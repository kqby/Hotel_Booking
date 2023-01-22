import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookingComponent } from './hotels/booking/booking.component';
import { DateComponent } from './hotels/booking/date/date.component';
import { CommentsComponent } from './hotels/booking/comments/comments.component';
import { RoomsComponent } from './hotels/booking/rooms/rooms.component';
import { PropertiesComponent } from './hotels/booking/properties/properties.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { GalleryComponent } from './hotels/booking/gallery/gallery.component';
import {NgImageSliderModule} from "ng-image-slider";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthInterceptor} from "./auth/auth-interceptor";


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
    HotelsComponent,
    GalleryComponent,

  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
