import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOrderComponent } from './carousel-order.component';

describe('CarouselOrderComponent', () => {
  let component: CarouselOrderComponent;
  let fixture: ComponentFixture<CarouselOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
