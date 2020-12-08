import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PizzaService } from './../../services/pizza.service';

@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css']
})
export class FillterComponent implements OnInit {

  constructor(private pizza:PizzaService) { }

  //@Output() cat=new EventEmitter<string>();
  ngOnInit(): void {

  }
  onChane(value){
    this.pizza.getPizzas(value.value).subscribe(res=>{

    })
  }

}
