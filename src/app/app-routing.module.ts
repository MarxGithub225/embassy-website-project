import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DetailsnewsComponent } from './modules/news/detailsnews/detailsnews.component';
import { NewsComponent } from './modules/news/news.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'news', component : NewsComponent},
  {path: 'news/:id', component : DetailsnewsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
