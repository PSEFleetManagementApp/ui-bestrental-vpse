import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthNService, UserProfile, UserRoles } from '../../../core/auth-n/auth-n.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  protected authNStateSubscription?: Subscription;
  protected userProfile: UserProfile | undefined | null;
  protected isLoggedIn: boolean | undefined;

  constructor(protected readonly authNService: AuthNService) {}

  async ngOnInit() {
    // watch changes of authentication state
    this.authNStateSubscription = this.authNService.authNStateWatcher().subscribe(async (isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.userProfile = await this.authNService.getUserProfile();
    });

    this.isLoggedIn = await this.authNService.getLoginStatus();
    this.userProfile = await this.authNService.getUserProfile();
  }

  ngOnDestroy() {
    this.authNStateSubscription?.unsubscribe();
  }

  isCustomer() {
    if (this.userProfile !== undefined && this.userProfile !== null) {
      return this.userProfile.roles.includes(UserRoles.CUSTOMER);
    }
    return false;
  }

  isFleetManager() {
    if (this.userProfile !== undefined && this.userProfile !== null) {
      return this.userProfile.roles.includes(UserRoles.FLEET_MANAGER);
    }
    return false;
  }

  isFleetCoordinator() {
    // TODO: Implement this method
    return false;
  }
}
