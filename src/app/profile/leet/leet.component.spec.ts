import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetComponent } from './leet.component';

describe('LeetComponent', () => {
  let component: LeetComponent;
  let fixture: ComponentFixture<LeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
