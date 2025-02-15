import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySearchComponent } from './university-search.component';

describe('UniversitySearchComponent', () => {
  let component: UniversitySearchComponent;
  let fixture: ComponentFixture<UniversitySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversitySearchComponent]
    });
    fixture = TestBed.createComponent(UniversitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
