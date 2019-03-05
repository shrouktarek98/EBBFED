import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilPresidentComponent } from './council-president.component';

describe('CouncilPresidentComponent', () => {
  let component: CouncilPresidentComponent;
  let fixture: ComponentFixture<CouncilPresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilPresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
