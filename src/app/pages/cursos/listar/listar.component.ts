import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/pages/cursos/cursos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  cursos: any[] = [];
  pagina: number = 0;
  $router: Subscription = new Subscription();

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.$router = this.router.queryParams.subscribe((queryParams) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy() {
    this.$router.unsubscribe();
  }

  proximaPagina() {
    this.route.navigate(['/cursos'], {
      queryParams: {
        pagina: ++this.pagina,
      },
    });
  }
}
