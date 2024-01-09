export const dateMask = (value) => {
    let maskedDate = value.replace(/\D/g, "")

    if (value.length > 5) {
        maskedDate = maskedDate.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3")
    } else if (value.length === 5) {
        maskedDate = maskedDate.replace(/(\d{2})(\d{1,2})/, "$1/$2")
    } else if (value.length >= 3) {
        maskedDate = maskedDate.replace(/(\d{2})(\d{1,2})/, "$1/$2")
    }

    return maskedDate
}
