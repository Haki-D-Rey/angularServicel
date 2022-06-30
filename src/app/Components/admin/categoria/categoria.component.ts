import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmptyData } from 'src/app/base/EmptyData';
import { Categoria, IBody, ICol } from 'src/app/interface/IModels';
import { AgregarComponent } from '../../agregar/agregar.component';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  col: ICol[] = [];
  body: IBody[] = [];
  categoria: Categoria[] = [];
  constructor(
    private modalService: NgbModal,
    private service: CategoriaService
  ) {}

  ngOnInit(): void {
    this.col = [
      {
        header: '#',
        value: '',
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
        value: 'fechacreacion',
      },
    ];

    this.body = [
      {
        key: 'index',
        value: 'index',
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
        value: 'fechacreacion',
        type: 'date',
      },
    ];

    this.service.obtenerCategorias().subscribe((e) => {
      this.categoria = e;
    });
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
        id: 'descripcion',
        for: '',
        type: 'text',
        value: 'descripcion',
        colSpace: '6',
        label: 'Descripcion',
      },
    ];

    modalRef.response.subscribe((res: any) => {
      this.service.guardarCategoria(res).subscribe((saved) => {
        if (saved) {
          this.categoria.push(res);
        }
      });
    });
  }
}
