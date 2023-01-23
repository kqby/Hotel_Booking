import { Injectable } from '@angular/core';
import {Hotel} from "../shared/hotels.model.js";
import {HttpClient} from "@angular/common/http";
import { Subject} from "rxjs";
import {Reservation} from "../shared/reservation.model";



@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private _geturl = "http://localhost:3000/api/hotels"

  hotelegydarab :Hotel
  hotels : Hotel[] = []
  reservationList : Reservation[] = []
  id:string
  hotelsUpdated = new Subject<Hotel[]>()
  reservationUpdated = new Subject<Reservation[]>()

  constructor(private http:HttpClient,) { }


  getHotels(){
  return   this.http.get<{message:string,hotels:Hotel[] }>(this._geturl)
      .subscribe((hotelData) =>{
      this.hotels =  hotelData.hotels;
      this.hotelsUpdated.next([...this.hotels])

      });}

  getreservationlist(){
    return this.http.get<{message:string,reservations:Reservation[]}>("http://localhost:3000/api/reservation-list")
      .subscribe((reservationData ) => {
        console.log(reservationData)
        this.reservationList = reservationData.reservations;
        this.reservationUpdated.next([...this.reservationList])

      })

  }

  deleteReservation(reservationId: string){
      this.http.delete("http://localhost:3000/api/reservation-list/ " + reservationId)
        .subscribe(() =>{
          const updateReservation = this.reservationList.filter(reservation =>
          reservation.id !== reservationId)
          this.reservationList = updateReservation
          this.reservationUpdated.next([...this.reservationList]);


        })

  }

  reservationPost(id:string,startDate:Date,endDate:Date,email:String) {
    const booking :Reservation = {id: id, startDate: startDate, endDate: endDate,email: email}
    this.http.post<{ message: string,reservationID:string }>
    ('http://localhost:3000/api/reservation', booking)
      .subscribe((responseData) => {
       const id = responseData.reservationID
        booking.id = id

      })
  }

  getHotel(id){
  return this.http.get<{hotels:Hotel}>('http://localhost:3000/api/hotels/'+ id)

  };

  getHotelUpdatedListener(){
    return this.hotelsUpdated.asObservable()
  }
  getReservationUpdatedListener(){
    return this.reservationUpdated.asObservable()
  }




}
