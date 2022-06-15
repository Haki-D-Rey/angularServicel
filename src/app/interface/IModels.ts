export interface Usuario {
  idUsuario: number;
  idRol: number;
  nombreUsuario: string;
  contrasenia: string;
  fechaRegistro: Date;
  fechaModificacion?: Date;
  estaActivo: number;
}

export interface Rol {
  idRol: number;
  rol: string;
  descripcion: string;
  estaActivo: number;
  fechaCreacion: Date;
  fechaModificacion?: Date;
}

export interface Persona {
  idPersona: number;
  idUsuario: number;
  codigo: string;
  nombres: string;
  apellidos: string;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  direccion: string;
  fechaRegistro: string;
  fechaModificacion?: string;
  estaActivo: number;
}
