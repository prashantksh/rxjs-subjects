import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic4Component } from './topic4.component';

describe('Topic4Component', () => {
  let component: Topic4Component;
  let fixture: ComponentFixture<Topic4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
