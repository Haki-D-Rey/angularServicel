import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmptyData } from 'src/app/base/EmptyData';
import { ITokens, Usuario } from 'src/app/interface/IModels';
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
  private readonly Token = 'Token';
  private userSubject: BehaviorSubject<Usuario> = new BehaviorSubject(
    new EmptyData().EUsuario()
  );
  public user = this.userSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) {}

  private URL = environment.apiURL;

  public get userValue(): Usuario {
    return this.userSubject.value;
  }

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

  logout() {
    // remove user from local storage to log user out
    this.removeTokens();
    this.userSubject.next(null || new EmptyData().EUsuario());
    this.router.navigate(['/login']);
  }

  getJwtToken(): string {
    return localStorage.getItem(this.Token) || '';
  }

  public setJwtToken(jwt: string) {
    localStorage.setItem(this.Token, jwt);
  }

  public removeTokens() {
    localStorage.removeItem(this.Token);
  }
}
//https://dev-academy.com/angular-jwt/
//https://dev-academy.com/angular-architecture-best-practices/
//https://jasonwatmore.com/post/2020/10/17/angular-10-basic-http-authentication-tutorial-example
