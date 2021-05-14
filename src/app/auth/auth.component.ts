import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
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
  public isAuth = false
  public toRegister = false
  constructor(private auth:AuthService,private fb: FormControl) { }
  
  loginForm = new FormGroup({
    login: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(40)]),
    password: new FormControl('',[Validators.required,Validators.minLength(10),
      Validators.maxLength(40)]),
  })
  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(40)]),
    username: new FormControl('',[Validators.required,Validators.minLength(3),
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
   private async login() {
    console.log(this.loginForm.value)
    await this.auth.login(this.loginForm.value).then((data) =>{
       console.log(data)
    }).catch(err => console.log(err))
   }
   private async register() {
    console.log(this.loginForm.value)
    await this.auth.register(this.loginForm.value).then((data) =>{
      console.log(data)
    }).catch(err => console.log(err))
  }
  private async logout() {
    await this.auth.logout().then((data) =>{
      console.log(data)
    })
  }
  private toRegisterLogin(){
      if(this.toRegister === false) 
        this.toRegister = true
      else 
        this.toRegister = false
      
  }
}
