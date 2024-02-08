import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 items:Array<Product>=[];

 constructor(){
  this.items=[new Product("Cone",10,"./assets/img/cone.jpeg",200),
  new Product("Brigham",20,"./assets/img/brighams.png",0),
  new Product("Milkshake",30,"./assets/img/milkshake.jpg",500),
  new Product("Squeeze",40,"./assets/img/squeeze.jpeg",100)];
 }
 
}
