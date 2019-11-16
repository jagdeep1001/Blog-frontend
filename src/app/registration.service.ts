import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from './Users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient ) {}
  private url = 'http://localhost:2019';

  public createUser(user) {

    return this.http.post(this.url + '/addUser', user);
  }

  public getUser() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<Users>(this.url + '/callUser', {headers});
  }
  public getOneUser(id: number)
  {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<Users>(this.url + '/callUser/'+ id, {headers});
  }


  editMyUser(user) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<Users>(this.url + '/editUser' , user, {headers});
  }
}
