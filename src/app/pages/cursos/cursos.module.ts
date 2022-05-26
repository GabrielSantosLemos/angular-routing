import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosService } from 'src/app/pages/cursos/cursos.service';

import { DetalhesComponent } from './detalhes/detalhes.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursosRoutingModule } from './cursos.routing.module';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  imports: [CommonModule, CursosRoutingModule],
  declarations: [ListarComponent, DetalhesComponent, NaoEncontradoComponent],
  providers: [CursosService],
})
export class CursosModule {}
