import { Component, OnInit, Input } from '@angular/core';
import { EcoEventsService } from '../eco-events.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// interface Event {
//   name: string;
//   description: string;
//   date: Date;
//   party: [];
//   latitude: number;
//   longitude: number;
// }

@Component({
  selector: 'app-create-eco-event',
  templateUrl: './create-eco-event.component.html',
  styleUrls: ['./create-eco-event.component.scss']
})
export class CreateEcoEventComponent implements OnInit {
  public date_now;
  @Input() lat: number;
  @Input() long: number;

  
  constructor(private _eco_ev:EcoEventsService) { }
  createEventForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(60)]),
    description: new FormControl('',[Validators.required,Validators.minLength(6),
      Validators.maxLength(500)]),
    date: new FormControl([Validators.required]),
    party: new FormControl([])
  }) 

  ngOnInit(): void {
    this.date_now = new Date().toJSON().slice(0,10)

  }

  public createEvent():void {
    const event_data = {
      ...this.createEventForm.value, 
      latitude: this.lat, 
      longitude: this.long
    }
    if(this.lat && this.long) {
      console.log(event_data)
    }
  }
}
