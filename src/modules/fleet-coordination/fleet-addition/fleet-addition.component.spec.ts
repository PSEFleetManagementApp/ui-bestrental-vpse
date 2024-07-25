import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FleetAdditionComponent } from './fleet-addition.component';
import { FleetCoordinationService } from '../service/fleet-coordination.service';
import { Router } from '@angular/router';
import {Fleet} from "../service/proto/api_specification_am_fleet_coordination_pb";

describe('FleetAdditionComponent', () => {
  let component: FleetAdditionComponent;
  let fixture: ComponentFixture<FleetAdditionComponent>;
  let mockFleetCoordinationService: jasmine.SpyObj<FleetCoordinationService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockFleetCoordinationService = jasmine.createSpyObj(['listFleetManagers', 'createNewFleet']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ FleetAdditionComponent ],
      providers: [
        { provide: FleetCoordinationService, useValue: mockFleetCoordinationService },
        { provide: Router, useValue: mockRouter }
      ]
    })
        .compileComponents();

    fixture = TestBed.createComponent(FleetAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch fleet managers on init', () => {
    mockFleetCoordinationService.listFleetManagers.and.returnValue(Promise.resolve(['manager1', 'manager2']));
    component.ngOnInit();
    fixture.whenStable().then(() => {
      expect(component.fleetManagers).toEqual(['manager1', 'manager2']);
    });
  });

  it('should handle error when fetching fleet managers', () => {
    mockFleetCoordinationService.listFleetManagers.and.returnValue(Promise.reject('error'));
    component.ngOnInit();
    fixture.whenStable().then(() => {
      expect(component.showMessageDialog).toBeTrue();
      expect(component.message).toEqual('error');
    });
  });

  it('should create fleet and navigate to overview when fields are filled', () => {
    component.location = 'location';
    component.fleetManager = 'manager';
    mockFleetCoordinationService.createNewFleet.and.returnValue(Promise.resolve({} as Fleet));
    component.createFleet();
    fixture.whenStable().then(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['fleets-overview']);
    });
  });

  it('should show error dialog when fields are empty', () => {
    component.location = '';
    component.fleetManager = '';
    component.createFleet();
    fixture.whenStable().then(() => {
      expect(component.showMessageDialog).toBeTrue();
      expect(component.message).toEqual('Please fill in all fields.');
    });
  });

  it('should navigate to overview when closeErrorDialog is called', () => {
    component.closeMessageDialog();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['fleets-overview']);
  });

  it('should navigate to overview when cancel is called', () => {
    component.cancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['fleets-overview']);
  });
});
