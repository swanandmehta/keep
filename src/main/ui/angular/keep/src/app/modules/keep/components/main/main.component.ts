import { Component, OnInit, Input } from '@angular/core';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public pageName: string;
  public gridView: boolean;
  
  private listingService: ListingService;
  private sessionService: SessionService;

  @Input()
  public set gridListingView(gridView: boolean) {
    this.gridView = gridView;
  }

  @Input()
  public set currentPage(currentPage: string) {
    this.pageName = currentPage;
    const userId: number = Number(this.sessionService.getValue("userId")) as number;
    const labelList: Array<string> = new Array<string>();
    const noteTypeList: Array<NoteType> = new Array<NoteType>();
    const statusList: Array<NoteStates> = new Array<NoteStates>();

    if(currentPage === "All") {
      noteTypeList.push(NoteType.Note);
      noteTypeList.push(NoteType.Reminder);
      noteTypeList.push(NoteType.Checklist);
      statusList.push(NoteStates.Active);
    } else if(currentPage === "Reminders") {
      noteTypeList.push(NoteType.Reminder);
      statusList.push(NoteStates.Active);
    } else if(currentPage === "Notes") {
      noteTypeList.push(NoteType.Note);
      noteTypeList.push(NoteType.Checklist);
      statusList.push(NoteStates.Active);
    } else if(currentPage === "Archive"){
      noteTypeList.push(NoteType.Note);
      noteTypeList.push(NoteType.Reminder);
      noteTypeList.push(NoteType.Checklist);
      statusList.push(NoteStates.Archive);
    } else if(currentPage === "Trash"){
      noteTypeList.push(NoteType.Note);
      noteTypeList.push(NoteType.Reminder);
      noteTypeList.push(NoteType.Checklist);
      statusList.push(NoteStates.Trash);
    } else{
      noteTypeList.push(NoteType.Note);
      noteTypeList.push(NoteType.Reminder);
      noteTypeList.push(NoteType.Checklist);
      labelList.push(currentPage);
      statusList.push(NoteStates.Active);
    }

    this.listingService.getNotesByCriteria(userId, noteTypeList, labelList, statusList);
  }

  constructor(listingService: ListingService, sessionService: SessionService) {
    this.listingService = listingService;
    this.sessionService = sessionService;
  }

  ngOnInit() {
  }

}
