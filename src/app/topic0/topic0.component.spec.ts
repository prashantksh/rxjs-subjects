import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic0Component } from './topic0.component';

describe('Topic0Component', () => {
  let component: Topic0Component;
  let fixture: ComponentFixture<Topic0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
