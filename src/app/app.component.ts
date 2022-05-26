import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (resultado) => (this.mostrarMenu = resultado)
    );
  }
}
