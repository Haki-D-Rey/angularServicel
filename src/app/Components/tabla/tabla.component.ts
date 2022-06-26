import { DecimalPipe } from '@angular/common';
import {
  Component,
  QueryList,
  ViewChildren,
  OnInit,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IBody, ICol } from 'src/app/interface/IModels';
import { Categoria } from '../admin/categoria/categoria.component';
import { NgbdSortableHeader, SortEvent } from './table.directive';
import { tablaService } from './table.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [tablaService, DecimalPipe],
})
export class TablaComponent implements OnInit {
  table$: Observable<any>;
  total$: Observable<number>;
  @Input() Headers: ICol[] = [];
  @Input() body: IBody[] = [];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> =
    new QueryList();

  constructor(public service: tablaService) {
    this.table$ = service.table$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    console.log(this.body);
    console.log(this.Headers);
  }

  onSort({ column, direction }: any) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
