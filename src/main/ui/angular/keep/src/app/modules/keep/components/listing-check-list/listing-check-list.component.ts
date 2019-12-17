import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-check-list',
  templateUrl: './listing-check-list.component.html',
  styleUrls: ['./listing-check-list.component.css']
})
export class ListingCheckListComponent implements OnInit {

  private optionIcon: IconDefinition = faBars;

  constructor() { }

  ngOnInit() {
  }

}
