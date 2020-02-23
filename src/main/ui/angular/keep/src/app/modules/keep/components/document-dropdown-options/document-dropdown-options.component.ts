import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-dropdown-options',
  templateUrl: './document-dropdown-options.component.html',
  styleUrls: ['./document-dropdown-options.component.css']
})
export class DocumentDropdownOptionsComponent implements OnInit {

  public optionIcon: IconDefinition = faBars;

  constructor() { }

  ngOnInit() {
  }

}
