import { Component } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  edge:any;
  size:any;


 myFunction(data: any) {
  //alert(data.edge + "\n" + data.size );
  this.edge=data.edge;
  this.size=data.size;
   //alert(this.edge + "\n" + this.size );
 }

}
