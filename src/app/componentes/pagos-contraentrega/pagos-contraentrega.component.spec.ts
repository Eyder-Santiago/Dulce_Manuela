import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosContraentregaComponent } from './pagos-contraentrega.component';

describe('PagosContraentregaComponent', () => {
  let component: PagosContraentregaComponent;
  let fixture: ComponentFixture<PagosContraentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosContraentregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagosContraentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
