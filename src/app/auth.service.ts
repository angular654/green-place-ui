import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

interface UserRegister {
  name: string;
  age: number;
  email: string;
  telephone: number;
  login: string;
  password: string;
  token: string;
}

interface UserLogin {
  login: string;
  password: string;
}

interface UserLoginResponse {
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _host = "https://eco-portal.herokuapp.com/auth"
  constructor(private http: HttpClient, private cookie: CookieService) { }
  
  public async register(body:any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
      })
    }
    let status = false
    await this.http.post(`${this._host}/register`, body, httpOptions).toPromise().then((res: UserRegister) => {
      if(res) {
        this.cookie.set("login",body.login)
        this.cookie.set("password", body.password);
        this.cookie.set("token", res.token);
        status = true
      }
      }).catch((err) => {
        console.log(err)
      })
      return status
  }

  public async login(body:UserLogin): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Auth': this.cookie.get('token')
      })
    }
    let status = false
    await this.http.post(`${this._host}/login`, body, httpOptions).toPromise().then((res: UserLoginResponse) => {
      if(res){
        this.cookie.set("token", res.token);
        status = true
        this.cookie.set('login',body.login);
        this.cookie.set('password',body.password);
      }
      }).catch((err) => {
        console.log(err)
      })
      return status
  }

  public async logout(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Auth-Token': this.cookie.get('token')
      })
    }
    await this.http.post(`${this._host}/logout`, httpOptions).toPromise().then(() => {
        this.cookie.delete('login');
        this.cookie.delete('password');
        this.cookie.delete('token');
      }).catch((err) => {
        console.log(err)
      })
  }

}
