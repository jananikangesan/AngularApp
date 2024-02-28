import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../user-list';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit {
  userDetail:Array<User>=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
   this.getData();
  }

  getData() {
    this.userDetail= this.userService.display();
  }
  
}
