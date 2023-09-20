import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ContentComponent } from './component/content/content.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ContentComponent,
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