import { Component, OnInit } from '@angular/core';
import { GameRoomsService } from './services/game-rooms.service';
import { AlertService } from '../shared/alert.service';
import { LoadingService } from '../shared/loading.service';
import { CommonModule } from '@angular/common';
import { json } from 'node:stream/consumers';

@Component({
  selector: 'app-game-rooms',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './game-rooms.component.html',
  styleUrl: './game-rooms.component.css'
})
export default class GameRoomsComponent implements OnInit{
  gameRooms: any[] = [];
  paginatedData: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  selectedFile: File | null = null;

  constructor(
    private gameRoomsService: GameRoomsService,
    private alertService: AlertService, 
    private loadingService: LoadingService, 
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

  onDelete(gameRooms: any) {
    let status: boolean = false;
    if(gameRooms.status == true){
      status = false;
    }else{
      status = true;
    }
    this.loadingService.showLoading();
    this.gameRoomsService.deleteGameRoom(gameRooms.id, status).subscribe({
      next: (response) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(response.message, false);
        this.getGameRooms();
      },
      error: (error) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(error.message, true);
      },
    });
  }

  onEdit(gameRooms: any) {
    console.log('onEdit', gameRooms.id);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

  if (input.files && input.files.length > 0) {
    const selectedFile = input.files[0];

    const allowedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
    if (!allowedTypes.includes(selectedFile.type)) {
      this.alertService.showAlert('Solo se permiten archivos Excel (.xls, .xlsx)', true);
      input.value = '';
      return;
    }
    
    this.loadingService.showLoading();
    this.gameRoomsService.uploadExcel(selectedFile).subscribe({
      next: (response) => {
        this.loadingService.hideLoading();
        this.alertService.showAlert(response.message, false);
        this.getGameRooms();
        input.value = '';
      },
      error: (error) => {
        this.loadingService.hideLoading();
        input.value = '';
        this.alertService.showAlert('Error al subir el archivo', true);
        console.error('Error al subir archivo:', error);
      },
    });
  }
  }

  // onUpload(): void {
  //   if (!this.selectedFile) return;

  //   this.gameRoomsService.uploadExcel(this.selectedFile).subscribe({
  //     next: (response) => {
  //       // Mostrar mensaje de éxito
  //       this.alertService.showAlert('Archivo subido exitosamente', false);
  //       console.log('Respuesta del servidor:', response);
  //     },
  //     error: (error) => {
  //       this.alertService.showAlert('Error al subir el archivo', true);
  //       console.error('Error al subir archivo:', error);
  //     },
  //   });
  // }

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
