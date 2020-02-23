import { NewLabelComponent } from './../new-label/new-label.component';
import { ModelConfig } from './../../../../config/model-config';
import { IconDefinition, faLightbulb, faClock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faArchive, faTrashAlt, faCogs, faPen } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public allIcon: IconDefinition = faPen;
  public noteIcon: IconDefinition = faLightbulb;
  public reminderIcon: IconDefinition = faClock;
  public addNewIcon: IconDefinition = faPlus;
  public labelIcon: IconDefinition = faBookmark;
  public archiveIcon: IconDefinition = faArchive;
  public trashIcon: IconDefinition = faTrashAlt;
  public settingsIcon: IconDefinition = faCogs;
  private modelService: NgbModal;
  public hideNavMenu: boolean;

  @Input() private currentPage: string;
  @Output() private pageChangeEvent: EventEmitter<string>;

  constructor(modelService: NgbModal) {
    this.modelService = modelService;
    this.pageChangeEvent = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  public openNewLabel(): void {
    const modelOptions = ModelConfig.newNoteModelOptions;
    const modelComponent = NewLabelComponent;
    this.modelService.open(modelComponent, modelOptions);
  }

  public openPage(nameOfThePage: string): void {
    this.currentPage = nameOfThePage;
    this.pageChangeEvent.emit(this.currentPage);
  }

}
