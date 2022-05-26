import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { EditarComponent } from './editar/editar.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<EditarComponent> {
  constructor(private authService: AuthService, private router: Router) {}

  canDeactivate(
    component: EditarComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(component, route, state);

    return component.descartarAlteracoes();
  }
}
