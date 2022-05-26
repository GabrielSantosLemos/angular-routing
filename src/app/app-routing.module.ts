import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './pages/alunos/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./pages/alunos/alunos.module').then((m) => m.AlunosModule),
    canActivate: [AuthGuard],
  },
  // { path: '', redirectTo: '/alunos', pathMatch: 'full' },
  // { path: '**', component: <component-name> }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
