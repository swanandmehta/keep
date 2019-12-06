import { IconDefinition, faLightbulb, faClock, faPlus, faBookmark, faArchive, faTrashAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private noteIcon: IconDefinition = faLightbulb;
  private reminderIcon: IconDefinition = faClock;
  private addNewIcon: IconDefinition = faPlus;
  private labelIcon: IconDefinition = faBookmark;
  private archiveIcon: IconDefinition = faArchive;
  private trashIcon: IconDefinition = faTrashAlt;
  private settingsIcon: IconDefinition = faCogs;

  constructor() { }

  ngOnInit() {
  }

}
