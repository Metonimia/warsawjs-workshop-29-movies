import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
