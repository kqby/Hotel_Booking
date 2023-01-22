import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Hotel} from "../../../shared/hotels.model.js";
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../../../services/hotel.service";
import {AuthService} from "../../../auth/auth.service";
import {Subscription} from "rxjs";




@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit,OnChanges,OnDestroy {
  id: string | null
  hotel:Hotel

  private authStatusSub: Subscription
   userAuthenticated

  constructor(private activeedRoot:ActivatedRoute,private hotelService:HotelService,public  authService:AuthService) { }

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  days : number | any
  startDate = new Date()
  endDate = new Date()
  minDate= new Date();

  ngOnChanges(){

    this.calculateDays()
  }

  //napok száma
  calculateDays(){
    const startDateModified = new Date(this.startDate)
    const endDateModified = new Date(this.endDate)
    const Time =  endDateModified.getTime() - startDateModified.getTime()
      this.days =  Math.round( Time / (1000*3600*24)) +  1
  }



  ngOnInit(): void {

    this.id  = this.activeedRoot.snapshot.paramMap.get('id');
    this.hotelService.getHotel(this.id).subscribe((hotelData) => {
      this.hotel = hotelData.hotels;

    })
    this.userAuthenticated = this.authService.getIsAuth()
   this.authStatusSub =  this.authService.getAuthStatusListener()
     .subscribe(isAuthenticated => {
      this.userAuthenticated = isAuthenticated
   })
  }

  reservation() {

    console.log(this.hotel._id)
    console.log(this.startDate)
    console.log(this.endDate)

  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe()
  }
}
