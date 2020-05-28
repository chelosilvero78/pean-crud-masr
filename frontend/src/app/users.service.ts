import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.uri}/users`);
  }

  getUserById(id) {
    return this.http.get(`${this.uri}/users/${id}`);
  }

  createUser(nombre_usuario,usuario_usuario,clave_usuario) {
    const usuario = {
      nombre_usuario: nombre_usuario,
      usuario_usuario:usuario_usuario,
      clave_usuario:clave_usuario
    };
    return this.http.post(`${this.uri}/users`, usuario);
  }

  updateUser(id, nombre_usuario,usuario_usuario,clave_usuario) {
    const usuario = {
      nombre_usuario: nombre_usuario,
      usuario_usuario:usuario_usuario,
      clave_usuario:clave_usuario
    };
    return this.http.put(`${this.uri}/users/${id}`, usuario);
  }

  deleteUser(id) {
    return this.http.delete(`${this.uri}/users/${id}`);
  }

}
