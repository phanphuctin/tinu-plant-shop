import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    canActivate: [authGuard]
  },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.routes').then(m => m.loginRoutes)
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];
