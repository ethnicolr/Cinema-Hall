import axios from 'axios'
import {
    CinemaShowRelationType,
    CinemaShowWithHallType,
    TicketType,
} from '../shared/types'
const API_URL = process.env.API_URL
const localStorageKey = '__auth_provider_token__'
const getUserToken = () => window.localStorage.getItem(localStorageKey)

const apiClient = axios.create({
    baseURL: API_URL,
})

const getCinemaShows = async (params?: string) => {
    const response = await apiClient.get<CinemaShowRelationType[]>(
        '/cinemaShows',
        { params: new URLSearchParams(params) }
    )
    return response.data
}

const getCinemaShow = async (id?: string) => {
    const response = await apiClient.get<CinemaShowWithHallType>(
        `/cinemaShows/${id}`
    )
    return response.data
}

const butTickets = async (showId: string, tickets: TicketType[]) => {
    const token = getUserToken()
    const response = await apiClient.post(
        `cinemaShows/${showId}/tickets`,
        tickets,
        {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    )
    return response.data
}

export { getCinemaShows, getCinemaShow, butTickets }
