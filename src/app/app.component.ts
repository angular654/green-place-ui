import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecofinder';
  isAuth = false;
  login_content = "login"
  constructor(private cookie:CookieService) {}
  ngDoCheck() {
    this.checkAuth()
  }
  checkAuth():void {
    if(this.cookie.get('token')){
      this.isAuth = true
      this.login_content = this.cookie.get("login")
    }
    else {
      this.isAuth = false
      this.login_content = "login"
    }
  }
}
