import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { quizGameGuard } from './core/guards/game/quiz-game.guard';
import { roleAdminGuard } from './core/guards/role/role-admin.guard';
import { roleTeacherGuard } from './core/guards/role/role-teacher.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
    canActivate: [AuthenticatedGuard],
  },
  {
    path: '',
    loadComponent: () => import('./shared/layout/layout.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./shared/home-question/home-question.component'),
        canActivate: [AuthGuard],
      },
      {
        path: 'users',
        loadComponent: () => import('./users/users.component'),
        canActivate: [AuthGuard, roleAdminGuard],
      },
      {
        path: 'questions',
        loadComponent: () => import('./questions/questions/questions.component'),
        canActivate: [AuthGuard],
      },
      {
        path: 'game',
        loadComponent: () => import('./game/game.component'),
        canActivate: [AuthGuard, quizGameGuard],
      },
      {
        path: 'quiz-game',
        loadComponent: () => import('./questions/questions/questions.component'),
        canActivate: [AuthGuard],
      },
      { path: 'results', 
        loadComponent: () => import('./results/results.component'),
        canActivate: [AuthGuard],
      },
      { path: 'game-history', 
        loadComponent: () => import('./game-history/game-history.component'),
        canActivate: [AuthGuard],
      },
      { path: 'game-rooms', 
        loadComponent: () => import('./game-rooms/game-rooms.component'),
        canActivate: [AuthGuard, roleTeacherGuard],
      },
      {
        path: 'practice-game',
        loadComponent: () => import('./practice-questions/practice-questions.component').then(m => m.PracticeQuestionsComponent),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path : '**',
    redirectTo: 'home',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}