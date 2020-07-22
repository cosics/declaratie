import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeComponent } from './nume.component';

describe('NumeComponent', () => {
  let component: NumeComponent;
  let fixture: ComponentFixture<NumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
