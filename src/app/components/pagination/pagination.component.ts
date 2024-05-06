import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PAGES_DATA } from 'src/app/Constants/Constants'; 

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Output() pageChanged = new EventEmitter<number>();

  pagination = PAGES_DATA

  constructor() { }

  navigate(pageNumber: number) {
    this.pageChanged.emit(pageNumber);
  }
}
