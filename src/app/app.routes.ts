import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
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
        canActivate: [AuthGuard],
      },
      {
        path: 'questions',
        loadComponent: () => import('./questions/questions/questions.component'),
        canActivate: [AuthGuard],
      },
      {
        path: 'game',
        loadComponent: () => import('./game/game.component'),
        canActivate: [AuthGuard],
      },
      {
        path: 'quiz-game',
        loadComponent: () => import('./questions/questions/questions.component'),
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
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
    canActivate: [AuthenticatedGuard],
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