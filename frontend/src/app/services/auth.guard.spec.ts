import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthService],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should canActivate return true when user is logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    const canActivate = guard.canActivate();

    expect(canActivate).toBeTruthy();
  });

  it('should canActivate return false and navigate to login when user is not logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');

    const canActivate = guard.canActivate();

    expect(canActivate).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
