import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTComponent } from './producto-t.component';

describe('ProductoTComponent', () => {
  let component: ProductoTComponent;
  let fixture: ComponentFixture<ProductoTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
