import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from './../../../services/cart.service';
import { WishlistService } from './../../../services/wishlist.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() item;
  @Input() favCheck;
  constructor(private msgService:MessengerService, private cart:CartService,private wish:WishlistService) { }

  ngOnInit(): void {

  }
  AddToCart(){
    this.cart.addCart(this.item).subscribe(res=>{
      this.msgService.sendMsg(this.item)
    })
  }
  addToFav(){
     this.wish.add(this.item.id).subscribe(res=>{
      this.favCheck=true;
     })

  }
  removeToFav(){

    this.wish.remove(this.item.id).subscribe(res=>{
      this.favCheck=false;
    })

  }
}
