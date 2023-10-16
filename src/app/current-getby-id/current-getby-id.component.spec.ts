import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGetbyIdComponent } from './current-getby-id.component';

describe('CurrentGetbyIdComponent', () => {
  let component: CurrentGetbyIdComponent;
  let fixture: ComponentFixture<CurrentGetbyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentGetbyIdComponent]
    });
    fixture = TestBed.createComponent(CurrentGetbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
