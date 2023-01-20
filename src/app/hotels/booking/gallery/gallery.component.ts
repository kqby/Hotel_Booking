import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../../shared/hotels.model.js";

import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../../../services/hotel.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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


  imageObject  = [{


    image: 'assets/hegy01.jpg',
    thumbImage: 'assets/hegy01.jpg',
    title: 'Hummingbirds are amazing creatures'
  }, {

    image: 'assets/h5.jpg',
    thumbImage: 'assets/h5.jpg',
  }, {

    image: 'assets/vszoba1.jpg',
    thumbImage: 'assets/vszoba1.jpg',
    title: 'Example with title.'
  },{

    image: 'assets/honey04.jpg',
    thumbImage: 'assets/honey04.jpg',
    title: 'Hummingbirds are amazing creatures'
  }, {
    image: 'assets/honey02.jpg',
    thumbImage: 'assets/honey02.jpg'
  }, {
    image: 'assets/h10.jpg',
    thumbImage: 'assets/h10.jpg',
  }
   ]
}
