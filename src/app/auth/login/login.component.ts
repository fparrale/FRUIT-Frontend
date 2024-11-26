import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService.service';
import { CommonModule } from '@angular/common';
import { Credentials } from '../interfaces/Credentials';
import { LoadingService } from '../../shared/loading.service';
import { AlertService } from '../../shared/alert.service';

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

  constructor(private alertService: AlertService, private loadingService: LoadingService, private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.loadingService.showLoading();
    this.authService.login(this.credentials).subscribe({
      next: () =>{
        this.loadingService.hideLoading();
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(error.message, true);
      },
    });
  }
}
