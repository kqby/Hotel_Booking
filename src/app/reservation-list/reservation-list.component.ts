import {Component, OnInit} from '@angular/core';
import {Reservation} from "../shared/reservation.model";
import {Router} from "@angular/router";
import {HotelService} from "../services/hotel.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent  implements  OnInit{

  private reservationSub:Subscription

  reservation:Reservation[]

  constructor(private  router:Router,public  hotelService:HotelService) { }

  ngOnInit() {

    this.hotelService.getreservationlist()
    this.reservationSub = this.hotelService.getReservationUpdatedListener()
      .subscribe(  (reservation:Reservation[]) =>{
        this.reservation = reservation
        console.log(this.reservation)
      })


  }
  onDelet(reservationId:string){
      this.hotelService.deleteReservation(reservationId)
  }


}
