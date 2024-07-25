import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FleetCoordinationService} from "../service/fleet-coordination.service";
import {Router} from "@angular/router";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-fleet-addition',
  imports: [
    CommonModule,
    FormsModule,
    DialogComponent,
  ],
  templateUrl: './fleet-addition.component.html',
  standalone: true,
  styleUrls: ['./fleet-addition.component.scss']
})
export class FleetAdditionComponent implements OnInit {

  //Data
  fleetManagers: string[] = [];

  fleet = {
    fleetId: '',
    location: '',
    fleetManager: ''
  };

  //Dialogs
  showMessageDialog: boolean = false;
  message: string = '';

  //Constructor
  constructor(private fleetCoordinationService: FleetCoordinationService, private router: Router) {
  }

  location: string = '';
  fleetManager: string = '';

  ngOnInit() {
    this.getFleetManagers();
  }

  getFleetManagers() {
    this.fleetCoordinationService.listFleetManagers().then((managers) => {
      this.fleetManagers = [...managers];
    }).catch((error) => {
      this.message = error;
      this.showMessageDialog = true;
    });

  }

  createFleet() {
    if (this.location === '' || this.fleetManager === '') {
      this.message = "Please fill in all fields.";
      this.showMessageDialog = true;
    } else {
        this.fleetCoordinationService.createNewFleet(this.location, this.fleetManager).then((fleet) => {
            this.message = "Fleet " + fleet.getFleetid()
                + " in " + fleet.getLocation()
                + " with fleet manager " + fleet.getFleetmanager() + " created successfully.";
            this.showMessageDialog = true;
        }).catch((error) => {
            this.message = error;
            this.showMessageDialog = true;
        });
    }
  }

  closeMessageDialog() {
    this.showMessageDialog = false;
    this.router.navigate(['fleets-overview']);
  }

  cancel() {
    this.router.navigate(['fleets-overview']);
  }

}
