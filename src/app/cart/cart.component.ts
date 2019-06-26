import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CartService } from "../shared/cart.service";
import { products } from "../item.interface";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class CartComponent implements OnInit {
  cart:products[];
  total:number;
  constructor(private cartService:CartService){
    
  }
      ngOnInit(): void {
      
      }

  @Input() public data:object[];
  // @Input() amt;
  @Output() public pri=new EventEmitter();
  //index:number

 
  delByID(item:any,id:number){
    // console.log(this.tot);
    // console.log(item);
    this.total=this.cartService.DeleteCart(item,id);
      
    this.data.splice(id,1);
    // this.tot=this.tot-amt;
    // console.log(this.data);
    this.pri.emit(this.total);
    
    // console.log(this.pri);
  }

}
