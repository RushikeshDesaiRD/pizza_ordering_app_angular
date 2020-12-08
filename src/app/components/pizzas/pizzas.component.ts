import { Component, OnInit } from '@angular/core';
import { PizzaService } from './../../services/pizza.service';
import { Pizza } from './../../classes/Pizza';
import { WishlistService } from './../../services/wishlist.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  //favCheck
  constructor(private pizzas:PizzaService, private wish:WishlistService) { }
  pizzaList:Pizza[]=[]
  wishList:number[]=[]
  ngOnInit(): void {
    this.loadPizzas()
    this.loadWishList()
  }

  loadWishList(){
     this.wish.getAll().subscribe(wish=>{
       this.wishList=wish;

     })
  }
  loadPizzas(){
    this.pizzas.getPizzas("All").subscribe(pizzas=>{
      this.pizzaList=pizzas;
    })
  }

}
