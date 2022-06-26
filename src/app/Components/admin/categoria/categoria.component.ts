import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBody, ICol } from 'src/app/interface/IModels';
import { AgregarComponent } from '../../agregar/agregar.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  col: ICol[] = [];
  body: IBody[] = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.col = [
      {
        header: '#',
        value: 'idCategoria',
      },
      {
        header: 'Nombre Categoria',
        value: 'nombreCategoria',
      },
      {
        header: 'Descripcion',
        value: 'descripcion',
      },
      {
        header: 'Fecha Registro',
        value: 'fechaRegistro',
      },
    ];

    this.body = [
      {
        key: 'idCategoria',
        value: 'idCategoria',
      },
      {
        key: 'Nombre Categoria',
        value: 'nombreCategoria',
      },
      {
        key: 'Descripcion',
        value: 'descripcion',
      },
      {
        key: 'Fecha Registro',
        value: 'fechaRegistro',
      },
    ];
  }

  mostrarPopUp() {
    const modalRef = this.modalService.open(AgregarComponent)
      .componentInstance as AgregarComponent;
    modalRef.name = 'Categoria';
    modalRef.models = [
      {
        id: 'nombreCategoria',
        for: '',
        type: 'text',
        value: 'nombreCategoria',
        colSpace: '6',
        label: 'Nombre',
      },
      {
        id: 'descripcionCategoria',
        for: '',
        type: 'text',
        value: 'descripcionCategoria',
        colSpace: '6',
        label: 'Descripcion',
      },
    ];

    modalRef.response.subscribe((res: any) => {
      console.log(modalRef.name);
      console.log(res);
    });
  }
}

export interface Categoria {
  idCategoria: number;
  nombreCategoria: string;
  descripcion: string;
  fechaRegistro: string;
}

export const CATEGORTIES: Categoria[] = [
  {
    idCategoria: 1,
    nombreCategoria: 'Deportes',
    descripcion: 'Seccion de Deportes',
    fechaRegistro: '02/06/2022 10:43:00',
  },
  {
    idCategoria: 2,
    nombreCategoria: 'Ficcion',
    descripcion: 'Seccion de Ficcion',
    fechaRegistro: '02/06/2022 10:43:00',
  },
  {
    idCategoria: 3,
    nombreCategoria: 'Deportes',
    descripcion: 'Seccion de Deportes',
    fechaRegistro: '02/06/2022 10:43:00',
  },
  {
    idCategoria: 4,
    nombreCategoria: 'Deportes',
    descripcion: 'Seccion de Ficcion',
    fechaRegistro: '02/06/2022 10:43:00',
  },
  {
    idCategoria: 5,
    nombreCategoria: 'Deportes',
    descripcion: 'Seccion de Ficcion',
    fechaRegistro: '02/06/2022 10:43:00',
  },
];
