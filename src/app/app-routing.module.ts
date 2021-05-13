import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEcoEventComponent } from './create-eco-event/create-eco-event.component';
import { GeoFindComponent } from './geo-find/geo-find.component';
import { MainPageComponent } from './main-page/main-page.component'
import { PostComponent } from './post/post.component';
const routes: Routes = [
  {path: 'eco-events-map', component: GeoFindComponent},
  {path: '', component: MainPageComponent},
  {path: 'create-eco-event', component: CreateEcoEventComponent},
  {path: 'article/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
