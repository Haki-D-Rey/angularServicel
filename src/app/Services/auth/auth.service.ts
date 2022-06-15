import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', // <-- Importante el encabezado
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private URL = environment.apiURL;

  iniciarSesion(user: any): Observable<any> {
    return this.http.get<any>(`${this.URL}/usuario`, {
      ...httpOptions,
      params: user,
    });
    // <-- Aquí van los dat
  }
  registrarUsuario(user: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/usuario`, user, httpOptions);
  }
}
