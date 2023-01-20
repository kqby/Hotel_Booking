import { Injectable } from '@angular/core';
import {Hotel} from "../shared/hotels.model.js";
import {HttpClient} from "@angular/common/http";
import { Subject} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private _geturl = "http://localhost:3000/api/hotels"
  hotelegydarab :Hotel
  hotels : Hotel[] = []
  id:string
  hotelsUpdated = new Subject<Hotel[]>()
  constructor(private http:HttpClient,) { }


  getHotels(){
  return   this.http.get<{message:string,hotels:Hotel[] }>(this._geturl)
      .subscribe((hotelData) =>{
      this.hotels =  hotelData.hotels;
      this.hotelsUpdated.next([...this.hotels])
        console.log(this.hotels)
      });}


  getHotel(id){
  return this.http.get<{hotels:Hotel}>('http://localhost:3000/api/hotels/'+ id)

  } ;

  getHotelUpdatedListener(){
    return this.hotelsUpdated.asObservable()
  }




}
