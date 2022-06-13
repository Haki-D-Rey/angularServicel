import { Component, OnInit, HostListener } from '@angular/core';
import { CarritoService, product } from '../../Services/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos!: product[];
  width!: number;

  pedidos!: pedidos[];
  constructor(private _carritoService: CarritoService) {
    this.onResize();
  }

  ngOnInit(): void {
    this.productos = this._carritoService.getProductos();
    this.width = window.innerWidth;
    this.pedidos = [{
      date : "06 de Enero del 2022",
      pedidos : this.productos
    },{
      date : "15 de Marzo del 2020",
      pedidos : this.productos
    },{
      date : "23 de Diciembre del 2019",
      pedidos : this.productos
    }];
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
}

interface pedidos{
  date : String;
  pedidos : product[];
}
