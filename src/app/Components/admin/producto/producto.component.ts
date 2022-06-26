import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarComponent } from '../../agregar/agregar.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  mostrarPopUp() {
    const modalRef = this.modalService.open(AgregarComponent)
      .componentInstance as AgregarComponent;
    modalRef.name = 'Producto';
    modalRef.models = [
      {
        id: 'nombreProducto',
        for: '',
        type: 'text',
        value: '',
        colSpace: '4',
        label: 'Nombre',
      },
      {
        id: 'precio',
        for: '',
        type: 'text',
        value: '',
        colSpace: '4',
        label: 'Precio',
      },
      {
        id: 'existencia',
        for: '',
        type: 'text',
        value: '',
        colSpace: '4',
        label: 'Stock',
      },
      {
        id: 'descuento',
        for: '',
        type: 'text',
        value: '',
        colSpace: '4',
        label: 'Descuento',
      },
    ];

    modalRef.response.subscribe((res: any) => {
      console.log(res);
    });
  }
}
