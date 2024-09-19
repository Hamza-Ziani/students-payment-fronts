import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.authService.isAutenticated){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
