import {Component, OnInit, ViewChild} from '@angular/core';



import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() {
  }
  images = ["../assets/h5.jpg","../assets/h8.jpg","../assets/honey01.jpg"];


  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;



  ngOnInit(): void {
  }

}
