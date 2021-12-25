import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddFilmComponent} from "./pages/add-film/add-film.component";
import {OutputComponent} from "./components/output/output.component";
import {DescriptionFilmComponent} from "./pages/description-film/description-film.component";

const appRoutes: Routes = [
  {path: 'addFilm', component: AddFilmComponent},
  {path: 'aboutFilm', component:OutputComponent},
  {
    path: 'film/:id',
    component: DescriptionFilmComponent
  }
  ,

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
