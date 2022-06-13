import { Component, OnInit } from '@angular/core';
import { SearchService, result } from '../../Services/search/search.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  resultados! : result[];

  constructor(private _searchService:SearchService) { }

  ngOnInit(): void {
    this.resultados = this._searchService.getResults();
  }
}
