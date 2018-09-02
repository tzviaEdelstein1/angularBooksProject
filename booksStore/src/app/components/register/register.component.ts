import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  newUser: User;
  countries: string[] = [];
  profileForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder,private userService:UserService) {
  
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['',],
      lastName: ['', ],
      userName: ['',],
      password: ['',],
    });
  }
  onSubmit() {
    this.submitted=true;
    if (this.profileForm.valid) {

      this.user = JSON.parse(JSON.stringify(this.profileForm.value));
      console.log(this.profileForm.value);
      console.log("user", this.user);
      this.userService.addUser(this.user).subscribe(res=>console.log(res));

   
    }
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }
  get firstName() {
    return this.profileForm.get("firstName");
  }
  get userName() {
    return this.profileForm.get("userName");
  }
  get password() {
    return this.profileForm.get("password");
  }

}
