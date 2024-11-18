export interface ITask {
  name: string;
  completed: boolean;
}

export class TaskManager {
  private tasks: ITask[] = [];

  addTask(name: string): ITask {
    const task: ITask = { name, completed: false };

    this.tasks.push(task);

    return task;
  }

  removeTask(name: string): void {
    this.tasks = this.tasks.filter((task) => {
      task.name !== name;
    });
  }

  listTasks(): ITask[] {
    return this.tasks;
  }

  completeTask(name: string): ITask | undefined {
    const task = this.tasks.find((task) => task.name == name);

    if (task) {
      task.completed = true;
    }

    return task;
  }
}
