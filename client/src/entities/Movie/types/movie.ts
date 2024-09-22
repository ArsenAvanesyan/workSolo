export type Movie = {
    id: number;
    userId: number;
    name: string;
    info: string;
    img: string;
}

export type MovieWithoutId = Omit<Movie, 'id'>
// export type MovieWithoutIdSecond = Omit<MovieWithoutId, 'userId'>


export type MovieResponse = {
    message: string;
    movie: []
}

export type MovieId = Movie['id']