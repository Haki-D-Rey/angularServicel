import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/interface/IModels';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', // <-- Importante el encabezado
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  private URL = environment.apiURL;

  obtenerProductos(): Observable<any> {
    return this.http.get<any>(`${this.URL}/producto`, {
      ...httpOptions,
    });
  }

  guardarProductos(producto: Producto): Observable<any>{
    return this.http.post<any>(`${this.URL}/producto`,producto,httpOptions);
  }
}
