import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions/questions/questions.component';

export const routes: Routes = [
    { path:   
   '', component: HomeComponent }, 
    {
      path: 'auth',
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'questions', component: QuestionsComponent },
      ]
    },
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
