import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { QuestionsService } from '../../questions/services/questions.service';
import { HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs';
import { ROUTE_NAMES } from '../../../helpers/routes_names';
import { AuthService } from '../../auth/services/AuthService.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, HttpClientModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMobile: boolean = false;
  currentRouteName: string = '';
  fullName: string = '';
  rolName: string = '';

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private questionService: QuestionsService, 
    private router: Router,
    private storageService: StorageService
  ) {
    

  }

  toggleMenu() {
    this.toggleSidenav.emit();
  }

  againQuestionClear() {
    this.questionService.againQuestions({ refresh: true });
  }

  ngOnInit(): void {
    const language = this.storageService.getItem();
    if (language) {
      this.translate.setDefaultLang(language);
    }
    //this.translate.setDefaultLang('en');
    this.getUserAuthenticaded();
     // Detectar el cambio de rutas
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Obtener la ruta actual después de la navegación
        const currentRoute = this.router.url.split('?')[0];
        this.currentRouteName = ROUTE_NAMES[currentRoute as keyof typeof ROUTE_NAMES] || 'nombre_ruta';
      }
    });

    // Configurar el nombre inicial si ya hay una ruta activa al cargar
    const initialRoute = this.router.url.split('?')[0] || '/home';
    this.currentRouteName = ROUTE_NAMES[initialRoute as keyof typeof ROUTE_NAMES] || 'b';
  }

  getUserAuthenticaded():void {
    this.fullName = this.authService.getUserData()?.user.name + ' ' + this.authService.getUserData()?.user.last_name;
    this.rolName = this.authService.getUserData()?.user.role.name!;
  }
}
