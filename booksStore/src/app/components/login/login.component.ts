import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  newUser: User;
  countries: string[] = [];
  profileForm: FormGroup;
  submitted: boolean = false;
  userFromServer: User;
  constructor(private fb: FormBuilder, private userService: UserService) {
    debugger;
    localStorage.removeItem('currentUser');
    this.userService.subject.next();
  }
  ngOnInit() {

    this.userService.subject.next();
    this.profileForm = this.fb.group({
      userName: ['',],
      password: ['',],
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.profileForm.valid) {

      this.userService.getUser(this.userName.value, this.password.value).subscribe(res => { console.log(res); this.userFromServer = JSON.parse(JSON.stringify(res))
        if(this.userFromServer)
     {
       localStorage.setItem('currentUser', JSON.stringify(this.userFromServer));
    
      this.userService.subject.next();} 
      });
    
    }
  }
  get userName() {
    return this.profileForm.get("userName");
  }
  get password() {
    return this.profileForm.get("password");
  }


}
