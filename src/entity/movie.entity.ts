import { Person } from './person.entity';
import { Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryColumn()
  movieId: number;

  @JoinTable()
  @ManyToMany(() => Person)
  actors: Person[];

  @JoinTable()
  @ManyToMany(() => Person)
  director: Person[];

  @JoinTable()
  @ManyToMany(() => Person)
  producer: Person[];

  @JoinTable()
  @ManyToMany(() => Person)
  cinematographer: Person[];

  @JoinTable()
  @ManyToMany(() => Person)
  screenwriter: Person[];

  @JoinTable()
  @ManyToMany(() => Person)
  composer: Person[];
}
