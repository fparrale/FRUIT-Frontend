import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions/questions/questions.component';
import { HomeQuestionComponent } from './shared/home-question/home-question.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: '', component: HomeQuestionComponent }, // Ruta por defecto
      { path: 'find', component: QuestionsComponent },
      { 
        path: 'auth', 
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'questions', component: QuestionsComponent }
        ] 
      },
    ] 
  }
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
