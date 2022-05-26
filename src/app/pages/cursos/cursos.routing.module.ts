import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListarComponent } from './listar/listar.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  {
    path: '',
    component: ListarComponent,
  },
  {
    path: 'nao-encontrado',
    component: NaoEncontradoComponent,
  },
  {
    path: ':id',
    component: DetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
