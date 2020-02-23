import { FormGroup, FormBuilder } from '@angular/forms';
import { IconDefinition, faBars, faSearch, faRedoAlt, faTh, faLayerGroup, faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuHideShowIcon: IconDefinition = faBars;
  public searchIcon: IconDefinition = faSearch;
  public refreshIcon: IconDefinition = faRedoAlt;
  public gridIcon: IconDefinition = faTh;
  public stackIcon: IconDefinition = faLayerGroup;
  public bellIcon: IconDefinition = faBell;
  public logoutIcon: IconDefinition = faPowerOff;
  public formBuilder: FormBuilder;

  public searchForm: FormGroup;

  @Input() private hideNav: boolean;
  @Input() private gridListingView: boolean;
  @Output() private hideNavEvent: EventEmitter<boolean>;
  @Output() private toggleListingEvent: EventEmitter<boolean>;
  @Output() private toggleAlertViewEvent: EventEmitter<string>;

  constructor(formBuilder: FormBuilder) {
    this.hideNavEvent = new EventEmitter<boolean>();
    this.toggleListingEvent = new EventEmitter<boolean>();
    this.toggleAlertViewEvent = new EventEmitter<string>();
    this.formBuilder = formBuilder;
    this.searchForm = formBuilder.group({
      search : ['', ]
    })
  }

  ngOnInit() {
  }

  public hideNavMenu(): void {
    this.hideNav = !this.hideNav;
    this.hideNavEvent.emit(this.hideNav);
  }

  public toggleListingView(gridListingView: boolean): void {
    if (this.gridListingView === gridListingView) {
      return;
    }
    this.gridListingView = gridListingView;
    this.toggleListingEvent.emit(this.gridListingView);
  }

  public toggleAlertView(): void {
    this.toggleAlertViewEvent.emit('Alert');
  }

}
