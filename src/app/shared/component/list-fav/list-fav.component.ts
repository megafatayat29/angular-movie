import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-fav',
  templateUrl: './list-fav.component.html',
  styleUrls: ['./list-fav.component.scss']
})
export class ListFavComponent {

  @Input() movies: Movie[] = [];
  @Input() baseUrl: any = '';

  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getFavMovie();
    this.getConfig();
  }

  getFavMovie(): void {
    this.movieService.getFavMovie().then(
      (resp) => {
        this.movies = resp.results;
        console.log(resp)
      }
    );
  }

  getConfig(): void {
    this.movieService.getConfig().then(
      (resp) => {
        this.baseUrl = resp.images.base_url;
      }
    );
  }
  
  onView(id: string): void {
    this.router.navigateByUrl(`/detail/${id}`);
  }

}
