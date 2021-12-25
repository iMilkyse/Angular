import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { delay, distinctUntilChanged } from 'rxjs/operators';
import {FilmService} from "../../service/film.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.sass']
})
export class OutputComponent  {


  form: FormGroup;
  modalIsOpen: boolean = false;

  films$ = this.filmService.films$;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService
  ) {
    this.form = this.fb.group({
      searchInput: []
    });

    // @ts-ignore
    this.form.get('searchInput').valueChanges
      .pipe(
        delay(700),
        distinctUntilChanged(),
      )
      .subscribe(res => {
        this.filmService.searchFilm(res);
      });
  }

  formatValue(arr: any[], id:any): any {
    return arr.find(item => item.id === id);
  }

  openModal(): void {
    this.modalIsOpen = true;
  }

}
