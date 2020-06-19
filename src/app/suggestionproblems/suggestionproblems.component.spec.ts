import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionproblemsComponent } from './suggestionproblems.component';

describe('SuggestionproblemsComponent', () => {
  let component: SuggestionproblemsComponent;
  let fixture: ComponentFixture<SuggestionproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
