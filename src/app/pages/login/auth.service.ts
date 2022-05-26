import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  autenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  autenticar(usuario: Usuario) {
    if (usuario.nome === 'usuario' && usuario.senha === '123') {
      this.autenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.autenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  estaAutenticado() {
    return this.autenticado;
  }
}
