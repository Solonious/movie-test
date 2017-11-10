import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Movie} from '../../models/movie';
import {Genre} from '../../models/genre';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() data?: Movie[];
  @Input() imageUrl?: string;
  @Input() genres?: Genre[];
  @Output() selectedMovie = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit() {
  }

  onClick(item): void {
    this.selectedMovie.emit(item);
  }
}
