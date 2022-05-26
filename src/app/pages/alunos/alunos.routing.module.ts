import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from 'src/app/pages/alunos/alunos.guard';
import { AlunosDeactivateGuard } from './alunos-deactivate.guard';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: ListarComponent,
    canActivateChild: [AlunosGuard],
    children: [
      {
        path: 'criar',
        component: EditarComponent,
      },
      {
        path: ':id',
        component: DetalhesComponent,
      },
      {
        path: ':id/editar',
        component: EditarComponent,
        canDeactivate: [AlunosDeactivateGuard],
      },
      // { path: '', redirectTo: '/alunos', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
