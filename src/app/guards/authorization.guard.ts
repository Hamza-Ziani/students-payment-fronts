import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.authService.isAutenticated){
      let requiredRoles = route.data['roles'];
      let userRoles = this.authService.roles;
      for(let role of requiredRoles){
        if(userRoles.includes(role)){
          return true;
        }
      }

      return false;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
