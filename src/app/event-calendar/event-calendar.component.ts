import { Component, OnInit } from '@angular/core';
import { CalendarCreatorService } from "../calendar-creator.service";
import { Day } from "../../models/day.model";
import { EcoEventsService } from '../eco-events.service';
import * as m from 'moment';
@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;
  public events = []
  public weekDaysName = [];
  constructor(public calendarCreator: CalendarCreatorService, private eco:EcoEventsService) {
  }
  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
    this.weekDaysName.push("Mo");
    this.weekDaysName.push("Tu");
    this.weekDaysName.push("We");
    this.weekDaysName.push("Th");
    this.weekDaysName.push("Fr");
    this.weekDaysName.push("Sa");
    this.weekDaysName.push("Su");
    this.eco.getEvents().then((res)=>{
      this.events = res
      let moment = m(res[5].date)
      console.log(moment.format('ll'))
    })
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
 