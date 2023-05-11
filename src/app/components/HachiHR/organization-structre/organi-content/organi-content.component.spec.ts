import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiContentComponent } from './organi-content.component';

describe('OrganiContentComponent', () => {
  let component: OrganiContentComponent;
  let fixture: ComponentFixture<OrganiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
