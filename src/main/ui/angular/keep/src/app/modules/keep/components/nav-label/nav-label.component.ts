import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModelConfig } from 'src/app/config/model-config';
import { NewLabelComponent } from '../new-label/new-label.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LabelService } from 'src/app/core/services/label/label.service';
import { Label } from '../../dto/label';

@Component({
  selector: 'app-nav-label',
  templateUrl: './nav-label.component.html',
  styleUrls: ['./nav-label.component.css']
})
export class NavLabelComponent implements OnInit {

  public labelIcon: IconDefinition = faBookmark;
  public addNewIcon: IconDefinition = faPlus;
  public navLabelList: Array<Label>;
  public currentPage: string;
  
  private modelService: NgbModal;
  private labelService: LabelService;

  @Input("currentPage")
  public set setCurrentPage(currentPage: string){
    this.currentPage = currentPage;
  }

  @Output() private pageChangeEvent: EventEmitter<string>;

  constructor(modelService: NgbModal, labelService: LabelService) {
    this.modelService = modelService;
    this.labelService = labelService;
    this.pageChangeEvent = new EventEmitter<string>();
    this.navLabelList = this.labelService.getAllLabels();
  }

  ngOnInit() {
  }

  public openNewLabel(): void {
    const modelOptions = ModelConfig.newNoteModelOptions;
    const modelComponent = NewLabelComponent;
    this.modelService.open(modelComponent, modelOptions);
  }

  public openPage(label: Label) : void {
    this.currentPage = label.name;
    this.pageChangeEvent.emit(this.currentPage);
  }

}
