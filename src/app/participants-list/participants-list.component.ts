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
  fullNames: string;
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

  openAnswersModal(answers: any[]): void {
    this.selectedAnswers = answers;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedAnswers = [];
  }
}
