import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoading = false;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm) {

    if(signupForm.invalid){
      return
    }
    this.isLoading = true
    this.authService.createUser(signupForm.value.email,signupForm.value.password)

    console.log(signupForm.value)


  }
}
