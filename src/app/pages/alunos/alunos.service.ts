import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private ALUMOS_MOCK = [
    {
      id: 1,
      nome: 'Gabriel',
      email: 'gabriel@gmail.com',
    },
    {
      id: 2,
      nome: 'Adrian',
      email: 'adrian@gmail.com',
    },
    {
      id: 3,
      nome: 'Icaro',
      email: 'icaro@gmail.com',
    },
  ];

  constructor() {}

  getAlunos() {
    return this.ALUMOS_MOCK;
  }

  getAluno(id: number) {
    return this.ALUMOS_MOCK.find((x) => x.id == id);
  }
}
