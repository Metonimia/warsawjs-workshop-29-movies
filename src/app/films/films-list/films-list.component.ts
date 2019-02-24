import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmsService } from '../../core/services/films.service';
import * as data from 'db.json';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  public name = 'Films list';
  public films: Film[];
  public filmsDetailIsVisible = false;

  constructor(private filmsService: FilmsService) {
    this.films = data.default.movies;
  }

  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      films => {
        this.films = films;
      }
    );
  }

  public toggleFilmDetails(): void {
    this.filmsDetailIsVisible = !this.filmsDetailIsVisible;
  }

  public deleteFilm(id: number): void {
    this.filmsService.deleteFilm(id).subscribe();
  }

  // public editFilm(id: number) {
  //   this.filmsService.openEditFilmForm(id);
  //   this.router.navigate(['/movies:id']);
  // }
}
