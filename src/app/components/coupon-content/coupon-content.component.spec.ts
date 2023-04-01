import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponContentComponent } from './coupon-content.component';

describe('CouponContentComponent', () => {
  let component: CouponContentComponent;
  let fixture: ComponentFixture<CouponContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
