import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private service:CartService) { }
  check:boolean = false;
   items:any[]=[]
  ngOnInit(): void {
    this.service.getCart().subscribe(data => {
      this.items=data
     if(this.items.length === 0){
       this.check = false
     }
     else{
      this.check = true
     }
    })
  }

}
