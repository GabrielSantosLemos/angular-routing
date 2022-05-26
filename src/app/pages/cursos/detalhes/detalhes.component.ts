import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/pages/cursos/cursos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit, OnDestroy {
  id: number = 0;
  $route: Subscription = new Subscription();
  curso: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.$route = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.cursosService.getCurso(this.id);

      if (this.curso == null) {
        console.log('dfsgsdf');
        this.router.navigate(['/cursos/nao-encontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }
}
