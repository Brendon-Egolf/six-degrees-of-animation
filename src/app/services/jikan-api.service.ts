import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, debounceTime, map, mergeMap, retry} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';

declare const camelcaseKeys: any;

@Injectable({
  providedIn: 'root'
})
export class JikanApiService {

  constructor(private http: HttpClient) { }

  getCharacterList(animeId: string) {
    const reqUrl = `https://api.jikan.moe/v3/anime/${animeId}/characters_staff/`;
    return this.http.get(reqUrl)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(res => camelcaseKeys(res))
      );
  }

  getAnimeList(username: string) {
    const reqUrl = `https://api.jikan.moe/v3/user/${username}/animelist/all`;
    return this.http.get(reqUrl)
      .pipe(
        retry(3),
        catchError(this.handleError),
        mergeMap(res => this.constructAnimeList(res)),
        debounceTime(500)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  private constructAnimeList(res: object) {
    // TODO: figure this mess out
  }
}
