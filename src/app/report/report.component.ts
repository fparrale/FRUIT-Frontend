import { Component, OnInit } from '@angular/core';
import { GameRoomsService } from '../game-rooms/services/game-rooms.service';
import { AlertService } from '../shared/alert.service';
import { LoadingService } from '../shared/loading.service';
import { CommonModule } from '@angular/common';
import { json } from 'node:stream/consumers';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export default class ReportComponent implements OnInit {
  gameRooms: any[] = [];
  paginatedData: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  selectedFile: File | null = null;

  constructor(
    private gameRoomsService: GameRoomsService,
    private alertService: AlertService, 
    private loadingService: LoadingService,
    private serviceStorage: StorageService
  ) {}

  ngOnInit(): void {
    this.getGameRooms();
  }

  getGameRooms() {
    this.loadingService.showLoading();
    this.gameRoomsService.getGameRooms().subscribe({
      next: (response) => {
        this.loadingService.hideLoading();
        this.gameRooms = response.data;
        this.updatePagination();
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(error.message, true);
      },
    });
  }

  onGenerateReportGameRoom(gameRooms: any) {
    this.loadingService.showLoading();
    this.gameRoomsService.generateReportGameRoom(gameRooms.id, this.serviceStorage.getItem() || 'es').subscribe({
      next: (response) => {
        const contentDisposition = response.headers.get('Content-Disposition');
        let fileName = 'reporte.pdf';
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="(.+)"/);
          if (match) {
            fileName = match[1];
          }
        }
        const blob = response.body as Blob;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        this.loadingService.hideLoading();
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
    this.paginatedData = this.gameRooms.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.gameRooms.length) {
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
    return Math.ceil(this.gameRooms.length / this.itemsPerPage);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return date.toLocaleDateString('es-ES', options).replace(',', '');
  }
}
