import { Component, Input, OnInit } from '@angular/core';
import { AuthNService, UserProfile } from '../../../../core/auth-n/auth-n.service';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrl: './account-button.component.scss',
})
export class AccountButtonComponent implements OnInit {
  protected userProfile: UserProfile | undefined | null;
  protected isLoggedIn: boolean | undefined;

  constructor() {}

  @Input() authNService!: AuthNService;

  async ngOnInit() {
    this.isLoggedIn = await this.authNService.getLoginStatus();
    this.userProfile = await this.authNService.getUserProfile();
  }

  protected async onLoginButtonClick() {
    await this.authNService.login();
  }

  protected async onLogoutButtonClick() {
    this.authNService.logout();
  }

  protected onAccountButtonClick() {
    this.authNService.openAccountManager();
  }
}
