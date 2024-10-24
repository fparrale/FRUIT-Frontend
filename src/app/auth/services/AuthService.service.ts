import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators'; 

interface User {
    email: string;
    role: 'estudiante' | 'profesor';
  }

  export class AuthService {

    private users: User[] = [
      { email: 'profesor@example.com', role: 'profesor' },
      { email: 'estudiante@example.com', role: 'estudiante' }
    ];

    private currentUser: User | null = null;
  
    constructor() { }
  
    login(credentials: { email: string, password: string }): Observable<User | null> {
        const user = this.users.find(u => u.email === credentials.email);
    
        if (user) {
          if (credentials.email === 'profesor@example.com' && credentials.password === 'profesor123') {
            this.currentUser = user; 
            return of(user).pipe(delay(500)); 
          } else if (credentials.email === 'estudiante@example.com' && credentials.password === 'estudiante123') {
            this.currentUser = user; 
            return of(user).pipe(delay(500));
          }
        }
    
        return throwError(() => new Error('Credenciales inválidas')); 
      }
    
      getCurrentUser(): User | null {
        return this.currentUser; 
      }
    
      hasRole(role: string): boolean {
        const user = this.getCurrentUser();
        return user?.role === role;
      }
    
      canAccessRegister(): boolean {
        return !this.hasRole('estudiante');
      }
  }