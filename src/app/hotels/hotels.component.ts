import { Component, OnInit } from '@angular/core';
import {HotelObject} from "../shared/data";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor() { }

  hotelObejct = HotelObject;

  ngOnInit(): void {
  }

}
