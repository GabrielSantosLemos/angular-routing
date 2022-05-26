import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import Usuario from './usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario('', '');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  fazerLogin() {
    this.authService.autenticar(this.usuario);
  }
}
