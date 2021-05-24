import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessExtrasComponent } from './endless-extras.component';

describe('EndlessExtrasComponent', () => {
  let component: EndlessExtrasComponent;
  let fixture: ComponentFixture<EndlessExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndlessExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlessExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
