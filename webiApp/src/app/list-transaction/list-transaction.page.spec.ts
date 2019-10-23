import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionPage } from './list-transaction.page';

describe('ListTransactionPage', () => {
  let component: ListTransactionPage;
  let fixture: ComponentFixture<ListTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
