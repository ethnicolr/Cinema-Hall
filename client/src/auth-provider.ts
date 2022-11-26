const API_URL = process.env.API_URL
const localStorageKey = '__auth_provider_token__'

interface Account {
    email: string
    password: string
}

interface UserResponse {
    success: boolean
    message?: string
    access_token?: string
    email?: string
    id?: number
}

interface Account {
    email: string
    password: string
}

function getToken() {
    return window.localStorage.getItem(localStorageKey)
}

function client(endpoint: string, body: object): Promise<UserResponse> {
    const token = getToken()

    const config = {
        method: body ? 'POST' : 'GET',
        body: JSON.stringify(body),
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json',
        },
    }
    return fetch(`${API_URL}/${endpoint}`, config).then(async (response) => {
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return Promise.reject(data.message)
        }
    })
}

function handleUserResponse(user: UserResponse) {
    window.localStorage.setItem(localStorageKey, user.access_token!)
    return user
}

function login(form: Account): Promise<UserResponse> {
    return client('login', { data: form }).then(handleUserResponse)
}
function register(form: Account): Promise<UserResponse> {
    return client('register', { data: form })
}

function logout() {
    window.localStorage.removeItem(localStorageKey)
}

export { login, register, logout, UserResponse, Account }
