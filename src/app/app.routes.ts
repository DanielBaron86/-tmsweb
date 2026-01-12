import { Routes } from '@angular/router';
import { CanActivateAuthGuard } from './components/auth/guards/can-activate';

export const routes: Routes = [
   {
      path: '', redirectTo: '/login', pathMatch: 'full'
   },
   {
    path: 'login', loadComponent: () => import('./components/auth/sign-in-component/sign-in-component').then(m => m.SignInComponent),
   },
   {
      path: 'main', loadComponent: () => import('./components/main-page/main-page').then(m => m.MainPage),
      canActivate: [CanActivateAuthGuard],
   },
   {
    path: 'users', loadComponent: () => import('./pages/users-component/users-component').then(m => m.UsersComponent),
    canActivate: [CanActivateAuthGuard],
    children: [
      {
         path: 'profile', loadComponent: () => import('./pages/profile-component/profile-component').then(m => m.ProfileComponent),
      }
    ]
   },
   {
      path: '404', loadComponent: () => import('./pages/page404/page404').then(m => m.Page404),
   },
   {
      path: '**', redirectTo: '/404'
   },
];
