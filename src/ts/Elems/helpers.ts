export const getAvailableDates = () => {
    const today = new Date()
    const minDate = new Date()
    const maxDate = new Date()
    minDate.setDate(today.getDate() - 7)
    maxDate.setDate(today.getDate() + 7)
    return {minDate: minDate.toISOString().split('T')[0], maxDate: maxDate.toISOString().split('T')[0]}
}

export const getValidDate = () => {
    return new Date().toISOString().split('T')[0]
}

export const createTimesObject = () => {
    const obj:any = {}
    for (let i = 10; i<=20; i+=2) {
        const arr = Array.from({length: 100})
        arr.fill(false)
        obj[`${i}.00`] = arr
    }
    return obj
}