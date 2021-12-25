import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionFilmComponent } from './description-film.component';

describe('DescriptionFilmComponent', () => {
  let component: DescriptionFilmComponent;
  let fixture: ComponentFixture<DescriptionFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
