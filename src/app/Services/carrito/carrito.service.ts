import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private producto: product[] = [{
    Nombre: "Samsung Galaxy M11 64GB",
    Color: "Blanco",
    Precio: 799,
    Img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
  }, {
    Nombre: "Auriculares Bose 35 II",
    Color: "Rojo",
    Precio: 239,
    Img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
  }, {
    Nombre: "iPad 9.7 6-gen WiFi 32GB",
    Color: "Rosa",
    Precio: 659,
    Img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
  }];
  constructor() { }

  getProductos(): product[] {
    return this.producto;
  }
}

export interface product {
  Nombre: String;
  Color: String;
  Precio: Number;
  Img: String;
}
