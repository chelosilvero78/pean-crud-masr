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

  getUserById(id) {
    return this.http.get(`${this.uri}/users/${id}`);
  }

  createUser(name, email) {
    const user = {
      name: name,
      email: email
    };
    return this.http.post(`${this.uri}/users`, user);
  }

  updateUser(id, name, email) {
    const user = {
      name: name,
      email: email
    };
    return this.http.put(`${this.uri}/users/${id}`, user);
  }

  deleteUser(id) {
    return this.http.delete(`${this.uri}/users/${id}`);
  }

}
