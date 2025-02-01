export function isNumber(value) {
    return typeof Number(value) === "number" && !isNaN(value)
}

export function getToken() {
    return localStorage.getItem("accessToken")
}