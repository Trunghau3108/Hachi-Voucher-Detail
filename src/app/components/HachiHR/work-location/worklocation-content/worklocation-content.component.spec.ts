import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklocationContentComponent } from './worklocation-content.component';

describe('WorklocationContentComponent', () => {
  let component: WorklocationContentComponent;
  let fixture: ComponentFixture<WorklocationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorklocationContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorklocationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
