import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesOperationsPage } from './mes-operations.page';

describe('MesOperationsPage', () => {
  let component: MesOperationsPage;
  let fixture: ComponentFixture<MesOperationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesOperationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesOperationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
