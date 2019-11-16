import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from './Users';
import {Blogs} from './Blogs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http : HttpClient) { }
  private url="http://localhost:2019";
  public createBlog(blog)
  {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post(this.url + '/addBlog' , blog,{headers});
  }
  public getBlog(){

    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<Blogs>(this.url + '/blogs', {headers});
  }
  getOneBlog(id: Number): Observable<Blogs> {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<Blogs>(this.url + '/blog-details/' + id , {headers});
  }
  removeFromDB(id: Number) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/blog/' + id + '/delete', {headers});
  }
}
