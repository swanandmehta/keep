import { IconDefinition, faBars, faSearch, faRedoAlt, faTh, faLayerGroup, faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
