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
    return this.http.post<any>(`${this.URL}/iniciarSesion`, user, httpOptions);
    // <-- Aquí van los dat
  }
}
