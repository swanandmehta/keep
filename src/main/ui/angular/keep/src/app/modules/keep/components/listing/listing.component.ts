import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../dto/note';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { IListing } from 'src/app/core/interface/listing/i-listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public listingService: IListing;

  public isGridView: boolean;
  public notes : Array<Note>;

  @Input()
  public set gridView(isGridView: boolean) {
    this.isGridView = isGridView;
  }

  constructor(listingService: ListingService) {
    this.listingService = listingService;
    this.notes = listingService.getNotes();
  }

  ngOnInit() {
  }

}
