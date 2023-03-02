
export function Task({id, name, deadline, isDone, note, steps}) {
    return Object.assign(this, {id, name, deadline, isDone, note, steps});
}

export function TaskStep({id, name,isDone}) {
    return Object.assign(this, {id, name, isDone})
}