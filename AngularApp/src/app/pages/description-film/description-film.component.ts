import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {collectionMockFilms, Film, FilmService} from "../../service/film.service";
import {delay, distinctUntilChanged} from "rxjs/operators";
import {ToggleComponent} from "../../components/toggle/toggle.component";

@Component({
  selector: 'app-description-film',
  templateUrl: './description-film.component.html',
  styleUrls: ['./description-film.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class DescriptionFilmComponent implements OnInit {

  formFilmInfo: FormGroup;
  formSwitch: FormGroup;

  currentFilm: Film | undefined = {
    id: 0,
    name: "000",
    year: '2020',
    description: "текст",
    genre: "текст",
    image: "/assets/img/minari.svg"
  };

  isFilmSearch: boolean = true;
  constructor(private fb: FormBuilder,
              private  router: Router,
              private  route: ActivatedRoute,
              private filmService: FilmService,
              private cdr: ChangeDetectorRef) {

    this.route.params.subscribe(params => {
      this.route.params.subscribe(params => {
        this.currentFilm = collectionMockFilms.find(film => film.id === +params['id']);
        this.cdr.markForCheck;
      })
    })

    this.formSwitch = this.fb.group({
      toggle: [true]
    })

    this.formSwitch.valueChanges.subscribe(res => {
        this.isFilmSearch = res.toggle;
      }
    )

    this.formFilmInfo = this.fb.group({
        addFilmInput__title: [this.currentFilm?.name],
        addFilmInput__year: [this.currentFilm?.year],
        addFilmInput__description: [this.currentFilm?.description],
        addFilmInput__genres: [this.currentFilm?.genre]
      }
    )
  }

  ngOnInit(): void {
  }

}
