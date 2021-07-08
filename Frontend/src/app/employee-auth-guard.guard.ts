import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthGuardGuard implements CanActivate {
  constructor(private authService:AuthServiceService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isEmployeeLoggedIn()){
        return true;
      }
      else{
        console.warn(this.authService.isEmployeeLoggedIn());
        this.authService.employeeLogin();
        console.warn(this.authService.isEmployeeLoggedIn());
        let s=state.url.toString();
        this.router.navigate(['/landing'], {queryParams:{returnUrl: state.url}});
        return false;
      }
  }
  
}
