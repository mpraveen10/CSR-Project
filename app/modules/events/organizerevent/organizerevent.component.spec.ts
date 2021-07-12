import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizereventComponent } from './organizerevent.component';

describe('OrganizereventComponent', () => {
  let component: OrganizereventComponent;
  let fixture: ComponentFixture<OrganizereventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizereventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizereventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
