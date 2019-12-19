import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDropdownOptionsComponent } from './document-dropdown-options.component';

describe('DocumentDropdownOptionsComponent', () => {
  let component: DocumentDropdownOptionsComponent;
  let fixture: ComponentFixture<DocumentDropdownOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDropdownOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDropdownOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
