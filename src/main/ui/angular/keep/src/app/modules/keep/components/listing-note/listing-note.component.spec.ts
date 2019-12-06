import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingNoteComponent } from './listing-note.component';

describe('ListingNoteComponent', () => {
  let component: ListingNoteComponent;
  let fixture: ComponentFixture<ListingNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
