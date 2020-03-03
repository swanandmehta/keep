import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISuccessHandler } from 'src/app/core/interface/logger/i-success-handler';
import { IErrorHandler } from 'src/app/core/interface/logger/i-error-handler';
import { ISessionService } from 'src/app/core/interface/session/i-session-service';
import { LoggerService } from 'src/app/core/services/logger/logger.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { ILabelService } from 'src/app/core/interface/label/i-label-service';
import { LabelService } from 'src/app/core/services/label/label.service';
import { Label } from '../../dto/label';
import { PartialObserver } from 'rxjs';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { labelNameValidator } from 'src/app/shared/validator/label-name-validator';

@Component({
  selector: 'app-new-label',
  templateUrl: './new-label.component.html',
  styleUrls: ['./new-label.component.css']
})
export class NewLabelComponent implements OnInit {

  public activeModel: NgbActiveModal;
  public newLabelForm: FormGroup;
  public isSubmited: boolean;
  public isSaveFailed: boolean;

  private formBuilder: FormBuilder;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;
  private sessionService: ISessionService;
  private labelService: ILabelService;

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder, loggerService: LoggerService, 
      sessionService: SessionService, labelService: LabelService) {
    this.activeModel = activeModel;
    this.formBuilder = formBuilder;
    this.labelService = labelService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;
    this.sessionService = sessionService;

    this.isSubmited = false;
    this.isSaveFailed = false;

    this.newLabelForm = this.formBuilder.group({
      name : ["", Validators.required, labelNameValidator(labelService, 
          Number(this.sessionService.getValue("userId")) as number).bind(this)]
    }, {
      updateOn : "blur"
    });

  }

  public save(): void {
    this.isSubmited = true;

    if(this.newLabelForm.valid){

      const label: Label =  this.newLabelForm.value;
      label.userId = Number(this.sessionService.getValue("userId")) as number;
      
      const observer: PartialObserver<Array<Label>> = this.getSaveObserver(label);

      this.labelService.saveLabel(label).subscribe(observer);
    }

  }

  private getSaveObserver(label: Label): PartialObserver<Array<Label>> {
    return {
      next : (labelList: Array<Label>) => {
        this.isSaveFailed = false;
        this.successHandler.handleSuccess(labelList, "User with id "+label.userId+" save label.", LoggerLevel.L);

        labelList.forEach((label: Label) => {
          this.labelService.addLabel(label);
        })

        this.activeModel.close('saved');

      },
      error : (error: any) => {
        this.errorHandler.handleError(error, "User with id "+label.userId+" failed to save label.", LoggerLevel.H);
        this.isSaveFailed = true;
      }
    };
  }

  ngOnInit() {
  }

}
