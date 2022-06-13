import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  cartas : card[] = [
    {
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },{
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },{
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },{
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },{
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },{
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },{
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },{
      Name : "Monitor 24''",
      Brand : "Apple",
      Url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
      Precio : 7199.99
    },
  ];
  constructor() { }

  getTarjetas() : card[] {
    return this.cartas;
  }
}

export interface card{
  Name : String;
  Brand : String;
  Url : String;
  Precio : number;
}