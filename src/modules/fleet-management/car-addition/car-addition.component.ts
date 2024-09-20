import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FleetManagementService } from '../service/fleet-management.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-car-addition',
  standalone: true,
  imports: [NgForOf, NgIf, RouterLink, FormsModule],
  providers: [FleetManagementService],

  templateUrl: './car-addition.component.html',
  styleUrl: './car-addition.component.scss',
})
export class CarAdditionComponent {
  fleetManager: string | undefined;
  fleets: string[] = [];
  fleetId: string | undefined;

  constructor(
    private fleetService: FleetManagementService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('fleetManager')) {
        this.fleetManager = <string>params.get('fleetManager');
      }
    });
    this.getFleets()
  }

  getFleets() {
    if (this.fleetManager != null) {
      this.fleetService.getMyFleets(this.fleetManager).then(fleetIds => {
        this.fleets = [...fleetIds];
        if (this.fleets.length > 0) {
          this.fleetId = this.fleets[0];
        }
      });
    }
    return [];
  }

  addCarToFleet(location: string, vin: string, fleetId: string | undefined) {
    if (fleetId) {
      this.fleetService.addCarToFleet(location, vin, fleetId).then();
      this.router.navigate(['/fleet-overview'], {queryParams: {fleetManager: this.fleetManager, fleetId: this.fleetId}});
    }
   }
}
