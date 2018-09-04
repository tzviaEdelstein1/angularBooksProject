import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Subject } from '../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 subject=new Subject();
  constructor(private httpClient: HttpClient) { }
  addUser(newUser: User) {
    let url = "http://localhost:3500/api/user"
    return this.httpClient.post(url, newUser);

  }
  getUser(userName:string,password:string){
let user={"userName":userName,"password":password};
return this.httpClient.post("http://localhost:3500/api/login",user);

  }

}
