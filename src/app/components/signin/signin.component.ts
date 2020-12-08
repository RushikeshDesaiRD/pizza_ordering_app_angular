import { Component, OnInit } from '@angular/core';
import { SignupinService } from './../../services/signupin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service:SignupinService) { }
  name="";
  password=""
  checkUser:boolean;

  ngOnInit(): void {
  }

  LogIn(){
    console.log(this.name, this.password)
      this.service.loginUser(this.name, this.password).subscribe(res=>{
         console.log(res);
     })

  }

}
