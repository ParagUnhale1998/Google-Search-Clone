import { ComponentFixture, TestBed } from '@angular/core/testing';

import { All2Component } from './all2.component';

describe('All2Component', () => {
  let component: All2Component;
  let fixture: ComponentFixture<All2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [All2Component]
    });
    fixture = TestBed.createComponent(All2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
