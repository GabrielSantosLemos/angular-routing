import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private CURSOS_MOCK: any[] = [
    {
      id: 1,
      nome: 'Angular',
    },
    {
      id: 2,
      nome: 'Java',
    },
  ];

  constructor() {}

  getCursos() {
    return this.CURSOS_MOCK;
  }

  getCurso(id: number) {
    return this.CURSOS_MOCK.find((x) => x.id == id);
  }
}
