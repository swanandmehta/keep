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

  @Input() private hideNav: boolean;
  @Output() private hideNavEvent: EventEmitter<boolean> = undefined;

  constructor() {
    this.hideNavEvent = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  private hideNavMenu(): void {
    console.log(this.hideNav);
    this.hideNav = !this.hideNav;
    console.log(this.hideNav);
    this.hideNavEvent.emit(this.hideNav);
  }

}
