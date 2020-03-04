import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes'
import { Label } from '../../dto/label';
import { ISessionService } from 'src/app/core/interface/session/i-session-service';
import { SessionService } from 'src/app/core/services/session/session.service';


@Component({
  selector: 'app-note-chip',
  templateUrl: './note-chip.component.html',
  styleUrls: ['./note-chip.component.css']
})
export class NoteChipComponent implements OnInit {
  
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public labelList: Array<Label>;

  private sessionService: ISessionService;

  @Input("labelList")
  public set setLabelList(lableList: Array<Label>){
    this.labelList = lableList;
  }
  
  constructor(sessionService: SessionService) {
    this.sessionService = sessionService;
  }

  ngOnInit() {
  }

  public add(event: MatChipInputEvent): void {
    if(event.value.trim() != ""){
      const label: Label = new Label();
      label.name = event.value;
      label.userId = Number(this.sessionService.getValue("userId")) as number;
      this.labelList.push(label);
    }

    const input = event.input;
    input.value = "";
  }

  public remove(label: Label): void {
    const index = this.labelList.indexOf(label);

    if (index >= 0) {
      this.labelList.splice(index, 1);
    }
  }

}
