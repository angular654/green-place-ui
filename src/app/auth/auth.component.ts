import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

interface UserRegister {
  name: string;
  age: number;
  email: string;
  telephone: number;
  login: string;
  password: string;
}

interface UserLogin {
  login: string;
  password: string;
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public errors:string = ""
  public isAuth = true
  public toRegister = false
  constructor(private auth:AuthService,private fb: FormControl, private cookie:CookieService) { }
  loginForm = new FormGroup({
    login: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(40)]),
    password: new FormControl('',[Validators.required,Validators.minLength(10),
      Validators.maxLength(40)]),
  }) 
  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(40)]),
    login: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(40)]),
    password: new FormControl('',[Validators.required,Validators.minLength(10),
      Validators.maxLength(40)]),
    age: new FormControl([Validators.required,Validators.min(16),
      Validators.max(90)]),
    email: new FormControl('',[Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    telephone: new FormControl('',[Validators.required,
      Validators.pattern(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)])
  })
  
  ngOnInit(): void {
  }
  ngDoCheck() {
    this.checkAuth()
  }
   private async login() {
    console.log(this.loginForm.value)
    await this.auth.login(this.loginForm.value).then((data) =>{
      if(data){
        this.isAuth = false
      }
    }).catch(err => console.log(err))
   }
   private async register() {
    console.log(this.loginForm.value)
    await this.auth.register(this.registerForm.value).then((data) =>{
      if(data){
        this.isAuth = false
      }
    }).catch(err => console.log(err))
  }
   async logout() {
    await this.auth.logout().then((data) =>{
    })
    this.isAuth = true
    console.log(this.isAuth)
  }

  checkAuth():void {
    if(this.cookie.get('token'))
      this.isAuth = true
    else 
      this.isAuth = false
  }
  private toRegisterLogin(){
      if(this.toRegister === false) 
        this.toRegister = true
      else 
        this.toRegister = false
      
  }
}
