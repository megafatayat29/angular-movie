import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/component/content/content.component';
import { DetailComponent } from './shared/component/detail/detail.component';
import { ListFavComponent } from './shared/component/list-fav/list-fav.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: ''
  },
  { 
    path: '', 
    component: ContentComponent
  },
  { 
    path: 'detail/:movieId', 
    component: DetailComponent
  },
  { 
    path: 'favorite', 
    component: ListFavComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
