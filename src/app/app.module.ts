import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoFindModule } from './geo-find/geo-find.module';
import { CreateEcoEventComponent } from './create-eco-event/create-eco-event.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BlogComponent } from './blog/blog.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEcoEventComponent,
    MainPageComponent,
    BlogComponent,
    CreatePostComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    GeoFindModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
