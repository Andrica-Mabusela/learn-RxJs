import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOperatorsComponent } from './learn-operators.component';

describe('LearnOperatorsComponent', () => {
  let component: LearnOperatorsComponent;
  let fixture: ComponentFixture<LearnOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
