import { Component, OnInit } from '@angular/core';
import { TarjetaService, card } from '../../Services/productoTarjeta/tarjeta.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  tarjetas !: card[];
  constructor(private _tarjetaService:TarjetaService, config: NgbCarouselConfig) {
    config.interval = 15000;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.tarjetas = this._tarjetaService.getTarjetas();
  }

  images = ["../../../assets/banner1.jpg","../../../assets/banner2.jpg"]
}
