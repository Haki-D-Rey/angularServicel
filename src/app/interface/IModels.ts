export interface Usuario {
  idUsuario: number;
  idRol: number;
  username: string;
  password: string;
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
  estaActivo: number;
}
