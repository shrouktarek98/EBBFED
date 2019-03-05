import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalMatchResultComponent } from './national-match-result.component';

describe('NationalMatchResultComponent', () => {
  let component: NationalMatchResultComponent;
  let fixture: ComponentFixture<NationalMatchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalMatchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalMatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
