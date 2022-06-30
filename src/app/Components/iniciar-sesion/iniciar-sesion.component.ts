import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../interface/IModels';
import { EmptyData } from 'src/app/base/EmptyData';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  user: Usuario = new EmptyData().EUsuario();
  returnUrl: string = '';
  error: string = '';
  @Input() visible: any;
  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.authService.userValue) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin() {
    const user = {
      nombreUsuario: this.user.nombreUsuario,
      contrasenia: this.user.contrasenia,
    };
    console.log(user);
    this.authService
      .iniciarSesion(user)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.router.navigate([this.returnUrl]);
          localStorage.setItem('Token', data.TOKEN);
        },
        (error) => {
          this.error = error;
        }
      );
  }
}
