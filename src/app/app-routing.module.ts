import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LandingPageComponent } from '../modules/landing-page/landing-page/landing-page.component';
import { LoginPageComponent } from '../modules/login-page/login-page/login-page.component';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';
import { inject } from '@angular/core';
import { environment } from '../environments/environment';
import { FleetOverviewComponent } from '../modules/fleet-management/fleet-overview/fleet-overview.component';
import { CarAdditionComponent } from '../modules/fleet-management/car-addition/car-addition.component';
import { AvailableCarsListComponent } from '../modules/rental-management/available-cars-list/available-cars-list.component';
import { RentalCreationComponent } from '../modules/rental-management/rental-creation/rental-creation.component';
import { RentalOverviewComponent } from '../modules/rental-management/rental-overview/rental-overview.component';
import { CustomerRoutesGuardService } from '../core/customer-routes-guard/customer-routes-guard.service';
import { FleetCoordinatorRoutesGuardService } from '../core/fleet-coordinator-routes-guard/fleet-coordinator-routes-guard.service';
import { FleetManagerRoutesGuardService } from '../core/fleet-manager-routes-guard/fleet-manager-routes-guard.service';
import { ListCarRentalsComponent } from '../modules/rental-management/list-car-rentals/list-car-rentals.component';
import { EditFleetComponent } from "../modules/fleet-coordination/edit-fleet/edit-fleet.component";
import { FleetAdditionComponent } from "../modules/fleet-coordination/fleet-addition/fleet-addition.component";
import { FleetsOverviewComponent } from "../modules/fleet-coordination/fleets-overview/fleets-overview.component";

const canActivateAuthenticatedPage: CanActivateFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
  return inject(AuthGuardService).canActivateAuthenticatedPage();
};

const canActivateLoginPage: CanActivateFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
  return inject(AuthGuardService).canActivateLoginPage();
};

const canActivateCustomerRoutes: CanActivateFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
  return inject(CustomerRoutesGuardService).canActivateCustomerRoutes();
};

const canActivateFleetManagerRoutes: CanActivateFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
  return inject(FleetManagerRoutesGuardService).canActivateFleetManagementRoutes();
};

const canActivateFleetCoordinatorRoutes: CanActivateFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
  return inject(FleetCoordinatorRoutesGuardService).canActivateFleetCoordinatorRoutes();
}

const routes: Routes = [
  // Path to rental overview
  {
    path: 'rental-overview',
    component: RentalOverviewComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateCustomerRoutes],
  },

  // Path to rental creation
  {
    path: 'rental-creation',
    component: RentalCreationComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateCustomerRoutes],
  },

  // Path to available cars list
  {
    path: 'available-cars-list',
    component: AvailableCarsListComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateCustomerRoutes],
  },

  // Path to list car rentals
  {
    path: 'list-car-rentals',
    component: ListCarRentalsComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateFleetManagerRoutes]
  },

  // Path to fleet overview
  {
    path: 'fleet-overview',
    component: FleetOverviewComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateFleetManagerRoutes],
  },

  // Path to car addition
  {
    path: 'car-addition',
    component: CarAdditionComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateFleetManagerRoutes],
  },

  // Home Path
  {
    path: '',
    redirectTo: environment.pages.login_page,
    pathMatch: 'full',
  },

  // Path to login page
  {
    path: 'login-page',
    component: LoginPageComponent,
    canActivate: [canActivateLoginPage],
  },

  // Path to landing page
  {
    path: 'landing-page',
    component: LandingPageComponent,
    canActivate: [canActivateAuthenticatedPage],
  },

  // Path to fleets overview
  {
    path: 'fleets-overview',
    component: FleetsOverviewComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateFleetCoordinatorRoutes],
  },

  // Path to fleet addition
  {
    path: 'fleet-addition',
    component: FleetAdditionComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateFleetCoordinatorRoutes],
  },

  // Path to edit fleet
  {
    path: 'edit-fleet',
    component: EditFleetComponent,
    canActivate: [canActivateAuthenticatedPage, canActivateFleetCoordinatorRoutes],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})
export class AppRoutingModule {
  constructor() {}
}
