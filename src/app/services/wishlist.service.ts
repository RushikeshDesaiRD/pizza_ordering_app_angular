import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  getAll(){
    let url="http://localhost:3000/wishlist";
    return this.http.get(url).pipe(
      map((res:any[])=>{
        let IdsSet=[]
        res.forEach(item=>IdsSet.push(item.id))

        return IdsSet;
      })
    )
  }
  add(id){
     let url="http://localhost:3000/wishlist"
     return this.http.post(url,{id:id})

  }
  remove(id){
    let url="http://localhost:3000/wishlist"
    return this.http.delete(url + '/' + id)
  }
}
