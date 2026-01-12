import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { AuthServices } from "../../../services/auth/auth.services";
import { inject } from "@angular/core";

export const CanActivateAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthServices);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    authService.redirectToLogin();
    return false;
  }
};