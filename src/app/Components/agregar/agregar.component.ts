import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAgregar } from 'src/app/interface/IModels';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  @Input() name = '';
  @Input() models: IAgregar[] = [];
  @Output() response: EventEmitter<any> = new EventEmitter();
  currentSelection: string = 'Seleccione';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  getSelectId(id: number, obj: any, prop: string, model: any) {
    obj[prop] = "" + id;
    this.currentSelection = model.dataSet.find((e: any) => e.id == id).nombre;
  }

  get getCurrentSelection() {
    return this.currentSelection;
  }

  passBack(res: any) {
    res.fechaCreacion = new Date().toLocaleString('sv-SE');
    this.response.emit(res);
    this.activeModal.close('Close click');
  }
}
