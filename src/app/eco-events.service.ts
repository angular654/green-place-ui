import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface Event {
  name: string;
  description: string;
  date: Date;
  party: [];
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class EcoEventsService {
  private readonly _host = "http://localhost:3000/events";
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    })
  };

  constructor(private http: HttpClient) {}

  async createEvent(body:Event):Promise<any> {
    return await this.http.post(`${this._host}`, body, this.httpOptions).toPromise()
  }

  async getEvents():Promise<any> {
    return await this.http.get(`${this._host}`,  this.httpOptions).toPromise()
  }

  async updateEvent(body:Event,id:string):Promise<any> {
    return await this.http.patch(`${this._host}/${id}`, body, this.httpOptions).toPromise()
  }

  async getOneEvent(id:string):Promise<any> {
    return await this.http.get(`${this._host}/${id}`, this.httpOptions).toPromise()
  }

  async deleteEvent(id:string):Promise<any> {
    return await this.http.delete(`${this._host}/${id}`, this.httpOptions).toPromise()
  }

}
