import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { NvbarService } from '../services/nvbar.service';

import { of as observableOf , Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private nvbarserv: NvbarService, private router: Router) {}
  
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.nvbarserv.isLoggedIn){
      console.log("isloggedin:",this.nvbarserv.isLoggedIn);
      //this.router.navigate(['/crud']);
      return observableOf(true);

    }else{
      console.log("isloggedin:",this.nvbarserv.isLoggedIn);
      this.router.navigate(['/about']);
      return observableOf(false);
    }
  }
}
