import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const soloPublicGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  if (!authService.token) return true;

  const contactsPath = router.parseUrl("/contacts");
  return new RedirectCommand(contactsPath, {
    skipLocationChange: false,
  });
};