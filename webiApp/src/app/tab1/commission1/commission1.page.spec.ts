import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Commission1Page } from './commission1.page';

describe('Commission1Page', () => {
  let component: Commission1Page;
  let fixture: ComponentFixture<Commission1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Commission1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Commission1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
