import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Question } from '../interfaces/Questions';
import { QuestionsService } from '../services/questions.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [DragDropModule, CommonModule, HttpClientModule, MatButtonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];
  currentQuestion: Question | undefined;
  currentQuestionIndex = 0;
  questionWords: string[] = [];
  variable: string[] = [];
  feedback1: string[] = [];
  value: string[] = [];
  feedback2: string[] = [];
  recomend: string[] = [];
  feedback3: string[] = [];
  validar: string[] = [];
  currentDraggingItem : string[] = [];

  private againQuestionSubscription: Subscription | undefined;

  answers: { variable: string[], value: string[], recomend: string[] }[] = []; 

  constructor(private questionService: QuestionsService) {
    
   }

  ngOnInit(): void {
    this.questionService.getQuestions('WWSmNx').subscribe(response => {
      this.questions = response.questions;
      this.showQuestion();
    });

    this.againQuestionSubscription = this.questionService.againQuestion$.subscribe((res) => {
      console.log('againQuestion$ called');
      this.againQuestion(); 
    });
    
    
  }

  showQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.questionWords.length = 0; 

 
    this.questionWords.push(...(this.currentQuestion?.nfr.split(' ') || [])); 
    if (this.answers[this.currentQuestionIndex]) {
      this.variable = this.answers[this.currentQuestionIndex].variable;
      this.value = this.answers[this.currentQuestionIndex].value;
      this.recomend = this.answers[this.currentQuestionIndex].recomend;
    } else {
      this.variable = [];
      this.value = [];
      this.recomend = [];
    }
  }

  againQuestion(): void {
    console.log("xd")
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.questionWords.length = 0; 

 
    this.questionWords.push(...(this.currentQuestion?.nfr.split(' ') || [])); 
    this.variable = [];
    this.value = [];
    this.recomend = [];
  }

  nextQuestion(): void {
    if (this.validateAnswer()) {
      this.clearContainers();
      if (this.currentQuestionIndex < this.questions.length) {
        this.showQuestion();
      } else {
        alert('¡Has terminado el juego!');
      }
    } else {
      alert('Respuesta incorrecta. Inténtalo de nuevo.');
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.showQuestion();
    } else {
      alert('No hay preguntas anteriores');
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // console.log(this.currentDraggingItem);

      // console.log(event.container.data);
      // transferArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex,
      // );

      if (this.currentDraggingItem) {
        const draggedItemIndex = event.previousContainer.data.indexOf(this.currentDraggingItem[0]);

        if (draggedItemIndex !== -1) {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            draggedItemIndex, 
            event.currentIndex
          );

        
        } else {
          console.error('El elemento arrastrado no se encontró en el contenedor anterior.');
        }
      }
 
      this.answers[this.currentQuestionIndex] = { 
        variable: this.variable, 
        value: this.value, 
        recomend: this.recomend 
      };
    }
  }

  onDragMove(item: string) {
    this.currentDraggingItem.length = 0;
    this.currentDraggingItem.push(item);
  }
  

  validateAnswer(): boolean {
    console.log(this.variable);
    console.log(this.value);
    console.log(this.recomend);
    console.log(this.currentQuestion?.variable);
    console.log(this.currentQuestion?.value);
    console.log(this.currentQuestion?.recomend);
    console.log(this.questionWords);
    const correctVariableArray = this.currentQuestion?.variable.split(' '); 

    const isVariableCorrect = 
      this.variable.length === correctVariableArray?.length && 
      this.variable.every((word, index) => word === correctVariableArray[index]);
    return isVariableCorrect;
  }

  clearContainers(): void {
    this.currentQuestionIndex++;
    this.variable = [];
    this.value = [];
    this.recomend = [];
  }

  ngOnDestroy() {
    if (this.againQuestionSubscription) {
      this.againQuestionSubscription.unsubscribe();
    }
  }

}
