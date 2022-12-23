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

interface TicketsUserType extends CinemaShowType {
    movie: MovieType
    tickets: TicketType[]
}

interface MovieRelationType extends MovieType {
    cinemaShows: CinemaShowType[]
}

type FormatType = Record<string, CinemaShowType[]>
type SessionsType = Record<string, FormatType>
type MovieShowsType = Record<string, SessionsType>

interface HallConfigType {
    id: number
    width: number
    height: number
    seatWidth: number
    seatBlocks: SeatBlockType[]
}

interface SeatBlockType {
    id: number
    x: number
    y: number
    width: number
    height: number
    seats: number
    rows: number
}

interface TicketType {
    id?: number
    row: number | string
    chair: number | string
}

interface CinemaShowWithHallType extends CinemaShowType {
    tickets: TicketType[]
    hall: HallConfigType
}

export {
    CinemaShowType,
    MovieType,
    CinemaShowRelationType,
    MovieRelationType,
    SessionsType,
    MovieShowsType,
    HallConfigType,
    SeatBlockType,
    CinemaShowWithHallType,
    TicketType,
    TicketsUserType,
}
