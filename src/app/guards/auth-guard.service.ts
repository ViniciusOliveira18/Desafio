import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements CanActivate{


  constructor(private router: Router) { }
 

    canActivate(
      _route: ActivatedRouteSnapshot,
      _state: RouterStateSnapshot):Observable<boolean>| boolean
    {

      if (localStorage['token'] != null) {
        return true;
    } else {
        this.router.navigate(['/login']);
    }

    }
}
