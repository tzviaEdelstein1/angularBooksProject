import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import{}from '../../shared/img'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:User;
currentUser:User;
mylocalStorage:any=localStorage;
  constructor(private userService:UserService) {
  
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));

this.user=new User();
this.changeUser();
 this.userService.subject.subscribe({next:()=>this.changeUser()});
  }

  ngOnInit() {
 



this.userService.subject.subscribe({next:()=>this.changeUser()});
  }
changeUser(){
  this.user=new User();

if(localStorage.getItem('currentUser'))
{
this.user=JSON.parse((localStorage.getItem('currentUser')));

}
else{
this.user.userName="guest";
this.user.img='../../shared/img/man (3).png';
}

}
}
