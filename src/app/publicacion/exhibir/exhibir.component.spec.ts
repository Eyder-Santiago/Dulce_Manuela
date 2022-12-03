import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibirComponent } from './exhibir.component';

describe('ExhibirComponent', () => {
  let component: ExhibirComponent;
  let fixture: ComponentFixture<ExhibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
