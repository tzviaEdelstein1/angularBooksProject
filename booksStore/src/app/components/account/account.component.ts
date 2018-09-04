import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
currentUser:User
  constructor(private userService:UserService) {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.userService.subject.subscribe({next:()=>this.currentUser=JSON.parse(localStorage.getItem('currentUser'))})
   }
  ngOnInit() {
   
  }

}
