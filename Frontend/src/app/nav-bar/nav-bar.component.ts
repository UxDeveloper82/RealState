import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string;
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  // tslint:disable-next-line: typedef
  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success('You are logged out!');
  }

}
