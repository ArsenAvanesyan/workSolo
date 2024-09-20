export type Movie = {
    id: number;
    name: string;
    description: string;
    poster: string;
}

export type MovieWithoutId = Omit<Movie, 'id'>

export type MovieId = Movie['id']