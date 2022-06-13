import { Component, OnInit, HostListener } from '@angular/core';
import { PerfilService, User } from '../../Services/perfil/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  Usuario!: User;
  width!: number;
  constructor(private _perfilService:PerfilService) { 
    this.onResize();
  }

  ngOnInit(): void {
    this.Usuario = this._perfilService.getUsuario();
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
}
