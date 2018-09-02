import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  addUser(newUser: User) {
    let url = "http://localhost:3500/api/user"
    return this.httpClient.post(url, newUser);

  }

}
