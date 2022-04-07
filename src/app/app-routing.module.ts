import { BookShelfComponent } from './book-page/book-shelf/book-shelf.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book-page/add-book/add-book.component';
import { BookListComponent } from './book-page/book-list/book-list.component';
import { ViewBookComponent } from './book-page/view-book/view-book.component';

import { GenreListComponent } from './genre-page/genre-list/genre-list.component';
import { AddGenreComponent } from './genre-page/add-genre/add-genre.component';
import { AuthorListComponent } from './author-page/author-list/author-list.component';
import { GeneralPageComponent } from './setting-page/general-page/general-page.component';
import { PersonalizeComponent } from './setting-page/personalize/personalize.component';
import { NotificationComponent } from './setting-page/notification/notification.component';

const routes: Routes = [
  { path: '', redirectTo: 'bookshelf', pathMatch: 'full' },
  { path: 'bookshelf', component: BookShelfComponent},
  { path: 'bookshelf/add-new-book', component: AddBookComponent},
  { path: 'manage-book-list', component: BookListComponent},
  { path: 'view-book', component: ViewBookComponent},
  { path: 'genre/add-new-genre', component: AddGenreComponent},
  { path: 'genre', component: GenreListComponent},
  { path: 'authors', component: AuthorListComponent},
  { path: 'setting/general', component: GeneralPageComponent},
  { path: 'setting/personalize', component: PersonalizeComponent},
  { path: 'setting/notification', component: NotificationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
