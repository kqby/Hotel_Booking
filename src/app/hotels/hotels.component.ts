import {Component, OnInit} from '@angular/core';

import {Hotel} from "../shared/hotels.model.js";
import {Router} from "@angular/router";
import {HotelService} from "./hotel.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  private HotelSub:Subscription
  hotels:Hotel[]
  _id:string

  constructor(private  router:Router,public  hotelService:HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHotels()
    this.HotelSub = this.hotelService.getHotelUpdatedListener()
      .subscribe((hotels: Hotel[] ) =>{
        this.hotels = hotels
      })
  }



  public onClick(hotelid: string):void{
    this._id = hotelid
     this.router.navigate(['hotel/',hotelid])
  }

}
