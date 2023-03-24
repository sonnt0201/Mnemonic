// export function Task({id, name, deadline, isDone, note, steps}) {
//     return Object.assign(this, {id, name, deadline, isDone, note, steps});
// }

export class Task {
  constructor({ id, name, deadline, isDone, note, steps }) {
    this.id = id;
    this.name = name;
    this.deadline = deadline;
    this.isDone = isDone;
    this.note = note;
    this.steps = steps;
    this.isOverdue = false;
    const now = new Date();
    if (deadline) {
      const deadlineTime = new Date(deadline).getTime();
      this.countDaysLeft = this.isOverdue
        ? 0
        : Math.floor((deadlineTime - now) / (1000 * 3600 * 24));
    } else {
      this.countDaysLeft = "";
    }
  }
}
const task = new Task({
  id: 0,
  name: "name1",
  deadline: undefined,
  isDone: false,
  note: "note 1",
  steps: 0,
});
export function TaskStep({ id, name, isDone }) {
  return Object.assign(this, { id, name, isDone });
}
