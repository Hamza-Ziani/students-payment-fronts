import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users : any = {
    admin : {password:'123', roles:['ADMIN','STUDENT']},
    user : {password:'123', roles:['STUDENT']},
  }

  username :any;
  isAutenticated :boolean = false;
  roles :any = [];

  constructor(private router: Router) { }

  login(username: string, password: string):boolean {
    if(this.users[username] && this.users[username].password === password) {
      this.isAutenticated = true;
      this.username = username;
      this.roles = this.users[username].roles;
      return true;
    }else{
      return false;
    }
  }
}
