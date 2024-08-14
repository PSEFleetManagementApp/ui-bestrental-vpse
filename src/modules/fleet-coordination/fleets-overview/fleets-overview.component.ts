import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, SlicePipe} from "@angular/common";
import {FleetCoordinationService} from "../service/fleet-coordination.service";
import {Router} from "@angular/router";
import {Fleet} from "../service/proto/api_specification_am_fleet_coordination_pb";
import {FormsModule} from "@angular/forms";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-fleets-overview',
  standalone: true,
  imports: [
    NgForOf,
    SlicePipe,
    FormsModule,
    DialogComponent,
    CommonModule,
  ],
  templateUrl: './fleets-overview.component.html',
  styleUrl: './fleets-overview.component.scss'
})

export class FleetsOverviewComponent implements OnInit {

  fleets: VisualFleet[] = [];
  fleetsView: VisualFleet[] = [];

  currentPage = 1;
  totalPages: number;
  private _entriesPerPage = 5;

  sortDirection: { [key: string]: boolean | null } = {
    fleetId: null,
    location: null,
    fleetManager: null,
  };

  searchValue: string = '';

  selectedFleet: any;
  showDeleteDialog: boolean = false;
  showMessageDialog: boolean = false;
  message: string = '';

  constructor(private fleetCoordinationService: FleetCoordinationService, private router: Router) {
    this.totalPages = Math.ceil(this.fleetsView.length / this.entriesPerPage);
  }

  ngOnInit() {
    this.listFleets();
    this.totalPages = Math.ceil(this.fleetsView.length / this.entriesPerPage);
  }

  createNewFleet() {
    this.router.navigate(['/fleet-addition']);
  }

  editFleet(fleet : VisualFleet) {
    this.router.navigate(['/edit-fleet'], {queryParams: {
        fleetId: fleet.fleetId,
        fleetManager: fleet.fleetManager,
        location: fleet.location}});
  }

  openDeleteDialog(fleet: VisualFleet) {
    this.selectedFleet = fleet;
    this.showDeleteDialog = true;
  }

  closeDeleteDialog(confirm : boolean) {
    if (confirm) {
      let deletedFleet = new Fleet();
      deletedFleet.setFleetid(this.selectedFleet.fleetId);
      deletedFleet.setLocation(this.selectedFleet.location);
      deletedFleet.setFleetmanager(this.selectedFleet.fleetManager);

      this.fleetCoordinationService.deleteFleet(deletedFleet).then((confirm) => {
        if (confirm) {
          this.showDeleteDialog = false;
          this.message = "Fleet " + deletedFleet.getFleetid() + " deleted successfully.";
          this.showMessageDialog = true;
          this.listFleets();
        } else {
          this.showDeleteDialog = false;
          this.message = "Fleet " + deletedFleet.getFleetid() + " could not be deleted.";
          this.showMessageDialog = true;
        }
      }).catch((error) => {
        this.showDeleteDialog = false;
        this.message = error;
        this.showMessageDialog = true;
      });
    } else {
      this.showDeleteDialog = false;
    }
  }


  private listFleets() {
    this.fleetCoordinationService.listFleets().then((loadedFleets: Fleet[]) => {
          this.fleets = [];
          for (const fleet of loadedFleets) {
            this.fleets.push(this.mapFleetToVisual(fleet))
          }
          this.fleetsView = [...this.fleets];
          this.updateTotalPages();
          this.sortDirection['fleetId'] = false;
          this.sortTable('fleetId');
        }).catch((error) => {
          this.showMessageDialog = true;
          this.message = error;
        });
  }


  private mapFleetToVisual(fleet: Fleet): VisualFleet {
      return {
      fleetId: fleet.getFleetid(),
      location: fleet.getLocation(),
      fleetManager: fleet.getFleetmanager()
      };
  }

  get entriesPerPage(): number {
    return this._entriesPerPage;
  }

  set entriesPerPage(value: number) {
    this._entriesPerPage = value;
    this.totalPages = Math.ceil(this.fleetsView.length / this._entriesPerPage);
  }

  sortTable(property: keyof VisualFleet): void {
    this.fleetsView.sort((a, b) => {
      let aValue = a[property];
      let bValue = b[property];

      if (aValue < bValue) {
        return this.sortDirection[property] ? 1 : -1;
      }
      if (aValue > bValue) {
        return this.sortDirection[property] ? -1 : 1;
      }
      return 0;
    });

    for (let key in this.sortDirection) {
      if (key !== property) {
        this.sortDirection[key] = null;
      }
    }

    this.sortDirection[property] = this.sortDirection[property] === null ? true : !this.sortDirection[property];

    this.currentPage = 1;
  }

  getPages(): number[] {
    let startPage: number;
    let endPage: number;

    if (this.totalPages <= 10) {
      startPage = 1;
      endPage = this.totalPages;
    } else {
      if (this.currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (this.currentPage + 4 >= this.totalPages) {
        startPage = this.totalPages - 9;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - 5;
        endPage = this.currentPage + 4;
      }
    }

    return Array.from({length: (endPage + 1) - startPage}, (_, i) => startPage + i);
  }

  searchFleets() {
    if (this.searchValue) {
      let searchValueLowercase = this.searchValue.toLowerCase();
      this.fleetsView = this.fleets.filter(fleet =>
          fleet.fleetId.toLowerCase() === searchValueLowercase ||
          fleet.location.toLowerCase().includes(searchValueLowercase) ||
          fleet.fleetManager.toLowerCase().includes(searchValueLowercase)
      );
    } else {
        this.fleetsView = [...this.fleets];
    }

    this.updateTotalPages();
    this.currentPage = 1;
  }

  private updateTotalPages() {
    this.totalPages = Math.ceil(this.fleetsView.length / this._entriesPerPage);
  }

}

interface VisualFleet {
    fleetId: string,
    location: string,
    fleetManager: string
}
