import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOutputComponent } from './result-output.component';

describe('ResultOutputComponent', () => {
  let component: ResultOutputComponent;
  let fixture: ComponentFixture<ResultOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultOutputComponent]
    });
    fixture = TestBed.createComponent(ResultOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
