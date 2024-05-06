import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultHeaderComponent } from './search-result-header.component';

describe('SearchResultHeaderComponent', () => {
  let component: SearchResultHeaderComponent;
  let fixture: ComponentFixture<SearchResultHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultHeaderComponent]
    });
    fixture = TestBed.createComponent(SearchResultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
