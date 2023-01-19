import {Component, OnInit, ViewChild} from '@angular/core';



import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {HotelService} from "../hotels/hotel.service";
import {Hotel} from "../shared/hotels.model";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  hotels:Hotel[] = []
  constructor( public  hotelService:HotelService) {
  }
  images = ["../assets/h5.jpg","../assets/h8.jpg","../assets/honey01.jpg"];


  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;



  ngOnInit(): void {
    this.hotelService.getHotels()

  }

}
