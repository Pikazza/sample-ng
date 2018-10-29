import { Component, OnInit, Input } from '@angular/core';

import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  desc:string='Enter the details to login!';
  usernameL:string='Username';
  passwordL:string='Password';

  pass='pikazza123';
  user='pikazza'
  valueToDashboard='';

  constructor() { }

  ngOnInit() {
  }

  clickDetail(user){
    alert("user name is "+ user );
  }

  updateFromChild($event){
    this.valueToDashboard = $event;
    alert("Form Child: "+$event );
  }

}
