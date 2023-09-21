import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ContentComponent } from './component/content/content.component';
import { DetailComponent } from './component/detail/detail.component';
import { ListFavComponent } from './component/list-fav/list-fav.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ContentComponent,
    DetailComponent,
    ListFavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ContentComponent
  ]
})
export class SharedModule { }
