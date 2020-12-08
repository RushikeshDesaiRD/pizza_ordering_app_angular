import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  addCart(pizza){
    let url="http://localhost:3000/cart";
    return this.http.post(url, {pizza});
  }
  getCart(): Observable<any[]>{
    let url="http://localhost:3000/cart";
    return this.http.get<any[]>(url).pipe(
      map((result:any[]) =>{
       let cartItems:any[]=[];

       for(let item of result){
        let productExists=false;
            for(let i in cartItems){
              if(cartItems[i].id === item.pizza.id){
                cartItems[i].qty=cartItems[i].qty+1;
                productExists=true;
                break;
             }
            }

            if(!productExists){
              cartItems.push((item.id, item.pizza))
             }


       }

       return cartItems;

      })
    )
  }
}
