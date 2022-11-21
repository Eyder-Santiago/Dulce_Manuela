import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificoSeleccionadoComponent } from './especifico-seleccionado.component';

describe('EspecificoSeleccionadoComponent', () => {
  let component: EspecificoSeleccionadoComponent;
  let fixture: ComponentFixture<EspecificoSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificoSeleccionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificoSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
