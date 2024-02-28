import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../user-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:Array<User>=[];
 
  constructor(){
   this.user=USERS;
 }
 display() {
  return this.user;
}
}
