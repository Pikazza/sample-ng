import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()
  valueFromDashboard: string;
  @Output()
  valueToDashboard= new EventEmitter();

  constructor() {
}

  ngOnInit() {
     console.log('Data from Parent :  ' + this.valueFromDashboard);
  }

  getUserName(valueFromDashboard){
    alert("user name from dashboard is  "+ this.valueFromDashboard );
  }

  notifyToParent(){
    this.valueToDashboard.emit(" MSG COMIING FROM CHILD");
    console.log( "in child: MSG COMIING FROM CHILD");
  }
}
