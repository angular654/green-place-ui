import { Component, OnInit, Input } from '@angular/core';
import { EcoEventsService } from '../eco-events.service';

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

  ngOnInit(): void {
    this.date_now = new Date().toJSON().slice(0,10)

  }

  createEvent() {
  }

}
