import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeventComponent } from './employeeevent.component';

describe('EmployeeeventComponent', () => {
  let component: EmployeeeventComponent;
  let fixture: ComponentFixture<EmployeeeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
