import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthNService, UserProfile, UserRoles } from '../auth-n/auth-n.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustomerRoutesGuardService {
  /**
   * Redirects user to landing page in a case that the user is not customer
   * @param router
   * @param authNService
   */
  constructor(
    private readonly router: Router,
    private readonly authNService: AuthNService
  ) {}

  async canActivateCustomerRoutes() {
    const userProfile = await this.authNService.getUserProfile();
    return this.activateCustomerRoutes(this.isCustomer(userProfile));
  }

  private activateCustomerRoutes(isCustomer: boolean | undefined) {
    if (!isCustomer) {
      this.router.navigate([environment.pages.landing_page]).then();
      return false;
    }
    return true;
  }

  private isCustomer(user: UserProfile | null) {
    if (user !== null) {
      return user.roles.includes(UserRoles.CUSTOMER);
    }
    return false;
  }
}
