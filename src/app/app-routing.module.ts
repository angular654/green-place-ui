import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BlogComponent } from './blog/blog.component';
import { CreateEcoEventComponent } from './create-eco-event/create-eco-event.component';
import { GeoFindComponent } from './geo-find/geo-find.component';
import { MainPageComponent } from './main-page/main-page.component'
import { ParksComponent } from './parks/parks.component';
import { PostComponent } from './post/post.component';
import { RecycleComponent } from './recycle/recycle.component';
const routes: Routes = [
  {path: 'eco-events-map', component: GeoFindComponent},
  {path: '', component: MainPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'create-eco-event', component: CreateEcoEventComponent},
  {path: 'article/:id', component: PostComponent},
  {path: 'parks', component: ParksComponent},
  {path: 'recycle', component: RecycleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
