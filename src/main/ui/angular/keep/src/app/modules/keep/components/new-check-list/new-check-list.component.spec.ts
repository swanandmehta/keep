import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCheckListComponent } from './new-check-list.component';

describe('NewCheckListComponent', () => {
  let component: NewCheckListComponent;
  let fixture: ComponentFixture<NewCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
