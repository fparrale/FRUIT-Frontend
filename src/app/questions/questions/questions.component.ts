import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Question } from '../interfaces/Questions';
import { QuestionsService } from '../services/questions.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GameDataParamsService } from '../../game/params/game-data-params.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [DragDropModule, CommonModule, HttpClientModule, MatButtonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
  providers: [QuestionsService]
})
export default class QuestionsComponent implements OnInit {

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

  answers: { variable: string[], value: string[], recomend: string[], availableWords: string[] }[] = []; 

  constructor(private questionService: QuestionsService, private router: Router, private gameDataParamsService: GameDataParamsService) {}

  ngOnInit(): void {
    
    const gameDataParams = this.gameDataParamsService.getGameData();
    
    if(gameDataParams != null){
      this.questions = gameDataParams;
      this.showQuestion();
    }else{
      const dataGameStorage = this.gameDataParamsService.getGameDataLocalStorage();

      if(dataGameStorage != null){
        this.questions = dataGameStorage;
        this.showQuestion();
      }
    }
    //this.showQuestion();
  
   
    // this.questionService.getQuestions('WWSmNx').subscribe(response => {
    //   this.questions = response.questions;
    //   this.showQuestion();
    // });

    this.againQuestionSubscription = this.questionService.againQuestion$.subscribe((res) => {
      console.log('againQuestion$ called');
      this.againQuestion(); 
    });
    
    
  }

  showQuestion(): void {
    // this.currentQuestion = this.questions[this.currentQuestionIndex];
    // this.questionWords.length = 0; 

 
    // this.questionWords.push(...(this.currentQuestion?.nfr.split(' ') || [])); 
    // if (this.answers[this.currentQuestionIndex]) {
    //   this.variable = this.answers[this.currentQuestionIndex].variable;
    //   this.value = this.answers[this.currentQuestionIndex].value;
    //   this.recomend = this.answers[this.currentQuestionIndex].recomend;
    // } else {
    //   this.variable = [];
    //   this.value = [];
    //   this.recomend = [];
    // }
    this.currentQuestion = this.questions[this.currentQuestionIndex];

    // Verifica si hay un estado guardado para la pregunta actual
    if (this.answers[this.currentQuestionIndex]) {
      this.variable = this.answers[this.currentQuestionIndex].variable;
      this.value = this.answers[this.currentQuestionIndex].value;
      this.recomend = this.answers[this.currentQuestionIndex].recomend;
      this.questionWords = this.answers[this.currentQuestionIndex].availableWords;
    } else {
      // Si no hay estado guardado, inicializa los valores
      this.variable = [];
      this.value = [];
      this.recomend = [];
      this.questionWords = [...(this.currentQuestion?.nfr.split(' ') || [])]; // Copia de las palabras originales
      this.answers[this.currentQuestionIndex] = {
        variable: this.variable,
        value: this.value,
        recomend: this.recomend,
        availableWords: this.questionWords,
      };
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
      //alert('Respuesta incorrecta. Inténtalo de nuevo.');
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
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   // console.log(this.currentDraggingItem);

    //   // console.log(event.container.data);
    //   // transferArrayItem(
    //   //   event.previousContainer.data,
    //   //   event.container.data,
    //   //   event.previousIndex,
    //   //   event.currentIndex,
    //   // );

    //   if (this.currentDraggingItem) {
    //     const draggedItemIndex = event.previousContainer.data.indexOf(this.currentDraggingItem[0]);

    //     if (draggedItemIndex !== -1) {
    //       transferArrayItem(
    //         event.previousContainer.data,
    //         event.container.data,
    //         draggedItemIndex, 
    //         event.currentIndex
    //       );

        
    //     } else {
    //       console.error('El elemento arrastrado no se encontró en el contenedor anterior.');
    //     }
    //   }
 
    //   this.answers[this.currentQuestionIndex] = { 
    //     variable: this.variable, 
    //     value: this.value, 
    //     recomend: this.recomend 
    //   };
    // }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
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
      
      // Guarda el estado actual de las respuestas y las palabras disponibles
      this.answers[this.currentQuestionIndex] = { 
        variable: this.variable, 
        value: this.value, 
        recomend: this.recomend,
        availableWords: this.questionWords
      };
    }
  }

  onDragMove(item: string) {
    this.currentDraggingItem.length = 0;
    this.currentDraggingItem.push(item);
  }
  

  validateAnswer(): boolean {
    // console.log(this.variable);
    // console.log(this.value);
    // console.log(this.recomend);
    // console.log(this.currentQuestion?.variable);
    // console.log(this.currentQuestion?.value);
    // console.log(this.currentQuestion?.recomend);
    // console.log(this.questionWords);
    // const correctVariableArray = this.currentQuestion?.variable.split(' '); 

    // const isVariableCorrect = 
    //   this.variable.length === correctVariableArray?.length && 
    //   this.variable.every((word, index) => word === correctVariableArray[index]);
    // return isVariableCorrect;

  const correctVariableArray = this.currentQuestion?.variable.split(' ');
  const correctValueArray = this.currentQuestion?.value.split(' ');
  //const correctRecomendArray = this.currentQuestion?.recomend.split(' ');

  const isVariableCorrect = 
    this.variable.length === correctVariableArray?.length && 
    this.variable.every((word, index) => word === correctVariableArray[index]);

  const isValueCorrect = 
    this.value.length === correctValueArray?.length && 
    this.value.every((word, index) => word === correctValueArray[index]);

  // const isRecomendCorrect = 
  //   this.recomend.length === correctRecomendArray?.length && 
  //   this.recomend.every((word, index) => word === correctRecomendArray[index]);

  if (!isVariableCorrect) {
    alert(this.currentQuestion?.feedback1 || 'Feedback para variable incorrecta.');
  } else if (!isValueCorrect) {
    alert(this.currentQuestion?.feedback2 || 'Feedback para valor incorrecto.');
  }
  // } else if (!isRecomendCorrect) {
  //   alert(this.currentQuestion?.feedback3 || 'Feedback para recomendación incorrecta.');
  // }

  return isVariableCorrect && isValueCorrect;
  //&& isRecomendCorrect;
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
