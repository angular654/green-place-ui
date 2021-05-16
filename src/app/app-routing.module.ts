import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { BlogComponent } from './blog/blog.component';
import { CreateEcoEventComponent } from './create-eco-event/create-eco-event.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EcoEventInfoComponent } from './eco-event-info/eco-event-info.component';
import { GeoFindComponent } from './geo-find/geo-find.component';
import { MainPageComponent } from './main-page/main-page.component'
import { ParksComponent } from './parks/parks.component';
import { PostComponent } from './post/post.component';
import { RecycleComponent } from './recycle/recycle.component';
const routes: Routes = [
  {path: 'eco-events-map', component: GeoFindComponent, canActivate: [AuthGuard]},
  {path: '', component: MainPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'create-eco-event', component: CreateEcoEventComponent, canActivate: [AuthGuard]},
  {path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'eco/:id', component: EcoEventInfoComponent,canActivate: [AuthGuard]},
  {path: 'article/:id', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'parks', component: ParksComponent, canActivate: [AuthGuard]},
  {path: 'recycle', component: RecycleComponent, canActivate: [AuthGuard]},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
