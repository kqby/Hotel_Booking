import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../../shared/hotels.model.js";
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../../../services/hotel.service";




@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  id: string | null
  hotel:Hotel

  constructor(private activeedRoot:ActivatedRoute,private  hotelService:HotelService) {}


  ngOnInit(): void {

    this.id  = this.activeedRoot.snapshot.paramMap.get('id');
    this.hotelService.getHotel(this.id).subscribe((hotelData) => {
        this.hotel = hotelData.hotels;

      }
    )
  }

}
