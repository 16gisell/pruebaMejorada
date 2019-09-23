import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRelacionComponent } from './ver-relacion.component';

describe('VerRelacionComponent', () => {
  let component: VerRelacionComponent;
  let fixture: ComponentFixture<VerRelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
