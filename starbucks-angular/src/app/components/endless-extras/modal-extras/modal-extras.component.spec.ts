import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExtrasComponent } from './modal-extras.component';

describe('ModalExtrasComponent', () => {
  let component: ModalExtrasComponent;
  let fixture: ComponentFixture<ModalExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
