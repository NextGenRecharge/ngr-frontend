export function isNumber(value) {
    return typeof Number(value) === "number" && !isNaN(value)
}