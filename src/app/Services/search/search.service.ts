import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private resultados: result[] = [{
    Nombre: "Samsung Galaxy S8",
    Img: "https://cdn1.smart-gsm.com/picture/samsung-galaxy-s8.jpg",
    Desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    Precio: 399.99,
    Caracteristicas: ["64 GB", "3 Camaras", "Negro"]
  },{
    Nombre: "Huewei P30",
    Img: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p30/img/camera-intro/pic_familyP30pro_md.jpg",
    Desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    Precio: 599.99,
    Caracteristicas: ["128 GB", "4 Camaras", "Azul"]
  },{
    Nombre: "Google Pixel 3",
    Img: "https://cdn1.smart-gsm.com/picture/google-pixel-3.jpg",
    Desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    Precio: 499.99,
    Caracteristicas: ["64 GB", "1 Camara", "Negro"]
  }];
  constructor() { }

  getResults() : result[] {
    return this.resultados;
  }
}

export interface result {
  Nombre: String;
  Img: String;
  Desc: String;
  Precio: Number;
  Caracteristicas: String[];
}