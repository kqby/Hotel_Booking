import {Component, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Hotel} from "../../../shared/hotels.model.js";
import {ActivatedRoute} from "@angular/router";

import {HotelService} from "../../hotel.service";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit,OnChanges {
  model:any|Hotel

  constructor(private activeedRoot:ActivatedRoute,private hotelService:HotelService) { }

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



  calculateDays(){
    const startDateModified = new Date(this.startDate)
    const endDateModified = new Date(this.endDate)

    const Time =  endDateModified.getTime() - startDateModified.getTime()

      this.days =  Math.round( Time / (1000*3600*24)) +  1
  }



  ngOnInit(): void {


  }

}
