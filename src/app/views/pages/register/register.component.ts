import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, getAuth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, getFirestore, doc, setDoc } from '@angular/fire/firestore';
import { User } from '../../../models/user.models';
import { ReactiveFormsModule } from '@angular/forms';
import { Inject } from '@angular/core';

interface PersonalInfo {
  nombres: string;
  apellido: string;
  cedula: string;
  telefono: string;
  voceria: string;
  suplente: boolean;
  comuna: string;
  consejoComunal: string;
  manzana?: string;
  direccion: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(Auth) private afAuth: Auth,
    @Inject(Firestore) private afs: Firestore
  ) {
    this.registerForm = this.fb.group({
      personalInfo: this.fb.group({
        nombres: ['', Validators.required],
        apellido: ['', Validators.required],
        cedula: ['', Validators.required],
        telefono: ['', Validators.required],
        voceria: ['', Validators.required],
        suplente: [false],
        comuna: ['', Validators.required],
        consejoComunal: ['', Validators.required],
        manzana: [''],
        direccion: ['', Validators.required],
      }),
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async registerUser(): Promise<void> {
    const personalInfo = this.registerForm?.get('personalInfo')
      ?.value as PersonalInfo;
    const email = this.registerForm?.get('email')?.value || '';
    const password = this.registerForm?.get('password')?.value;
    const confirmPassword = this.registerForm?.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      // Show an error message if the passwords don't match
      return;
    }

    try {
      const credential = await createUserWithEmailAndPassword(
        this.afAuth,
        email,
        password
      );
      if (credential.user) {
        // Save the user data to Firestore
        const userData: User = {
          uid: credential.user.uid,
          email: credential.user.email || '',
          displayName: personalInfo.nombres + ' ' + personalInfo.apellido,
          nombres: personalInfo.nombres,
          apellido: personalInfo.apellido,
          cedula: personalInfo.cedula,
          telefono: personalInfo.telefono,
          voceria: personalInfo.voceria,
          suplente: personalInfo.suplente,
          comuna: personalInfo.comuna,
          consejoComunal: personalInfo.consejoComunal,
          manzana: personalInfo.manzana || '',
          direccion: personalInfo.direccion,
        };
        await setDoc(doc(this.afs, `users/${credential.user.uid}`), userData);
      }
    } catch (error) {
      // Show an error message if the registration fails
      console.error('Error:', error);
    }
  }
}
