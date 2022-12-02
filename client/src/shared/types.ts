interface CinemaShow {
    id: number
    technology: string
    format: string
    price: number
    startTime: string
}

interface Movie {
    id: number
    name: string
    poster: string
    preview: string
    description: string
    imdbRating: string
    yearOfCreation: string
    country: string
    language: string
    genre: string
    mainCrew: string
    director: string
    screenwriter: string
    duration: string
    ageRestriction: string
    rentalStart: string
}

interface CinemaShowRespose extends CinemaShow {
    movie: Movie
}

interface MovieResponse extends Movie {
    cinemaShows: CinemaShow[]
}

export { Movie, CinemaShow, CinemaShowRespose, MovieResponse }
