import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit, OnDestroy {
  id: number = 0;
  $route: Subscription = new Subscription();
  aluno: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.$route = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.aluno = this.alunosService.getAluno(this.id);

      if (this.aluno == null) {
        this.router.navigate(['/nao-encontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
