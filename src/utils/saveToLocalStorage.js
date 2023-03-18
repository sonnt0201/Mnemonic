

export function saveToLocalStorage({
    key,
    value
}) {
    const encodedData = JSON.stringify(value)
    localStorage.setItem(key, encodedData )
}