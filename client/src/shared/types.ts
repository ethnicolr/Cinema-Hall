interface CinemaShowType {
    id: number
    technology: string
    format: string
    price: number
    startTime: string
}

interface MovieType {
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

interface CinemaShowRelationType extends CinemaShowType {
    movie: MovieType
}

interface MovieRelationType extends MovieType {
    cinemaShows: CinemaShowType[]
}

type FormatType = Record<string, CinemaShowType[]>
type SessionsType = Record<string, FormatType>
type MovieShowsType = Record<string, SessionsType>

export {
    CinemaShowType,
    MovieType,
    CinemaShowRelationType,
    MovieRelationType,
    SessionsType,
    MovieShowsType,
}
