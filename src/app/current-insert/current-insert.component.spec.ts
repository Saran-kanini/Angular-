import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentInsertComponent } from './current-insert.component';

describe('CurrentInsertComponent', () => {
  let component: CurrentInsertComponent;
  let fixture: ComponentFixture<CurrentInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentInsertComponent]
    });
    fixture = TestBed.createComponent(CurrentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
