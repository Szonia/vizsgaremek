

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    });

   
    this.registrationForm.addValidators(this.passwordMatchValidator);
    this.registrationForm.updateValueAndValidity(); 
  }


  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    return password && confirmPassword && password !== confirmPassword
      ? { mismatch: true }
      : null;
  }

  register() {
    if (this.registrationForm.valid) {
      const { email, password } = this.registrationForm.value;
      this.auth.register(email, password).then(res => {
        if (res.success) {
          alert('Sikeres regisztráció! Kérjük, ellenőrizze az email fiókját!');
        } else {
          alert('Regisztrációs hiba történt');
        }
      }).catch(err => {
        console.error('Hiba történt!', err);
        alert('Ismeretlen hiba történt');
      });
    }
  }
}
