import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetouchSessionComponent } from './retouch-session.component';

describe('RetouchSessionComponent', () => {
  let component: RetouchSessionComponent;
  let fixture: ComponentFixture<RetouchSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetouchSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetouchSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
