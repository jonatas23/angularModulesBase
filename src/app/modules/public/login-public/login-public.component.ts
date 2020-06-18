import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../model/user/user';
import {prefix} from './../../../variable';

@Component({
  selector: 'app-login-public',
  templateUrl: './login-public.component.html',
  styleUrls: ['./login-public.component.scss']
})
export class LoginPublicComponent implements OnInit {

  constructor(private router: Router) {
  }

  prefix: string = '/' + prefix;
  username: string;
  password: any;
  loginInvalid: boolean;
  user: User;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.user = new User().new(this.username, this.password, this.username);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/admin']);

    } else if (this.username == 'user' && this.password == 'user') {
      this.user = new User().new(this.username, this.password, this.username);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/user']);

    } else if (this.username == 'prof' && this.password == 'prof') {
      this.user = new User().new(this.username, this.password, this.username);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/prof']);

    } else {
      this.loginInvalid = true;
    }
  }

}
