import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pizza } from './../classes/Pizza';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }
  subject=new Subject();

  sendMsg(pizza:Pizza){

    this.subject.next(pizza)
  }
  getMsg(){
   return this.subject.asObservable();
  }
}
