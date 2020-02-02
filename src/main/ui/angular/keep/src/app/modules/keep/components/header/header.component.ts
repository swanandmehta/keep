import { FormGroup, FormBuilder } from '@angular/forms';
import { IconDefinition, faBars, faSearch, faRedoAlt, faTh, faLayerGroup, faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private menuHideShowIcon: IconDefinition = faBars;
  private searchIcon: IconDefinition = faSearch;
  private refreshIcon: IconDefinition = faRedoAlt;
  private gridIcon: IconDefinition = faTh;
  private stackIcon: IconDefinition = faLayerGroup;
  private bellIcon: IconDefinition = faBell;
  private logoutIcon: IconDefinition = faPowerOff;
  private formBuilder: FormBuilder;

  public searchForm: FormGroup;

  @Input() private hideNav: boolean;
  @Input() private gridListingView: boolean;
  @Output() private hideNavEvent: EventEmitter<boolean> = undefined;
  @Output() private toggleListingEvent: EventEmitter<boolean> = undefined;
  @Output() private toggleAlertViewEvent: EventEmitter<string> = undefined;

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

  private hideNavMenu(): void {
    this.hideNav = !this.hideNav;
    this.hideNavEvent.emit(this.hideNav);
  }

  private toggleListingView(gridListingView: boolean): void {
    if (this.gridListingView === gridListingView) {
      return;
    }
    this.gridListingView = gridListingView;
    this.toggleListingEvent.emit(this.gridListingView);
  }

  private toggleAlertView(): void {
    this.toggleAlertViewEvent.emit('Alert');
  }

}
