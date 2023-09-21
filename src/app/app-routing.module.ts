import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/component/content/content.component';
import { DetailComponent } from './shared/component/detail/detail.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
