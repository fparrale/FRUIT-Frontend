import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService.service';
import { CommonModule } from '@angular/common';
import { Credentials } from '../interfaces/Credentials';
import { LoadingService } from '../../shared/loading.service';
import { AlertService } from '../../shared/alert.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService],
})
export default class LoginComponent {
  credentials: Credentials = {
    email: '',
    password: '',
  };

  isLanguageMenuOpen = false;

  constructor(private alertService: AlertService, private loadingService: LoadingService, 
              private authService: AuthService, private router: Router,
              private translate: TranslateService, private el: ElementRef, private renderer: Renderer2) {
                this.translate.setDefaultLang('en');
              }
    
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    console.log('click');
    const clickedInside = this.el.nativeElement.contains(event.target);
    const clickedElement = event.target as HTMLElement;
    console.log(clickedElement)
    const clickedElementId = clickedElement.id;
    console.log('ID del elemento clickeado:', clickedElementId);
    if (clickedElementId !== "language-menu-svg" && clickedElementId !== "language-menu-button" && clickedElementId !== "language-menu-path") {
      this.closeToggleLanguageMenu();
    }
  }

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

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // changeLanguage(event: Event): void {
  //   const target = event.target as HTMLSelectElement | null;
  //   if (target) {
  //     this.translate.use(target.value);
  //   }
  // }

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  closeToggleLanguageMenu(): void {
    this.isLanguageMenuOpen = false;
  }	

  changeLanguage(lang: string): void {
    this.translate.use(lang); // Cambia el idioma
    this.isLanguageMenuOpen = false; // Cierra el menú
  }
  
}
