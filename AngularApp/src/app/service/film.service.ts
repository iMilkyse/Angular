import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface Film{
    image: string;
    name: string;
    id: number;
    year: string;
    description: string;
    genre?: string;
}

export const collectionMockFilms: Array<Film> = [
  {
    name: 'Довод',
    id: 1,
    image: '/assets/dovod.svg',
    year: '2020',
    description: 'После теракта в киевском оперном театре агент ЦРУ объединяется с британской разведкой, чтобы' +
      ' противостоять русскому олигарху, который сколотил состояние на торговле оружием. Для этого агенты используют' +
      ' инверсию времени — технологию будущего, позволяющую времени идти вспять.',
    genre: 'Драма'
  },
  {
    name: 'Солнцестояние',
    id: 2,
    image: '/assets/sun.svg',
    year: '2019',
    description: 'День летнего солнцестояния – древний праздник, который во всех культурах окутан мистическим ореолом. ' +
      'В отрезанном от цивилизованного мира шведском поселении в этот день проводятся уникальные обряды с многовековой ' +
      'традицией. ',
    genre: 'Драма, Триллер, Фильм ужасов'
  },
  {
    name: 'Отец',
    id: 3,
    image: '/assets/father.svg',
    year: '2020',
    description: 'Энтони уже далеко не молод и живет один в лондонской квартире. Он считает, что прекрасно" +\n' +
      '\t\t\t" справляется со всем сам, и помощь ему не нужна, но его дочь Энн противоположного мнения." +\n' +
      '\t\t\t" Она собралась переезжать в Париж и хочет найти отцу сиделку. Энтони упирается всеми возможными" +\n' +
      '\t\t\t" способами, но в его квартире начинают происходить странности — в гостиной оказывается посторонний" +\n' +
      '\t\t\t" мужчина, дочь вдруг меняет внешность, и куда-то постоянно пропадают любимые часы.\n',
    genre: 'Драма, Триллер, Фильм ужасов'
  },
  {
    name: 'Довлятов',
    id: 4,
    image: '/assets/dovlyatov.svg',
    year: '2018',
    description: 'Фильм о нескольких днях из жизни писателя Сергея Довлатова в Ленинграде начала 70-х годов накануне' +
      ' эмиграции его друга, будущего лауреата Нобелевской премии Иосифа Бродского. Это круговорот из парадоксальных' +
      ' и смешных ситуаций. ',
    genre: 'Драма, Мелодрама'
  }
];

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films$: BehaviorSubject<Array<Film>> = new BehaviorSubject<Array<Film>>([]);

  searchFilm(filmName: string): void{
    if(!filmName || filmName.length<1){
       this.films$.next([]);
    }

    const value = collectionMockFilms.filter(film => film.name.startsWith(filmName))

    this.films$.next(value);
  }

  constructor() { }
}
