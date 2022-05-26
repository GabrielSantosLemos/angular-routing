import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  alunos: any[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }
}
