import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="alert"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-2xl shadow-lg w-96">
        <div class="flex flex-col items-center">
          <!-- Icono de error ajustado -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full mb-6"
            [ngClass]="alert.type ? 'bg-red-500' : 'bg-green-500'"
          >
            <!-- Icono de error -->
            <svg
              *ngIf="alert.type"
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="3"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>

            <!-- Icono de éxito -->
            <svg
              *ngIf="!alert.type"
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <!-- Título del mensaje de error -->
          <h6
            *ngIf="alert.type === true"
            class="text-lg font-bold text-gray-800 mb-4"
          >
            Mensaje de error
          </h6>
          <h6
            *ngIf="alert.type === false"
            class="text-lg font-bold text-gray-800 mb-4"
          >
            Mensaje de éxito
          </h6>
          <!-- Mensaje de error -->
          <p [innerHTML]="alert.message" class="text-center text-gray-600 text-md mb-8">
           
          </p>
          <button
            [ngClass]="{
              'bg-red-500 hover:bg-red-600': alert.type,
              'bg-green-500 hover:bg-green-600': !alert.type
            }"
            class="px-4 py-2 text-white rounded-lg mt-4"
            (click)="closeAlert()"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  `,
})
export class AlertComponent implements OnInit {
  alert: any;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alertState$.subscribe((alert) => {
      this.alert = alert;
    });
  }

  closeAlert() {
    this.alert = null;
  }
}
