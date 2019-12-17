import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-note',
  templateUrl: './listing-note.component.html',
  styleUrls: ['./listing-note.component.css']
})
export class ListingNoteComponent implements OnInit {

  private optionIcon: IconDefinition = faBars;

  constructor() { }

  ngOnInit() {
  }

}
