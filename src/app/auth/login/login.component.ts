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
  providers: [AuthService],
})
export default class LoginComponent {
  credentials: Credentials = {
    email: '',
    password: '',
  };

  errorMessage: string | null = null;
  showAlert: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => {
        this.errorMessage = err.message || 'Ocurrió un error inesperado';
        this.showAlert = true;
        setTimeout(() => {
          this.closeAlert();
        }, 3000);
      },
    });
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
