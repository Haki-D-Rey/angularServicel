import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interface/IModels';
import { EmptyData } from 'src/app/base/EmptyData';
import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  user: Usuario = new EmptyData().EUsuario();

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onLogin() {
    const user = {
      username: this.user.username,
      password: this.user.password,
    };
    console.log(user);

    this.authService.iniciarSesion(user).subscribe((data: any) => {
      console.log(
        'Se ha iniciado sesion con exito, el Token generado es= ' + data.TOKEN
      );
      localStorage.setItem('Token', data.TOKEN);
    });
  }
}
