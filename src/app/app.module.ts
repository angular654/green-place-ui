import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoFindComponent } from './geo-find/geo-find.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BlogComponent } from './blog/blog.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post/post.component';
import { ParksComponent } from './parks/parks.component';
import { RecycleComponent } from './recycle/recycle.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule} from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEcoEventComponent } from './create-eco-event/create-eco-event.component';
import { EcoEventInfoComponent } from './eco-event-info/eco-event-info.component';
import {DatePipe} from '@angular/common';
@NgModule({
  declarations: [
    GeoFindComponent,
    CreateEcoEventComponent,
    AppComponent,
    MainPageComponent,
    BlogComponent,
    CreatePostComponent,
    PostComponent,
    ParksComponent,
    RecycleComponent,
    AuthComponent,
    EcoEventInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService, FormControl, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
