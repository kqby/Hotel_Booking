import { Component, OnInit } from '@angular/core';
import {Hotel} from "../hotels.model.js";
import {ActivatedRoute} from "@angular/router";
import {Hotels} from "../hotels.storage";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  model: any | Hotel
  constructor(private activeedRoot:ActivatedRoute) {

  }

  ngOnInit(): void {
    // @ts-ignore
    const id  = +this.activeedRoot.snapshot.paramMap.get('id');
    if ( id){
      this.model = Hotels.filter(x => x.id  == id )[0];
  }

}}
