import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private usuario: User = {
    Nombre: "Oliver",
    Apellido: "Gonzalez",
    Direccion: "En una casa pegada al lado de la de mi vecino",
    Telefono: "8135-0393",
    Correo: "Ejemplo@gmail.com"
  };
  constructor() { }

  getUsuario(): User {
    return this.usuario;
  }
}
export interface User {
  Nombre: String;
  Apellido: String;
  Direccion: String;
  Telefono: String;
  Correo: String;
}
