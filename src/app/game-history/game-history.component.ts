import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/alert.service';
import { LoadingService } from '../shared/loading.service';
import { Router } from '@angular/router';
import { GameHistoryService } from './services/game-history.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-game-history',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './game-history.component.html',
  styleUrl: './game-history.component.css'
})
export default class GameHistoryComponent implements OnInit {
  gameHistory: any[] = [];
  paginatedData: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(
    private gameHistoryService: GameHistoryService,
    private alertService: AlertService, 
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getGameHistory();
  }

  getGameHistory() {
    this.loadingService.showLoading();
    this.gameHistoryService.getGameHistory().subscribe({
      next: (response) => {
        this.loadingService.hideLoading();
        this.gameHistory = response.data;
        this.updatePagination();
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(error.message, true);
      },
    });
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.gameHistory.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.gameHistory.length) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.gameHistory.length / this.itemsPerPage);
  }
}
