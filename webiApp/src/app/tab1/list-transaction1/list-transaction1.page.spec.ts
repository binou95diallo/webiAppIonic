import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransaction1Page } from './list-transaction1.page';

describe('ListTransaction1Page', () => {
  let component: ListTransaction1Page;
  let fixture: ComponentFixture<ListTransaction1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransaction1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransaction1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
