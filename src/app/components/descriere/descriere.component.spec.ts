import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriereComponent } from './descriere.component';

describe('DescriereComponent', () => {
  let component: DescriereComponent;
  let fixture: ComponentFixture<DescriereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
