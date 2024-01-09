export const formattedDate = (date) => {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const fullDate = `${Number(day) + 1}/${Number(month) + 1}/${year}`
    return fullDate
}

export const requisitionDate = (date) => {
    const [day, month, year] = date.split("/")
    const newDateFormat = `${year}-${month}-${Number(day)}`
    const newDate = new Date(newDateFormat).toISOString()
    return newDate
}
