import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './../classes/Pizza';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas:Pizza[]=[];
  constructor(private http:HttpClient) { }

  getPizzas(cat:string): Observable<Pizza[]>{
    let url="http://localhost:3000/pizzas";
    console.log(cat);
    if(cat == 'All'){
      return this.http.get<Pizza[]>(url);
    }else{
      return this.http.get<Pizza[]>(`http://localhost:3000/pizzas?category=${cat}`);
    }
  }
  getPizzasCat(): Observable<any[]>{
    let url="http://localhost:3000/pizzas";
    return this.http.get(url).pipe(
      map((res:any[])=>{
        let IdsSet:any[]=[]
        res.forEach(item=>IdsSet.push(item.category))

        return IdsSet;
      })
    )
  }
}
