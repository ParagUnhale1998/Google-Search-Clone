import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Images2Component } from './images2.component';

describe('Images2Component', () => {
  let component: Images2Component;
  let fixture: ComponentFixture<Images2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Images2Component]
    });
    fixture = TestBed.createComponent(Images2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
