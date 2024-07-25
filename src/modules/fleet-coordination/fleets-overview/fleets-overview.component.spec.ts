import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FleetsOverviewComponent } from './fleets-overview.component';
import { FleetCoordinationService } from '../service/fleet-coordination.service';
import { Router } from '@angular/router';
import { Observable, of} from 'rxjs';

describe('FleetsOverviewComponent', () => {
  let component: FleetsOverviewComponent;
  let fixture: ComponentFixture<FleetsOverviewComponent>;
  let mockFleetCoordinationService: { listFleets: { and: { returnValue: (arg0: Observable<never[]>) => void; }; }; deleteFleet: { and: { returnValue: (arg0: Observable<null>) => void; }; }; };
  let mockRouter;

  beforeEach(async () => {
    mockFleetCoordinationService = jasmine.createSpyObj(['listFleets', 'deleteFleet']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ FleetsOverviewComponent ],
      providers: [
        { provide: FleetCoordinationService, useValue: mockFleetCoordinationService },
        { provide: Router, useValue: mockRouter }
      ]
    })
        .compileComponents();

    fixture = TestBed.createComponent(FleetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listFleets on ngOnInit', () => {
    mockFleetCoordinationService.listFleets.and.returnValue(of([]));
    component.ngOnInit();
    expect(mockFleetCoordinationService.listFleets).toHaveBeenCalled();
  });

  it('should call deleteFleet when a fleet is deleted', () => {
    const fleetId = '1'; // Replace with the fleetId you want to test
    mockFleetCoordinationService.deleteFleet.and.returnValue(of(null));
    component.closeDeleteDialog(true, fleetId);
    expect(mockFleetCoordinationService.deleteFleet).toHaveBeenCalledWith(fleetId);
  });

});
