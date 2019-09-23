import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionPagosComponent } from './relacion-pagos.component';

describe('RelacionPagosComponent', () => {
  let component: RelacionPagosComponent;
  let fixture: ComponentFixture<RelacionPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
