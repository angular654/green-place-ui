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
import { ParksComponent } from './parks/parks.component';
import { RecycleComponent } from './recycle/recycle.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule} from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    CreateEcoEventComponent,
    MainPageComponent,
    BlogComponent,
    CreatePostComponent,
    PostComponent,
    ParksComponent,
    RecycleComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    GeoFindModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService, FormControl],
  bootstrap: [AppComponent]
})
export class AppModule { }
