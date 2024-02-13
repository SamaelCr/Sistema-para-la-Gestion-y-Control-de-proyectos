// En types.ts
export interface User {
  uid: string;
  email: string;
  displayName: string;
  nombres: string;
  apellido: string;
  cedula: string;
  telefono: string;
  voceria: string;
  suplente: boolean;
  comuna: string;
  consejoComunal: string;
  manzana: string;
  direccion: string;
}

export interface Project {
  projectId: string;
  userId: string; // el ID del usuario al que pertenece este proyecto
  // otras propiedades del proyecto aquí
}

// task.model.ts

export interface Task {
  taskId: string;
  taskkey: string;
  id: string;
  taskName: string;
  startDate: Date;
  endDate: Date;
  parentKey?: string;
  duration: number; // Agrega la propiedad duration al modelo de tarea
}
