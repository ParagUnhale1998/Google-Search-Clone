import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinputComponent } from './searchinput.component';

describe('SearchinputComponent', () => {
  let component: SearchinputComponent;
  let fixture: ComponentFixture<SearchinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchinputComponent]
    });
    fixture = TestBed.createComponent(SearchinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
