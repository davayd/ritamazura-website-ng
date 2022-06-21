import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetouchComponent } from './retouch.component';

describe('RetouchComponent', () => {
  let component: RetouchComponent;
  let fixture: ComponentFixture<RetouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
