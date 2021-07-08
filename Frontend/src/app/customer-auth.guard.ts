import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate {
  constructor(private authService:AuthServiceService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isCustomerLoggedIn()){
        console.warn(this.authService.isCustomerLoggedIn());
        
        return true;
      }
      else{
        console.warn(this.authService.isCustomerLoggedIn());
        this.authService.customerLogin();
        let s=state.url.toString();
        let l=s.length;
        console.warn("length: "+l);
        let id=s.substring(l - 1, l);
        console.warn("id hai: "+id);
        this.router.navigate(['/landing'], {queryParams:{returnUrl: state.url}});
        return false;
      }
  }
  
}
