import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos.routing.module';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosGuard } from 'src/app/pages/alunos/alunos.guard';
import { AlunosDeactivateGuard } from './alunos-deactivate.guard';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, AlunosRoutingModule],
  declarations: [ListarComponent, DetalhesComponent, EditarComponent],
  providers: [AlunosGuard, AlunosDeactivateGuard, AlunosService],
})
export class AlunosModule {}
