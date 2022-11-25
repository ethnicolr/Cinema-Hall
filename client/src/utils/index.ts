const RE_EMAIL =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function get_prop<T extends Record<string, unknown>, K extends keyof T>(
    obj: T
) {
    return (Object.keys(obj) as K[]).reduce((obj, key) => {
        obj[key] = ''
        return obj
    }, {} as Record<keyof T, ''>)
}

export { RE_EMAIL, get_prop }