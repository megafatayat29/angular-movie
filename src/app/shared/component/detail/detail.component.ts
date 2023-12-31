import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  isFav: boolean = false;
  movieId: string | undefined;
  @Input() movie!: Movie;
  @Input() baseUrl: any = '';
  loading: boolean = false;

  constructor(
    private readonly movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getConfig();
    this.loading = true;
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        return params['movieId'] ? params['movieId'] : '';
      })
    )
    .subscribe(
      {
        next: (movieId: string) => {
          if(movieId){
            this.movieId = movieId;
            this.movieService.getById(movieId).then(
              (resp) => {
                this.getListFav();
                this.movie = resp;
                this.loading = false;
              }
            );
          }
        },
        error: console.error
      }
    )
  }

  getConfig(): void {
    this.movieService.getConfig().then(
      (resp) => {
        this.baseUrl = resp.images.base_url;
        console.log(resp);
      }
    );
  }

  onClickFav(movieId: string): void {
    this.movieService.markAsFav(movieId,!this.isFav).then(
      (resp) => {
        // this.baseUrl = resp.images.base_url;
        console.log(resp);
        this.isFav = !this.isFav;
      }
    );
  }

  getListFav(): void {
    this.movieService.getFavMovie().then(
      (resp) => {
        this.isFav = !!resp.results.find((m: any) => m.id === Number(this.movieId));
      }
    )
  }
}
