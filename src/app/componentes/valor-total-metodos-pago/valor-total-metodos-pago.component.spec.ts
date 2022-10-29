import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorTotalMetodosPagoComponent } from './valor-total-metodos-pago.component';

describe('ValorTotalMetodosPagoComponent', () => {
  let component: ValorTotalMetodosPagoComponent;
  let fixture: ComponentFixture<ValorTotalMetodosPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorTotalMetodosPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorTotalMetodosPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
