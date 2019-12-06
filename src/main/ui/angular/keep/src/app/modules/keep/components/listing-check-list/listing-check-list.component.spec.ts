import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCheckListComponent } from './listing-check-list.component';

describe('ListingCheckListComponent', () => {
  let component: ListingCheckListComponent;
  let fixture: ComponentFixture<ListingCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
