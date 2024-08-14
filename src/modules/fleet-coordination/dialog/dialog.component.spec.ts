import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DeleteFleetDialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind inputs correctly', () => {
    component.showDeleteDialog = true;
    component.showMessageDialog = true;
    component.message = 'Test error message';
    component.fleet = {
        fleetId: 'TestId',
        location: 'TestLocation',
        fleetManager: 'TestManager'
        };

    expect(component.showMessageDialog).toBeTrue();
    expect(component.showDeleteDialog).toBeTrue();
    expect(component.message).toBe('Test error message');
    expect(component.fleet).toEqual({
      fleetId: 'TestId',
      location: 'TestLocation',
      fleetManager: 'TestManager'
    });
  });

  it('should emit null when closeErrorDialog is called', () => {
    spyOn(component.close, 'emit');
    component.closeMessageDialog();
    expect(component.close.emit).toHaveBeenCalledWith(null);
  });

  it('should emit confirm value when closeDeleteDialog is called', () => {
    const confirmValue = true;
    spyOn(component.close, 'emit');
    component.closeDeleteDialog(confirmValue);
    expect(component.close.emit).toHaveBeenCalledWith(confirmValue);
  });

});
