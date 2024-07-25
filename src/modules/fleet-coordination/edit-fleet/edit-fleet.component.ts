import { Component } from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {FleetCoordinationService} from "../service/fleet-coordination.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Fleet} from "../service/proto/api_specification_am_fleet_coordination_pb";

@Component({
  selector: 'app-edit-fleet',
  standalone: true,
  imports: [
    DialogComponent,
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-fleet.component.html',
  styleUrl: './edit-fleet.component.scss'
})
export class EditFleetComponent {

  constructor(private fleetCoordinationService: FleetCoordinationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  fleet: VisualFleet  = {
    fleetId: '',
    location: '',
    fleetManager: ''
  };

  fleetManagers: string[] = [];
  newFleetManager: string = '';

  showMessageDialog: boolean = false;
  message: string = '';

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
        if (params.get('fleetId')) {
            this.fleet.fleetId = <string>params.get('fleetId')!;
        }
        if (params.get('location')) {
            this.fleet.location = <string>params.get('location')!;
        }
        if (params.get('fleetManager')) {
            this.fleet.fleetManager = <string>params.get('fleetManager')!;
            this.newFleetManager = this.fleet.fleetManager;
        }
      this.getFleetManagers();
    });
  }

  getFleetManagers() {
    this.fleetCoordinationService.listFleetManagers().then((fleetManagers: string[]) => {
        this.fleetManagers = [...fleetManagers];
    }).catch((error) => {
        this.message = error;
        this.showMessageDialog = true;
    });
  }

  closeMessageDialog() {
    this.showMessageDialog = false;
    this.router.navigate(['/fleets-overview']);
  }

  cancel() {
    this.router.navigate(['/fleets-overview']);
  }

  saveChanges() {
    let editedFleet = new Fleet();
    editedFleet.setFleetid(this.fleet.fleetId);
    editedFleet.setLocation(this.fleet.location);
    editedFleet.setFleetmanager(this.fleet.fleetManager);
    this.fleetCoordinationService.changeFleetManager(editedFleet, this.newFleetManager).then((confirm) => {
        if (confirm) {
            this.message = 'Fleet manager successfully changed to ' + this.newFleetManager + '.';
            this.showMessageDialog = true;
        } else {
            this.message = 'Error while changing fleet manager.';
            this.showMessageDialog = true;
        }

    }).catch((error) => {
        this.message = error;
        this.showMessageDialog = true;
    });
  }

}

interface VisualFleet {
    fleetId: string,
    location: string,
    fleetManager: string
}