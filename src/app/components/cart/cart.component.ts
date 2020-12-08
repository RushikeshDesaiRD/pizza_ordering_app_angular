import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Pizza } from './../../classes/Pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount=0
  cart=[]
  constructor(private msgService:MessengerService, private cartService:CartService) { }

  ngOnInit(): void {
    this.handleSUbscription()
    this.loadCartPizza()
  }

  handleSUbscription(){
    this.msgService.getMsg().subscribe((pizza:Pizza) => {
     this.loadCartPizza();
 })



  }


  loadCartPizza(){
    this.cartService.getCart().subscribe(pizza=>{

      this.cart=pizza;
      this.calculateCartTotal()
    })
 }

  // addToCart(pizza:Pizza){
  //   let productExists=false;
  //   for(let i in this.cart){
  //         if(this.cart[i].pizzaId === pizza.id){
  //           this.cart[i].qty=this.cart[i].qty + 1;
  //           productExists=true
  //   }}
  //    if(!productExists){
  //     this.cart.push({
  //               pizzaId:pizza.id,
  //               pizzaName:pizza.name,
  //               qty:1,
  //               price:pizza.price,
  //             })
  //    }


  //  this.calculateCartTotal()

  // }

  calculateCartTotal(){
    this.totalAmount=0
    this.cart.forEach(item=>{
      this.totalAmount += (item.qty * item.price);
    })
  }


}
