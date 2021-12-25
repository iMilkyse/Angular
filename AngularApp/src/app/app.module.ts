import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { AboutFilmComponent } from './pages/aboutFilm/about-film.component';
import { OutputComponent } from './components/output/output.component';
import {CommonModule} from "@angular/common";
import { DescriptionFilmComponent } from './pages/description-film/description-film.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { AddFilmComponent } from './pages/add-film/add-film.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayModule} from "@angular/cdk/overlay";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleComponent,
    AboutFilmComponent,
    OutputComponent,
    DescriptionFilmComponent,
    SaveButtonComponent,
    AddFilmComponent,
    GenreSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
