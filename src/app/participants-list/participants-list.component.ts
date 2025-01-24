import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GameRoomsService } from '../game-rooms/services/game-rooms.service';
import { AlertService } from '../shared/alert.service';
import { LoadingService } from '../shared/loading.service';

export interface ParticipatingPlayersInterface {
  id: number;
  code: string;
  score: string;
  names: string;
  surnames: string;
  answered_questions: AnsweredQuestion[];
  duration: string;
}

export interface AnsweredQuestion {
  id: string;
  nfr: string;
  user_variable: string;
  feedback_variable: string;
  correct_variable: boolean;
  user_value: string;
  feedback_value: null;
  correct_value: boolean;
  user_recomend: string;
  feedback_recomend: null | string;
  correct_recomend: boolean;
}

@Component({
  selector: 'app-participants-list',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './participants-list.component.html',
  styleUrl: './participants-list.component.css',
})
export default class ParticipantsListComponent implements OnInit {
  participatingPlayers: ParticipatingPlayersInterface[] = [];

  paginatedData: ParticipatingPlayersInterface[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  showModal: boolean = false;
  selectedAnswers: AnsweredQuestion[] = [];

  gameHistoryPrint: ParticipatingPlayersInterface = {} as ParticipatingPlayersInterface;

  constructor(
    private gameRoomsService: GameRoomsService,
    private alertService: AlertService,
    private loadingService: LoadingService,
    // private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadingService.showLoading();
    const gameRoomId = Number(this.route.snapshot.paramMap.get('id'));
    this.gameRoomsService.getParticipatingPlayersByGameRoom(gameRoomId)
      .subscribe({
        next: (response) => {
          this.loadingService.hideLoading();
          this.participatingPlayers = response.data;
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
    this.paginatedData = this.participatingPlayers.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  nextPage() {
    if (
      this.currentPage * this.itemsPerPage <
      this.participatingPlayers.length
    ) {
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
    return Math.ceil(this.participatingPlayers.length / this.itemsPerPage);
  }

  openAnswersModal(answers: AnsweredQuestion[], gameHistory: ParticipatingPlayersInterface): void {
    this.selectedAnswers = answers;
    this.gameHistoryPrint = gameHistory;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedAnswers = [];
    this.gameHistoryPrint = {} as ParticipatingPlayersInterface;
  }

  printResults(): void {
    const printContent = document.getElementById('print-content');
    const gameHistory = this.gameHistoryPrint;
  
    const score = gameHistory.score;
    const names = gameHistory.names;
    const surnames = gameHistory.surnames;
    const duration = gameHistory.duration;
    const code_sala = gameHistory.code;
    
    if (printContent) {
      document.title = `Resultados - ${surnames} ${names} - ${code_sala}`;

      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);
  
      const doc = iframe.contentWindow?.document || iframe.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <html>
            <head>
            <title>Resultados - ${surnames} ${names} - ${code_sala}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 20px;
                  color: #4a5568;
                }
                .header {
                  margin-bottom: 20px;
                  border-bottom: 1px solid #e2e8f0;
                  position: relative;
                }
                .score-box {
                  position: absolute;
                  top: 0;
                  right: 10px;
                  padding: 10px;
                  border: 2px solid #4a5568;
                  font-weight: bold;
                  font-size: 16px;
                  text-align: center;
                  color: #4a5568;
                  background-color: #f1f5f9;
                }
                .font-bold {
                  font-weight: bold;
                }
                .text-gray-700 {
                  color: #4a5568;
                }
                .text-green-500 {
                  color: #48bb78;
                }
                .text-red-500 {
                  color: #f56565;
                }
                .text-sm {
                  font-size: 0.875rem;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="score-box">
                  SCORE<br>${score} / 100
                </div>
                <h2 class="font-bold text-gray-700">Resultado</h2>
                <p><strong>Nombres:</strong> ${names}</p>
                <p><strong>Apellidos:</strong> ${surnames}</p>
                <p><strong>Duración:</strong> ${duration}</p>
                <p><strong>Código de sala:</strong> ${code_sala}</p>
              </div>
              ${printContent.outerHTML}
            </body>
          </html>
        `);
        doc.close();
      }
  
      iframe.onload = () => {
        iframe.contentWindow?.print();
        document.body.removeChild(iframe);
      };
    } else {
      console.error('No se encontró el contenido a imprimir.');
    }
  }
}
