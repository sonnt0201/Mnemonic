
export function loadFromLocalStorage ({key: key}) {
 const data = localStorage.getItem(key);
 if (!data) return "";
 return JSON.parse(data)
}