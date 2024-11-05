import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { QuestionsService } from '../../questions/services/questions.service';
import { HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMobile: boolean = false;
  currentRoute: string = '';

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private questionService: QuestionsService,  private router: Router) {}

  toggleMenu() {
    this.toggleSidenav.emit();
  }

  againQuestionClear() {
    this.questionService.againQuestions({ refresh: true });
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url.split('/')[1];
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects.split('/')[1];
      });
  }
}
