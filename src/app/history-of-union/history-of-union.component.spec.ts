import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfUnionComponent } from './history-of-union.component';

describe('HistoryOfUnionComponent', () => {
  let component: HistoryOfUnionComponent;
  let fixture: ComponentFixture<HistoryOfUnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfUnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
