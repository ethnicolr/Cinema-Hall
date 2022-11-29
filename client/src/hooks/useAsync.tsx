import React, { Reducer, useCallback, useEffect, useReducer } from 'react'

type Status = 'idle' | 'pending' | 'resolved' | 'rejected'

interface State<T = null> {
    data: null | T
    status: Status
    error: string | null
}

interface Action<T> {
    status: Status
    data?: T | null
    error?: string | null
}

const defaultInitialState: State = { status: 'idle', data: null, error: null }

function useAsync<T>(initialState?: T) {
    const [{ status, data, error }, dispatch] = useReducer<
        Reducer<State<T>, Action<T>>
    >((s, a) => ({ ...s, ...a }), { ...defaultInitialState, ...initialState })

    const setData = (data: any) => dispatch({ data, status: 'idle' })

    const reset = () => dispatch(defaultInitialState)

    const run = useCallback(async (promise: Promise<T>) => {
        if (!promise || !promise.then) {
            throw new Error(
                `The argument passed to useAsync().run must be a promise.`
            )
        }

        return promise
            .then((data) => {
                dispatch({ status: 'resolved', data, error: null })
                return data
            })
            .catch((error: string | Error) => {
                const errorMessage =
                    typeof error === 'object' && error !== null
                        ? error.toString()
                        : error
                dispatch({ status: 'rejected', error: errorMessage as string })
                return errorMessage
            })
    }, [])
    return {
        isIdle: status === 'idle',
        isLoading: status === 'pending',
        isError: status === 'rejected',
        isSuccess: status === 'resolved',
        error,
        status,
        data,
        run,
        setData,
        reset,
    }
}

export { useAsync }
