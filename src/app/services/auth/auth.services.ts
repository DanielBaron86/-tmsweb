import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../../models/user-models';
import e from 'express';


@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  keepLoggeddIn= false;

  logout() {
    this.#tokenString.set(null);
    if(!this.keepLoggeddIn){
      localStorage.removeItem('userToken');
    }
    this.router.navigate(['/login']);
  }

  redirectToLogin() {
      this.router.navigate(['/login']);
  }


  private http = inject(HttpClient);
  private router = inject(Router);
 
  readonly apiUrl = 'https://tmsapi.local/api/v1/users/login';
  readonly #tokenString = signal<string | null>(null);

  isAuthenticated = computed(() => this.#tokenString() !== null);

  login(username: string, password: string, keepLoggeddIn: boolean = false) {
    this.keepLoggeddIn = keepLoggeddIn;
    const body = { username:username, password:password };
    return this.http.post(this.apiUrl,
      body
      )
     .pipe(
      tap( (tokenString) =>{
        const response = tokenString as LoginResponse;
        this.#tokenString.set(response.Token);
        
        if(keepLoggeddIn){
          localStorage.setItem('userToken', response.Token);
        }
        this.router.navigate(['/main']);
      }
     )
      ).subscribe();

    }
  }    