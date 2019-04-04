import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEngagementComponent } from './customer-engagement.component';

describe('CustomerEngagementComponent', () => {
  let component: CustomerEngagementComponent;
  let fixture: ComponentFixture<CustomerEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
