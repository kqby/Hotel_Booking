import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthData} from "./auth-data.model";
import {Subject} from "rxjs";
import  {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email =''
    private  tokenTimer:any
  isAuthenticated = false
  private token : string | null;

  private AuthStatusListener = new Subject<boolean>()

  constructor(private http:HttpClient ,private router:Router) { }

  getIsAuth(){
    return this.isAuthenticated
  }

  getToken(){
    return this.token
  }
  getEmail(){
    return this.email
    console.log(this.email)
  }

  getAuthStatusListener(){
    return this.AuthStatusListener.asObservable()
  }
  createUser(email:string,password:string){
    const authData:AuthData = {email:email,password:password}
  this.http.post("http://localhost:3000/api/user/signup", authData)
    .subscribe(response => {
      console.log(response)
    })
  }

  login(email: string,password: string){
    const authData:AuthData = {email:email,password:password}
    this.http.post<{token:string,expiresIn:number
    }>("http://localhost:3000/api/user/login",authData)
      .subscribe(response => {

        this.email = email
        const token = response.token;
        this.token  = token;


        if(token){

          const expiresInDuration = response.expiresIn
          this.setAuthTimer(expiresInDuration)

          this.isAuthenticated = true
          this.AuthStatusListener.next(true)

          const now  = new Date();
          const expiration = new Date( now.getTime() + expiresInDuration * 1000 )
          AuthService.saveAuthData(token,expiration)

          this.router.navigate(['/mainpage'])
        }

      })

  }
   autoAuthUser(){

    const authInformation = AuthService.getAuthData()
     if (!authInformation){
       return
     }
     const now = new Date()
     const expiresIn = authInformation.expirationDate.getTime() - now.getTime()
     if(expiresIn > 0){
       this.token = authInformation.token
       this.isAuthenticated = true
       this.setAuthTimer(expiresIn / 1000)
       this.AuthStatusListener.next(true)
     }

   }
   private  setAuthTimer(duration:number){
    console.log("Setting Timer "  + duration)
     this.tokenTimer = setTimeout(
       () => {
         this.logout()
       }, duration * 1000 )

   }

   private static getAuthData(){
    const token = localStorage.getItem("token")
    const expirationDate = localStorage.getItem("expiration")
     if( !token || !expirationDate){
      return;
     }
     return{
       token:token,
       expirationDate: new Date(expirationDate)
     }
   }

  logout(){
    this.token = null
    this.isAuthenticated = false
    this.AuthStatusListener.next(false)
    this.router.navigate(['/mainpage'])
    clearTimeout(this.tokenTimer)
    AuthService.clearAuthData()
  }
  private static saveAuthData(token:string, expirationDate:Date){
    localStorage.setItem('token',token);
    localStorage.setItem('expiration',expirationDate.toISOString() );
  }

  private static clearAuthData(){
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')



  }

}
