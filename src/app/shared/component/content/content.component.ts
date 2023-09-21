import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Input() baseUrl: any = '';

  constructor(
    private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.getConfig();
  }

  getAll(): void {
    this.movieService.getAll().then(
      (resp) => {
        this.movies = resp.results;
        console.log(this.movies)
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

}
