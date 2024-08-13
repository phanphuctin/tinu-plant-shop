import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

// @Injectable()
// class PermissionsService {
//   canActivate(currentUser: UserToken, userId: string): boolean {
//     return true;
//   }
//   canMatch(currentUser: UserToken): boolean {
//     return true;
//   }
// }

// export const authGuard: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
// ) => {
//     const _authS = inject(AuthService);
//     const _router = inject(Router);
//     console.log(`%c_authS.isIdenticated() = `, `background-color: yellow`, _authS.isIdenticated())
//     if (_authS.isIdenticated()) {
//         return true

//     } else {
//         _router.navigate(['login'])
//         return false;
//     }
// }

@Injectable({
    providedIn: 'root'
})
export class authGuard implements CanActivate {
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }
}