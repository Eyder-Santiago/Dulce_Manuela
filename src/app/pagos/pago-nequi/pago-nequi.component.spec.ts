import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoNequiComponent } from './pago-nequi.component';

describe('PagoNequiComponent', () => {
  let component: PagoNequiComponent;
  let fixture: ComponentFixture<PagoNequiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoNequiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoNequiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
