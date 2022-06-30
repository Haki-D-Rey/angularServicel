import { Categoria, Producto } from '../interface/IModels';
import { Persona, Rol, Usuario } from '../interface/IModels';

export class EmptyData {
  public EUsuario(): Usuario {
    return {
      idUsuario: 0,
      idRol: 0,
      nombreUsuario: '',
      contrasenia: '',
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
      fechaRegistro: new Date().toLocaleString('sv-SE'),
      estaActivo: 0,
    };
  }

  public ECategoria(): Categoria {
    return {
      idCategoria: 0,
      nombreCategoria: '',
      descripcion: '',
      fechaRegistro: '',
    };
  }

  public EProducto(): Producto {
    return {
      idProducto: 0,
      nombreProducto: '',
      precio: 0,
      existencia: 0,
      fechaCreacion: '',
      fechaModificacion: '',
      descuento: 0,
      estaActivo: 1,
    };
  }
}
