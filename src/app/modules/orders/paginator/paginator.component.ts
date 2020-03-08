import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() activePage: number;
  @Input() nbOfPages:number;
  @Output() paginationClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  goPrevious(){
    this.paginationClicked.emit( --this.activePage );
  }

  goNext(){
    this.paginationClicked.emit( ++this.activePage );
  }

}
