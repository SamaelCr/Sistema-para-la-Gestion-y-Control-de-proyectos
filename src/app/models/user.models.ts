export class User {
  uid!: string;
  email!: string;
  displayName!: string;
  nombres!: string;
  apellido!: string;
  cedula!: string;
  telefono!: string;
  voceria!: string;
  suplente!: boolean;
  comuna!: string;
  consejoComunal!: string;
  manzana?: string;
  direccion!: string;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}