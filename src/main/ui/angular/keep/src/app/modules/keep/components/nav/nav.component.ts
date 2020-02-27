import { IconDefinition, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faArchive, faTrashAlt, faCogs, faPen } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public allIcon: IconDefinition = faPen;
  public noteIcon: IconDefinition = faLightbulb;
  public reminderIcon: IconDefinition = faClock;
  public labelIcon: IconDefinition = faBookmark;
  public archiveIcon: IconDefinition = faArchive;
  public trashIcon: IconDefinition = faTrashAlt;
  public settingsIcon: IconDefinition = faCogs;
  public hideNavMenu: boolean;

  @Input() private currentPage: string;
  @Output() private pageChangeEvent: EventEmitter<string>;

  constructor() {
    this.pageChangeEvent = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  public openPage(nameOfThePage: string): void {
    this.currentPage = nameOfThePage;
    this.pageChangeEvent.emit(this.currentPage);
  }

}
