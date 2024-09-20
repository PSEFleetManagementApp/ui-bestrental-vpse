import { Component } from '@angular/core';
import { FleetManagementService } from '../service/fleet-management.service';
import { Car } from '../service/proto/api_specification_am_fleet_management_pb';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-fleet-overview',
  standalone: true,
  imports: [NgForOf, NgIf, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './fleet-overview.component.html',
  styleUrl: './fleet-overview.component.scss',
  providers: [FleetManagementService],
})
export class FleetOverviewComponent {
  fleetCars: VisualCar[] = [];
  fleetId: string | undefined;
  fleetManager: string | undefined;
  fleets: string[] = [];

  constructor(
    private fleetService: FleetManagementService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('fleetManager')) {
        this.fleetManager = <string>params.get('fleetManager');
      }
      if (params.get('fleetId')) {
        this.fleetId = <string>params.get('fleetId');
      }
    });
    this.getFleets();
    this.listCars();
  }

  getFleets() {
    if (this.fleetManager) {
      this.fleetService.getMyFleets(this.fleetManager).then(fleetIds => {
        this.fleets = [...fleetIds];
        if (this.fleets.length > 0 && this.fleetId == null) {
          this.fleetId = this.fleets[0];
          this.listCars();
        }
      });
    }
    return [];
  }

  change() {
    this.listCars();
  }

  showAddCar() {
    this.router.navigate(['/car-addition'], { queryParams: { fleetManager: this.fleetManager } });
  }

  removeCar(vin: string) {
    this.fleetService.removeCarFromFleet(vin).then(() => {
      this.listCars();
    });
  }

  viewCarRentals(vin: string) {
    // Hier navigieren wir zur 'list-car-rentals' Seite und übergeben die VIN als Parameter
    this.router.navigate(['/list-car-rentals'], { queryParams: { vin: vin } });
  }

  private listCars() {
    if (this.fleetId) {
      this.fleetService.listCarsInFleet(this.fleetId).then((loadedCars: Car[]) => {
        this.fleetCars = [];
        for (const fleetCar of loadedCars) {
          this.fleetCars.push(this.mapCarToVisual(fleetCar));
        }
      });
    }
  }

  private mapCarToVisual(fleetCar: Car): VisualCar {
    return {
      vin: fleetCar.getVin()!.getVin(),
      brand: fleetCar.getBrand(),
      model: fleetCar.getModel(),
    };
  }
}

interface VisualCar {
  vin: string;
  brand: string;
  model: string;
}
