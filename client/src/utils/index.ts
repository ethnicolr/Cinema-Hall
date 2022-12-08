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

function getdhm(timestamp: string) {
    const dayNames = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]

    const monthNames = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
    ]

    const date = new Date(timestamp)
    const day = date.getDate()
    const dayWeek = date.getDay()
    const month = date.getMonth()
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    const movieDate = `${day} ${dayNames[dayWeek].toLowerCase()}, ${dayNames[
        dayWeek
    ].toLowerCase()}`

    return {
        day,
        hour,
        minute,
        dayWeek: dayNames[dayWeek],
        month: monthNames[month],
        movieDate,
    }
}

function groupArray<T>(
    arr: T[],
    groupBy: Record<string, any>,
    groupFns: ((item: T) => string)[],
    resultObj?: keyof T
): Record<string, any> {
    const result = groupBy

    for (const item of arr) {
        let currentGroupBy = result
        for (const groupFn of groupFns) {
            const value = groupFn(item)
            if (!currentGroupBy[value]) {
                if (groupFn === groupFns[groupFns.length - 1]) {
                    currentGroupBy[value] = []
                } else {
                    currentGroupBy[value] = {}
                }
            }
            currentGroupBy = currentGroupBy[value]
        }
        currentGroupBy.push(resultObj ? item[resultObj] : item)
    }
    return result
}

export { RE_EMAIL, get_prop, getdhm, groupArray }
