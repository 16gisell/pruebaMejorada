import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaDiasComponent } from './suma-dias.component';

describe('SumaDiasComponent', () => {
  let component: SumaDiasComponent;
  let fixture: ComponentFixture<SumaDiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumaDiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
