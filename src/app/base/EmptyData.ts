import { Persona, Rol, Usuario } from '../interface/IModels';

export class EmptyData {
  public EUsuario(): Usuario {
    return {
      idUsuario: 0,
      idRol: 0,
      username: '',
      password: '',
      fechaRegistro: new Date(),
      estaActivo: 0,
    };
  }

  public ERol(): Rol {
    return {
      idRol: 0,
      rol: '',
      descripcion: '',
      estaActivo: 0,
      fechaCreacion: new Date(),
    };
  }

  public EPersona(): Persona {
    return {
      idPersona: 0,
      idUsuario: 0,
      codigo: '',
      nombres: '',
      apellidos: '',
      nombreCompleto: '',
      correo: '',
      telefono: '',
      direccion: '',
      estaActivo: 0,
    };
  }
}
