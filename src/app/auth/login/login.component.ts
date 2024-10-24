import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService.service';
import { CommonModule } from '@angular/common';
import { Credentials } from '../interfaces/Credentials';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})

export class LoginComponent {

  credentials: Credentials = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.errorMessage = null;
    this.authService.login(this.credentials).subscribe({
      next: (user) => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user)); 
            this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Credenciales inválidas'; 
        }
      },
      error: (error) => {
        this.errorMessage = error.message; 
        console.log(error); 
      }
    });
  }

}
