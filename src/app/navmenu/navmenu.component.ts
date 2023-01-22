import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit,OnDestroy {

  userIsAthenticated = false
  private authListenerSubs: Subscription

  constructor(private  authService:AuthService) { }

  ngOnInit(): void {
      this.userIsAthenticated = this.authService.getIsAuth()
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(
      isAuthenticated => {
    this.userIsAthenticated = isAuthenticated
      }
    )

  }
  ngOnDestroy() {

    this.authListenerSubs.unsubscribe()
  }

  onLogout(){
    this.authService.logout()
  }

}
