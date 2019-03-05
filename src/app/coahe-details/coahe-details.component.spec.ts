import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaheDetailsComponent } from './coahe-details.component';

describe('CoaheDetailsComponent', () => {
  let component: CoaheDetailsComponent;
  let fixture: ComponentFixture<CoaheDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoaheDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoaheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
