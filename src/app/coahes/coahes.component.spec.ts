import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoahesComponent } from './coahes.component';

describe('CoahesComponent', () => {
  let component: CoahesComponent;
  let fixture: ComponentFixture<CoahesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoahesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoahesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
