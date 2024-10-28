import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { QuestionsService } from '../../questions/services/questions.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMobile: boolean = false;
  
  @Output() toggleSidenav = new EventEmitter<void>(); 

  constructor(private questionService: QuestionsService) {}

  toggleMenu() {
    this.toggleSidenav.emit();
  }

  againQuestionClear() {
    this.questionService.againQuestions({ refresh: true }); 
  }

}
