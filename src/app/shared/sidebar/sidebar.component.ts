import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from "../navbar/navbar.component";
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from "../../questions/questions/questions.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NavbarComponent, MatSidenavModule, MatListModule, MatIconModule, RouterModule, CommonModule, QuestionsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  @Output() toggleSidenav = new EventEmitter<void>();


  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
        this.isCollapsed = this.isMobile;
      } else {
        this.isMobile = false;
      }
    });
  }

  togleMenuMobile() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
      this.toggleSidenav.emit();
    }

    if(!this.isMobile){
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
      this.toggleSidenav.emit();
    }
  }

}
