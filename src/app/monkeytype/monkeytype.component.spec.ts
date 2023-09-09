import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeytypeComponent } from './monkeytype.component';

describe('MonkeytypeComponent', () => {
  let component: MonkeytypeComponent;
  let fixture: ComponentFixture<MonkeytypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonkeytypeComponent]
    });
    fixture = TestBed.createComponent(MonkeytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
