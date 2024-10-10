import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTask2Component } from './directive-task2.component';

describe('DirectiveTask2Component', () => {
  let component: DirectiveTask2Component;
  let fixture: ComponentFixture<DirectiveTask2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveTask2Component]
    });
    fixture = TestBed.createComponent(DirectiveTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
