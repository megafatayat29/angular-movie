import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  handleError(error: any): Observable<any> {
    console.error(error);

    alert('Terjadi kesalahan!');

    return EMPTY;
  }

  public getAll(): Promise<any> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2NjM1OTViZjljZWFkY2NlMzc3YWRlYmFlNGEwYSIsInN1YiI6IjY1MGFhOGJkMGQ1ZDg1MDBhYTNkZjNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Q9iq1JMZtlPAjrzzkOycBnPtKIxCtblEZJEBjJrMzs'
      }
    };
    
    return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then((response) => response.json())
      .catch(err => console.error(err));
  }

  public getConfig(): Promise<any> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2NjM1OTViZjljZWFkY2NlMzc3YWRlYmFlNGEwYSIsInN1YiI6IjY1MGFhOGJkMGQ1ZDg1MDBhYTNkZjNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Q9iq1JMZtlPAjrzzkOycBnPtKIxCtblEZJEBjJrMzs'
      }
    };
    
    return fetch('https://api.themoviedb.org/3/configuration', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  }

  public getById(movieId: string): Promise<any> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2NjM1OTViZjljZWFkY2NlMzc3YWRlYmFlNGEwYSIsInN1YiI6IjY1MGFhOGJkMGQ1ZDg1MDBhYTNkZjNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Q9iq1JMZtlPAjrzzkOycBnPtKIxCtblEZJEBjJrMzs'
      }
    };
    
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(response => response.json())
      .catch(err => console.error(err));
  }

  public getFavMovie(): Promise<any> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2NjM1OTViZjljZWFkY2NlMzc3YWRlYmFlNGEwYSIsInN1YiI6IjY1MGFhOGJkMGQ1ZDg1MDBhYTNkZjNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Q9iq1JMZtlPAjrzzkOycBnPtKIxCtblEZJEBjJrMzs'
      }
    };
    
    return fetch('https://api.themoviedb.org/3/account/20466229/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  }

  public markAsFav(movieId: string, isFav: boolean): Promise<any> {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2NjM1OTViZjljZWFkY2NlMzc3YWRlYmFlNGEwYSIsInN1YiI6IjY1MGFhOGJkMGQ1ZDg1MDBhYTNkZjNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Q9iq1JMZtlPAjrzzkOycBnPtKIxCtblEZJEBjJrMzs'
      },
      body: JSON.stringify({media_type: 'movie', media_id: movieId, favorite: isFav})
    };
    
    return fetch('https://api.themoviedb.org/3/account/20466229/favorite', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  }

  public deleteFav(movieId: string): Promise<any> {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWU2NjM1OTViZjljZWFkY2NlMzc3YWRlYmFlNGEwYSIsInN1YiI6IjY1MGFhOGJkMGQ1ZDg1MDBhYTNkZjNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Q9iq1JMZtlPAjrzzkOycBnPtKIxCtblEZJEBjJrMzs'
      },
      body: JSON.stringify({media_type: 'movie', media_id: movieId, favorite: false})
    };
    
    return fetch('https://api.themoviedb.org/3/account/20466229/favorite', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  }
}
