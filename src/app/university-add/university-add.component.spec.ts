import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAddComponent } from './university-add.component';

describe('UniversityAddComponent', () => {
  let component: UniversityAddComponent;
  let fixture: ComponentFixture<UniversityAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversityAddComponent]
    });
    fixture = TestBed.createComponent(UniversityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
