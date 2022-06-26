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
  model: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  passBack(res: any) {
    res.fechaRegistro = new Date().toLocaleString('sv-SE');
    this.response.emit(res);
    this.activeModal.close('Close click');
  }
}
