import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBody, ICol, Producto } from 'src/app/interface/IModels';
import { AgregarComponent } from '../../agregar/agregar.component';
import { ProductoService } from './producto.service';
import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from 'src/app/interface/IModels';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  col: ICol[] = [];
  body: IBody[] = [];
  producto: Producto[] = [];
  categorias: { nombre: string; id: number }[] = [];
  constructor(
    private modalService: NgbModal,
    private service: ProductoService,
    private categoriaService: CategoriaService
  ) {}

  async ngOnInit() {
    this.producto = await this.service.obtenerProductos().toPromise();
    this.categorias = (
      (await this.categoriaService
        .obtenerCategorias()
        .toPromise()) as Array<Categoria>
    )
      .filter((e) => e.nombreCategoria)
      .map((e) => ({ nombre: e.nombreCategoria, id: e.idCategoria }));
    this.col = [
      {
        header: '#',
        value: '',
      },
      {
        header: 'Nombre',
        value: 'nombreProducto',
      },
      {
        header: 'Precio',
        value: 'precio',
      },
      {
        header: 'Existencia',
        value: 'existencia',
      },
      {
        header: 'Fecha Creacion',
        value: 'fechaCreacion',
      },
      {
        header: 'Descuento',
        value: 'descuento',
      },
    ];

    this.body = [
      {
        key: 'index',
        value: 'index',
      },
      {
        key: 'Nombre',
        value: 'nombreProducto',
      },
      {
        key: 'Precio',
        value: 'precio',
      },
      {
        key: 'Existencia',
        value: 'existencia',
      },
      {
        key: 'Fecha Creacion',
        value: 'fechacreacion',
        type: 'date',
      },
      {
        key: 'Descuento',
        value: 'descuento',
      },
    ];
  }

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
      {
        id: 'idCategoria',
        for: '',
        type: 'Dropdown',
        value: '',
        colSpace: '4',
        label: 'Categoria',
        dataSet: this.categorias,
      },
    ];

    modalRef.response.subscribe((res: any) => {
      this.service.guardarProductos(res).subscribe((saved) => {
        if (saved) {
          res.fechaCreacion = new Date(res.fechaCreacion).toISOString();
          this.producto.push(res);
        }
      });
    });
  }
}
