import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false


  constructor(public authService:AuthService) { }



  ngOnInit(): void {
  }

  onLogin(loginform: NgForm) {

    if(loginform.invalid){
      return
    }
    this.authService.login(loginform.value.email,loginform.value.password)



    console.log(loginform.value)



  }
}
