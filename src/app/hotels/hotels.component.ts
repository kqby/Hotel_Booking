import { Component, OnInit } from '@angular/core';
import {HotelObject} from "../shared/data";
import {Hotel} from "./hotels.model.js";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private  router:Router) { }
  model:Array<Hotel> | any
  hotelObejct = HotelObject;

  ngOnInit(): void {
    this.model =HotelObject
  }

  public  onClick(hotel:Hotel):void{
    this.router.navigate(['hotel',hotel.id])
  }

}
