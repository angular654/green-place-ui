import { Component, OnInit } from '@angular/core';
import { CalendarCreatorService } from "../calendar-creator.service";
import { CalendarOptions } from '@fullcalendar/angular';
import { EcoEventsService } from '../eco-events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {
  Events = [];
  clean_events = [];
  calendarOptions: CalendarOptions;
  constructor(public calendarCreator: CalendarCreatorService,private eco_evs: EcoEventsService, private router:Router) {
  }
  ngOnInit(): void {
   this.eco_evs.getEvents().then((res)=>{
     this.Events = res
     this.cleanEvent(this.Events)
     this.calendarOptions = {
      initialView: 'dayGridMonth',
      events: this.clean_events
    };
   })
  }
  cleanEvent(events:any) {
    for (let i = 0; i < events.length; i++) {
      let el = {
        title : events[i].name,
        ...events[i]
      }
      this.clean_events.push(el)
    }
  }
}
 