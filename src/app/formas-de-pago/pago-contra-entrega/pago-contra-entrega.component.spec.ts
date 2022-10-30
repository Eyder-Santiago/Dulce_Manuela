import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoContraEntregaComponent } from './pago-contra-entrega.component';

describe('PagoContraEntregaComponent', () => {
  let component: PagoContraEntregaComponent;
  let fixture: ComponentFixture<PagoContraEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoContraEntregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoContraEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
