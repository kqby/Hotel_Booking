import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoading: false;

  constructor() { }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm) {
    console.log(signupForm.value)

  }
}
