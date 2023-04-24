import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerProductDetailComponent } from './drawer-product-detail.component';

describe('DrawerProductDetailComponent', () => {
  let component: DrawerProductDetailComponent;
  let fixture: ComponentFixture<DrawerProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerProductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
