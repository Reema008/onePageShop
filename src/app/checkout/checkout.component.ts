import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { CartService } from "../shared/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent{
  @Input() final; 

}


// export class CheckoutComponent implements OnInit{
//   @Input() final; 
//   constructor(private cartService:CartService){
//   }
//   ngOnInit(){
//     this.final= this.cartService.total_amount;
//   }

// }
