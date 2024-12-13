import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService.service';
import { LoadingService } from '../../shared/loading.service';
import { AlertService } from '../../shared/alert.service';
import { RegisterUser, Role } from '../interfaces/Credentials';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService],
})
export default class RegisterComponent implements OnInit {
  constructor(private alertService: AlertService, private loadingService: LoadingService, private authService: AuthService, private router: Router) {}
  
  showPassword = false;

  registerUser: RegisterUser = {
    name: '',
    last_name: '',
    username: '',
    email: '',
    birth_date: '',
    password: '',
    role: '',
  };

  roles: Array<Role> = [];


  ngOnInit(): void {
    this.loadingService.showLoading();
    this.authService.getRoles().subscribe({
      next: (response) => {
        this.loadingService.hideLoading();
        this.roles = response.data;
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(error.message, true);
      },
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.loadingService.showLoading();
    this.authService.register(this.registerUser).subscribe({
      next: (response) =>{
        this.loadingService.hideLoading();
        this.alertService.showAlert(response.message, false);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(error.message, true);
      },
    });
  }
}
