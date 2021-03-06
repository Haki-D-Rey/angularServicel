import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/interface/IModels';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', // <-- Importante el encabezado
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  private URL = environment.apiURL;

  obtenerCategorias(): Observable<any> {
    return this.http.get<any>(`${this.URL}/categoria`, {
      ...httpOptions,
    });
  }

  guardarCategoria(categoria: Categoria): Observable<any>{
    return this.http.post<any>(`${this.URL}/categoria`,categoria,httpOptions);
  }
}
