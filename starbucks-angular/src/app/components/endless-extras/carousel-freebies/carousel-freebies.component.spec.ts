import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFreebiesComponent } from './carousel-freebies.component';

describe('CarouselFreebiesComponent', () => {
  let component: CarouselFreebiesComponent;
  let fixture: ComponentFixture<CarouselFreebiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselFreebiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFreebiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
