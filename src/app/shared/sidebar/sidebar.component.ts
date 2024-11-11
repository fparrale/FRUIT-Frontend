import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../auth/services/AuthService.service';
import { GameDataParamsService } from '../../game/params/game-data-params.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = true;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private observer: BreakpointObserver,
    private authService: AuthService,
    private gameDataParamsService: GameDataParamsService,
    private router: Router
  ) {}

  // ngOnInit() {
  //   this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
  //     if (screenSize.matches) {
  //       this.isMobile = true;
  //       this.isCollapsed = this.isMobile;
  //     } else {
  //       this.isMobile = false;
  //     }
  //   });
  // }

  // togleMenuMobile() {
  //   if (this.isMobile) {
  //     this.sidenav.toggle();
  //     this.isCollapsed = false;
  //     this.toggleSidenav.emit();
  //   }

  //   if (!this.isMobile) {
  //     this.sidenav.open();
  //     this.isCollapsed = !this.isCollapsed;
  //     this.toggleSidenav.emit();
  //   }
  // }

  logout(): void {
    this.authService.logout();
    this.gameDataParamsService.clearGameDataLocalStorage();
  }

  isRouteActive(): boolean {
    const rutasActivas = ['/game', '/quiz-game'];
    return rutasActivas.some(ruta => this.router.isActive(ruta, false));
  }
}
