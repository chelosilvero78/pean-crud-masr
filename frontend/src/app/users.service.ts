import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.uri}/users`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/users/${id}`);
  }

  createUser() {

  }

  updateUser() {

  }

  deleteUser() {

  }

}
