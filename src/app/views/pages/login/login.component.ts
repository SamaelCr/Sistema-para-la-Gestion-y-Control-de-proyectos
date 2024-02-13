import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor() {}

  login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((userCredential) => {
        // El inicio de sesión fue exitoso
        console.log('Inicio de sesión exitoso');
      })
      .catch((error) => {
        // Hubo un error en el inicio de sesión
        console.error('Error en el inicio de sesión', error);
        alert('Error en el inicio de sesión: ' + error.message);
      });
  }
}
