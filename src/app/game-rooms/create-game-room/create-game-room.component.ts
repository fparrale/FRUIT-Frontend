import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CreateRnfList,
  GameRoomRnf,
  createRnfGameRoomService,
} from '../interfaces/game-rooms';
import { GameRoomsService } from '../services/game-rooms.service';
import { LoadingService } from '../../shared/loading.service';
import { AlertService } from '../../shared/alert.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-create-game-room',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './create-game-room.component.html',
  styleUrl: './create-game-room.component.css',
})
export default class CreateGameRoomComponent implements OnInit {
  constructor(
    private gameRoomsService: GameRoomsService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router,
    private storageService: StorageService
  ) {}

  today: string = '';

  selectedDate: string | null = null;
  selectedHour: string | null = null;
  selectedMinute: string | null = null;

  hours: string[] = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  );
  minutes: string[] = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  );

  // durations: number[] = [5, 10, 15, 20, 30, 45, 60];
  // duration: number = 15;

  newRnf: CreateRnfList = {
    nfr: '',
    variable: '',
    feedback1: '',
    value: '',
    feedback2: '',
    recomend: '',
    other_recommended_values: '',
    feedback3: '',
    weightVarible: '',
    weightValue: '',
    weightRecomend: '',
    validar: '',
  };

  listRnf: Array<createRnfGameRoomService> = [];

  showModal: boolean = false;

  editIndex: number | null = null;

  fullDateTime: string = '';

  ngOnInit() {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  onNumberInput(event: Event, position: number): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (value === '') {
      this.updateWeightValue(position, '');
      return;
    }

    value = value.replace(',', '.');

    value = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

    if (!value.includes('.') && value.length > 1) {
      value = value[0] + '.' + value.slice(1);
    }

    if (value.includes('.')) {
      const [integer, decimals] = value.split('.');
      value = `${integer}.${decimals.slice(0, 2)}`;
    }

    if (value.startsWith('.')) {
      value = '0' + value;
    }

    input.value = value;
    this.updateWeightValue(position, value);
  }

  private updateWeightValue(position: number, value: string): void {
    if (position === 1) this.newRnf.weightVarible = value;
    if (position === 2) this.newRnf.weightValue = value;
    if (position === 3) this.newRnf.weightRecomend = value;
  }

  guardarRNF() {
    this.newRnf.validar = `${this.newRnf.weightVarible}/${this.newRnf.weightValue}/${this.newRnf.weightRecomend}`;

    const numbers = this.newRnf.validar
      .split('/')
      .map((num) => parseFloat(num.trim()));
    const total = numbers.reduce((sum, num) => sum + num, 0);

    if (total > 1) {
      this.alertService.showAlert(
        'La suma de los pesos debe ser igual a 1',
        true
      );
    } else {
      const { weightVarible, weightValue, weightRecomend, ...rnfToSave } =
        this.newRnf;

      if (this.editIndex !== null) {
        this.listRnf[this.editIndex] = rnfToSave;
        this.editIndex = null;
      } else {
        this.listRnf.push(rnfToSave);
      }

      this.newRnf = {
        nfr: '',
        variable: '',
        feedback1: '',
        value: '',
        feedback2: '',
        recomend: '',
        other_recommended_values: '',
        feedback3: '',
        validar: '',
        weightVarible: '',
        weightValue: '',
        weightRecomend: '',
      };

      this.showModal = false;
    }
  }

  onDelete(rnf: any) {
    const index = this.listRnf.findIndex((item) => item === rnf);

    if (index > -1) {
      this.listRnf.splice(index, 1);
    }
  }

  createGameRoomService(): void {
    if (this.listRnf.length === 0) {
      if (this.storageService.getItem() === 'en') {
        this.alertService.showAlert('No non-functional requirements have been added', true );
      } else {
        this.alertService.showAlert('No se han agregado requerimientos no funcionales', true );
      }
    } else {
      if (!this.submitDateTime()) return;

      const body: GameRoomRnf = {
        expiration_date: this.fullDateTime,
        questions: this.listRnf,
        language: this.storageService.getItem() || 'es',
      };

      this.loadingService.showLoading();
      this.gameRoomsService.createGameRoom(body).subscribe({
        next: (response) => {
          this.loadingService.hideLoading();
          this.alertService.showAlert(response.message, false);
          this.router.navigate(['/game-rooms']);
        },
        error: (error) => {
          this.loadingService.hideLoading();
          this.alertService.showAlert(error.message, true);
        },
      });
    }
  }

  onEdit(rnf: createRnfGameRoomService, index: number): void {
    this.newRnf = {
      nfr: rnf.nfr,
      variable: rnf.variable,
      feedback1: rnf.feedback1,
      value: rnf.value,
      feedback2: rnf.feedback2,
      recomend: rnf.recomend,
      other_recommended_values: rnf.other_recommended_values,
      feedback3: rnf.feedback3,
      validar: '',
      weightVarible: rnf.validar.split('/')[0],
      weightValue: rnf.validar.split('/')[1],
      weightRecomend: rnf.validar.split('/')[2],
    };

    this.editIndex = index;
    this.showModal = true;
  }

  openModal(): void {
    this.showModal = true;
    this.editIndex = null;

    this.newRnf = {
      nfr: '',
      variable: '',
      feedback1: '',
      value: '',
      feedback2: '',
      recomend: '',
      other_recommended_values: '',
      feedback3: '',
      validar: '',
      weightVarible: '',
      weightValue: '',
      weightRecomend: '',
    };
  }

  submitDateTime(): boolean {
    if (this.selectedDate && this.selectedHour && this.selectedMinute) {
      this.fullDateTime = `${this.selectedDate} ${this.selectedHour}:${
        this.selectedMinute
      }:${new Date().getSeconds()}`;
      return true;
    } else {
      if (this.storageService.getItem() === 'en') {
        this.alertService.showAlert('The end date is mandatory.', true);
        return false;
      } else
      this.alertService.showAlert('La fecha de finalizacion es obligatoria.', true);
      return false;
    }
  }
}
