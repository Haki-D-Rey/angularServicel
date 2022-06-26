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

export interface SidenavToggle {
  collapsed: boolean;
  screenWidth: number;
}

export interface IAgregar {
  for: string;
  type: string;
  id: string;
  value: string;
  colSpace: string;
  label: string;
}

export interface ICol {
  header: string;
  value: string;
  sortable?: string;
}

export interface IBody {
  key: string;
  value: string;
}
