import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthNService, UserProfile, UserRoles } from '../auth-n/auth-n.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FleetCoordinatorRoutesGuardService {
  /**
   * Redirects user to landing page if the user is not a fleet coordinator
   * @param router
   * @param authNService
   */
  constructor(
    private readonly router: Router,
    private readonly authNService: AuthNService
  ) {}

  async canActivateFleetCoordinatorRoutes() {
    const userProfile = await this.authNService.getUserProfile();
    return this.activateFleetCoordinatorRoutes(this.isFleetCoordinator(userProfile));
  }

  private activateFleetCoordinatorRoutes(isFleetCoordinator: boolean | undefined) {
    if (!isFleetCoordinator) {
      this.router.navigate([environment.pages.landing_page]).then();
      return false;
    }
    return true;
  }

  private isFleetCoordinator(user: UserProfile | null) {
    if (user !== null) {
      return user.roles.includes(UserRoles.FLEET_COORDINATOR);
    }
    return false;
  }
}
