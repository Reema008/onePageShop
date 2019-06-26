import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { products } from "../item.interface";
import { CartService } from "../shared/cart.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  //let productsList:products[] = [];
  catalog =[];total:number=0;cart:products[]= [];
  constructor(private cartService:CartService){
  }
  ngOnInit(){
    this.catalog= this.cartService.products_list();
  }
  
  
  @Output() data =new EventEmitter();
  @Output() tot =new EventEmitter();


  
  addToCart(cartItem:products){
    this.total=this.cartService.AddCart(cartItem);
   
    this.cart.push(cartItem);
   
     this.data.emit(this.cart);
     
     this.tot.emit(this.total);
  }
 
  

}
