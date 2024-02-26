import { Component } from '@angular/core';
import { User, userList } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title:string;
  // author:string;
  // category:string;
  // postedDate:string;
  // likes:number;

  // constructor(){
  //   this.title='Robotics';
  //   this.author='Zack Whittake';
  //   this.category='Robotics';
  //   this.postedDate='01/10/2019';
  //   this.likes=27;
  // }

  userDetail:Array<User>=[];
  //userDetail: User[] = [];
  constructor(){
    this.userDetail=userList;
  }
}
