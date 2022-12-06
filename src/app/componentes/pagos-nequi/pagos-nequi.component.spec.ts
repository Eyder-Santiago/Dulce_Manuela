import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosNequiComponent } from './pagos-nequi.component';

describe('PagosNequiComponent', () => {
  let component: PagosNequiComponent;
  let fixture: ComponentFixture<PagosNequiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosNequiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagosNequiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
