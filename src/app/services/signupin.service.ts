import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupinService {


  constructor(private http: HttpClient) { }

  registerUser(user){
    let url="http://localhost:3000/register";
    console.log(user);
    return this.http.post(url, user)
  }

  loginUser(email, password){
    console.log(email, password);
    return this.http.get(`http://localhost:3000/register?email=${email}&password=${password}`)
  }
}
