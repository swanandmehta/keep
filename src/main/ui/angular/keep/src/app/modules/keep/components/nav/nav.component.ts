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

  private allIcon: IconDefinition = faPen;
  private noteIcon: IconDefinition = faLightbulb;
  private reminderIcon: IconDefinition = faClock;
  private addNewIcon: IconDefinition = faPlus;
  private labelIcon: IconDefinition = faBookmark;
  private archiveIcon: IconDefinition = faArchive;
  private trashIcon: IconDefinition = faTrashAlt;
  private settingsIcon: IconDefinition = faCogs;
  private modelService: NgbModal;

  @Input() private currentPage: string;
  @Output() private onPageChange: EventEmitter<string> = undefined;

  constructor(modelService: NgbModal) {
    this.modelService = modelService;
    this.onPageChange = new EventEmitter<string> ();
  }

  ngOnInit() {
  }

  private openNewLabel(): void {
    const modelOptions = ModelConfig.newNoteModelOptions;
    const modelComponent = NewLabelComponent;
    this.modelService.open(modelComponent, modelOptions);
  }

  private openPage(nameOfThePage: string): void {
    this.currentPage = nameOfThePage;
    this.onPageChange.emit(this.currentPage);
  }

}
