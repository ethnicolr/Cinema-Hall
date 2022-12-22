import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './context/auth-context'
import { ModalProvider } from './context/modal-context'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './screens/main'
import { MoviePage } from './screens/moviePage'
import { Timetable } from './screens/timetable'
import { BuyTickets } from './screens/buy-tickets'
import { Cabinet } from './screens/cabinet'

const queryClient = new QueryClient()

export default function App() {
    return (
        <>
            <HashRouter>
                <QueryClientProvider client={queryClient}>
                    <ModalProvider>
                        <AuthProvider>
                            <Header />
                            <Routes>
                                <Route path='/' element={<Main />} />
                                <Route
                                    path='/movie/:id'
                                    element={<MoviePage />}
                                />
                                <Route
                                    path='/timetable'
                                    element={<Timetable />}
                                />
                                <Route
                                    path='/buy-tickets/:id'
                                    element={<BuyTickets />}
                                />
                                <Route path='/cabinet' element={<Cabinet />} />
                            </Routes>

                            <Footer />
                        </AuthProvider>
                    </ModalProvider>
                </QueryClientProvider>
            </HashRouter>
        </>
    )
}
