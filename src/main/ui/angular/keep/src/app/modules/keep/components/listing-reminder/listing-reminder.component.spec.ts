import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingReminderComponent } from './listing-reminder.component';

describe('ListingReminderComponent', () => {
  let component: ListingReminderComponent;
  let fixture: ComponentFixture<ListingReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
