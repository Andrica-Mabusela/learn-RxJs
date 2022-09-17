import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningObservablesComponent } from './learning-observables.component';

describe('LearningObservablesComponent', () => {
  let component: LearningObservablesComponent;
  let fixture: ComponentFixture<LearningObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
