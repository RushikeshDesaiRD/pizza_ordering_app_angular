import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupinService } from './../../services/signupin.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private builder:FormBuilder, private signinup:SignupinService, private router:Router) { }
  registerForm:FormGroup;
  check:boolean =false;
  ngOnInit(): void {
     this.loadForm()
  }
  loadForm(){
    this.registerForm=this.builder.group({
      name: ['', Validators.required],
      username: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]] ,
      password: ['',Validators.required]

    })
  }
  register(){
    this.signinup.registerUser(this.registerForm.value).subscribe(res=>{
        this.check=true;

    })
    this.router.navigateByUrl('signin')

  }

}
