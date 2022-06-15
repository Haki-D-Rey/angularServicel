import { Component, OnInit } from '@angular/core';
import { Persona, Usuario } from 'src/app/interface/IModels';
import { EmptyData } from 'src/app/base/EmptyData';
import { AuthService } from 'src/app/Services/auth/auth.service';
@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css'],
})
export class CrearCuentaComponent implements OnInit {
  persona: Persona = new EmptyData().EPersona();
  usuario: Usuario = new EmptyData().EUsuario();
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  Registrar() {
    const user = {
      idRol: 2,
      nombreUsuario: this.usuario.nombreUsuario,
      fechaRegistro: this.persona.fechaRegistro,
      fechaModificacion: null,
      estaActivo: 1,
      contrasenia: this.usuario.contrasenia,
      nombres: this.persona.nombres,
      apellidos: this.persona.apellidos,
      correo: this.persona.correo,
      direccion: this.persona.direccion,
      telefono: this.persona.telefono,
    };

    console.log(user);

    this.authService.registrarUsuario(user).subscribe((data: any) => {
      console.log('Se ha con exito', data);
    });
  }
}
