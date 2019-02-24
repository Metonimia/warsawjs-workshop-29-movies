import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../films/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private moviesUrl = 'http://localhost:3000/movies';

  constructor(private httpClient: HttpClient) {
   }

   getFilms(): Observable<Film[]> {
     return this.httpClient.get<Film[]>(this.moviesUrl);
    }

    addFilm(film: Film) {
      this.httpClient.post(this.moviesUrl, film).subscribe(
        data  => {
          console.log('POST Request is successful ', data);
        },
        error  => {
          console.log('Error', error);
        }
      );
    }

    deleteFilm(id: number) {
      const url = `${this.moviesUrl}/${id}`;
      return this.httpClient.delete(url);
    }

    editFilm(id: number, film: Film) {
      const url = `${this.moviesUrl}/${id}`;
      return this.httpClient.put<Film>(url, film);
    }

   getFilm(id: number): Observable<Film> {
      const url = `${this.moviesUrl}/${id}`;
      return this.httpClient.get<Film>(url);
    }
}
