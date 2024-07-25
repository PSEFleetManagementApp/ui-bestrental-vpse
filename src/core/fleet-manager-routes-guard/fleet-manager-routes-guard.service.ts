import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthNService, UserProfile, UserRoles } from '../auth-n/auth-n.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FleetManagerRoutesGuardService {
  /**
   * Redirects user to landing page in a case that the user is not fleet manager
   * @param router
   * @param authNService
   */
  constructor(
    private readonly router: Router,
    private readonly authNService: AuthNService
  ) {}

  async canActivateFleetManagementRoutes() {
    const userProfile = await this.authNService.getUserProfile();
    return this.activateFleetManagementRoutes(this.isFleetManager(userProfile));
  }

  private activateFleetManagementRoutes(isFleetManager: boolean | undefined) {
    if (!isFleetManager) {
      this.router.navigate([environment.pages.landing_page]).then();
      return false;
    }
    return true;
  }

  private isFleetManager(user: UserProfile | null) {
    if (user !== null) {
      return user.roles.includes(UserRoles.FLEET_MANAGER);
    }
    return false;
  }
}
