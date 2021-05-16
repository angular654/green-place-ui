import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Post {
  heading: string;
  description: string;
  article: string;
  topic: string;
  author: string;
}
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly _host = "http://localhost:3000/blogs";
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    })
  };

  constructor(private http: HttpClient) { }

  public async createPost(body:Post):Promise<any> {
    return await this.http.post(`${this._host}`, body, this.httpOptions).toPromise()
  }
  public async findById(id:string) {
    return await this.http.get(`${this._host}/${id}`, this.httpOptions).toPromise()
  }
  public async findByTopic(topic?:string, limit?:number):Promise<any> {
    if (topic === null) {
      return await this.http.get(`${this._host}?topic=&limit=${limit}`,  this.httpOptions).toPromise()
    }
    return await this.http.get(`${this._host}?topic=${topic}&limit=${limit}`,  this.httpOptions).toPromise()
  }
  public async updatePost(id:string):Promise<any> {
    return await this.http.patch(`${this._host}/${id}`, this.httpOptions).toPromise()
  }
  public async removePost(id:string):Promise<any> {
    return await this.http.delete(`${this._host}/${id}`, this.httpOptions).toPromise()
  }
}
