import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModelConfig } from 'src/app/config/model-config';
import { NewLabelComponent } from '../new-label/new-label.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LabelService } from 'src/app/core/services/label/label.service';

@Component({
  selector: 'app-nav-label',
  templateUrl: './nav-label.component.html',
  styleUrls: ['./nav-label.component.css']
})
export class NavLabelComponent implements OnInit {

  public labelIcon: IconDefinition = faBookmark;
  public addNewIcon: IconDefinition = faPlus;
  
  private modelService: NgbModal;
  private labelService: LabelService;

  constructor(modelService: NgbModal, labelService: LabelService) {
    this.modelService = modelService;
    this.labelService = labelService;
  }

  ngOnInit() {
  }

  public openNewLabel(): void {
    const modelOptions = ModelConfig.newNoteModelOptions;
    const modelComponent = NewLabelComponent;
    this.modelService.open(modelComponent, modelOptions);
  }

}
