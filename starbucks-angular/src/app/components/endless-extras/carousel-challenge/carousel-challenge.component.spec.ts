import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselChallengeComponent } from './carousel-challenge.component';

describe('CarouselChallengeComponent', () => {
  let component: CarouselChallengeComponent;
  let fixture: ComponentFixture<CarouselChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
