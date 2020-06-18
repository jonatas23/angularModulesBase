import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user: any = localStorage.user;

    console.log(user._token)

    if (user._token === null) {
      alert('Acesso restrito');
      this.router.navigate(['']);
      return false;
    } else {
      switch (user._role) {
        case 'admin':
          switch (state.url) {
            case '/admin':
              return true;
            case '/admin/dashboard':
              return true;
            default:
              alert('Acesso restrito');
              this.router.navigate(['']);
              return false;
          }

        case 'aluno':
          switch (state.url) {
            case '/alunos':
              return true;
            default:
              alert('Acesso restrito');
              this.router.navigate(['']);
              return false;
          }

        default:
          return false;
      }
    }
  }
}
