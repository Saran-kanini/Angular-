import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPutComponent } from './current-put.component';

describe('CurrentPutComponent', () => {
  let component: CurrentPutComponent;
  let fixture: ComponentFixture<CurrentPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentPutComponent]
    });
    fixture = TestBed.createComponent(CurrentPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
