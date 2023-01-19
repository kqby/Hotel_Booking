import {Component,  OnInit} from '@angular/core';
import {Hotel} from "../../shared/hotels.model.js";
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../hotel.service";


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  id: string | null
  hotel:Hotel

  constructor(private activeedRoot:ActivatedRoute,private  hotelService:HotelService) {}


  ngOnInit(): void {

          this.id  = this.activeedRoot.snapshot.paramMap.get('id');
          // @ts-ignore
      this.hotel = this.hotelService.getHotel(this.id).subscribe((hotelData) => {
      this.hotel = hotelData.hotels;
      console.log(this.hotel)

    }
    )
  }}
