import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket : any
  private uri = "ws://localhost:3000"
  constructor() {
    this.socket = io(this.uri)
   }

   listen(eventName:string ) {
      return new Observable((subscriber)=> {
        this.socket.on(eventName, (data:any) => {
          subscriber.next(data)
        })
      })
   }

   emit(eventName:string, data:any) {
    this.socket.emit(eventName,data);
   }

}
