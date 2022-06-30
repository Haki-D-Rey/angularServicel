import { DecimalPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IBody, ICol } from 'src/app/interface/IModels';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [DecimalPipe],
})
export class TablaComponent implements OnInit {
  @Input() Headers: ICol[] = [];
  @Input() body: IBody[] = [];
  @Input() models: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  datos: any[] = [];

  constructor() {}

  get currentModels() {
    this.collectionSize = this.models.length;
    return this.pagination();
  }

  ngOnInit(): void {
    console.log(this.models);
    this.datos = this.models;
    this.pagination();
  }

  pagination() {
    if(this.pageSize ==  -1) return this.models;
    return this.models
    .map((tab, i) => ({ id: i + 1, ...tab }))
    .slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
