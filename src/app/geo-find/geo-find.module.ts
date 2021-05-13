import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoFindComponent } from './geo-find.component';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [GeoFindComponent],
  imports: [
    CommonModule,
      // AgmCoreModule.forRoot({
      //   apiKey: ''
      // })
  ]
})
export class GeoFindModule { }
