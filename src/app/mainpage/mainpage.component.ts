import {Component, OnInit, ViewChild} from '@angular/core';
import {HotelObject} from "../shared/data";


import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() {
  }
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);


  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;



  ngOnInit(): void {
  }

}
