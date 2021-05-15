import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcoEventsService } from '../eco-events.service';

interface Event {
  name: string;
  description: string;
  date: Date;
  party: Array<any>
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-eco-event-info',
  templateUrl: './eco-event-info.component.html',
  styleUrls: ['./eco-event-info.component.scss']
})
export class EcoEventInfoComponent implements OnInit {

  constructor(private router:Router, private eco_event_svc:EcoEventsService) { }
  public id;

  ngOnInit(): void {
    this.id = this.router.url.split('/')[2]

  }

}
