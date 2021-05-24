import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCodesComponent } from './star-codes.component';

describe('StarCodesComponent', () => {
  let component: StarCodesComponent;
  let fixture: ComponentFixture<StarCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
