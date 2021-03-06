import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {


  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<String> = new EventEmitter<string>();


  constructor() { }



  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);

  }
}
