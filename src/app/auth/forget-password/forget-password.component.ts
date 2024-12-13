import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordReset, SendCode } from '../interfaces/Credentials';
import { LoadingService } from '../../shared/loading.service';
import { AlertService } from '../../shared/alert.service';
import { AuthService } from '../services/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export default class ForgetPasswordComponent{

  constructor(private alertService: AlertService, private loadingService: LoadingService, private authService: AuthService, private router: Router){}

  sendCode : SendCode = {
    email: ''
  }

  passwordReset : PasswordReset = {
    email : '',
    otp: null,
    password: '',
    password_confirmation: '',
  }

  isCodeSent: boolean = false;
  showPassword: boolean = false;
  showPasswordConfirmation: boolean = false;

  onSubmitSendCode() : void {
    this.loadingService.showLoading();
    this.authService.passwordSendCode(this.sendCode).subscribe({
      next: (response) =>{
        this.loadingService.hideLoading();
        this.alertService.showAlert(response.message, false);
        this.isCodeSent = true;
        this.passwordReset.email = this.sendCode.email;
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(error.message, true);
      },
    });
  }

  onSubmitResetPassword(): void {
    this.loadingService.showLoading();
    this.authService.passwordReset(this.passwordReset).subscribe({
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

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordConfirmationVisibility(): void {
    this.showPasswordConfirmation = !this.showPasswordConfirmation;
  }
}
