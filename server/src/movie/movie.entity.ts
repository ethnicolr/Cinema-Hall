import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CinemaShowEntity } from 'src/cinema.show/cinema.show.entity';

@Entity()
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  poster: string;

  @Column()
  preview: string;

  @Column()
  description: string;

  @Column()
  imdbRating: string;

  @Column()
  yearOfCreation: string;

  @Column()
  country: string;

  @Column()
  language: string;

  @Column()
  genre: string;

  @Column()
  mainCrew: string;

  @Column()
  director: string;

  @Column()
  screenwriter: string;

  @Column()
  duration: string;

  @Column()
  ageRestriction: string;

  @Column()
  rentalStart: string;

  @OneToMany(() => CinemaShowEntity, (cinemaShow) => cinemaShow.movie)
  cinemaShows: CinemaShowEntity[];
}
