import { TaskManager } from "../TaskManeger";

describe("teste", () => {
  let taskManager: TaskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test("add task", () => {
    const task = taskManager.addTask("minha tarefa");

    expect(task.name).toBe("minha tarefa");
    expect(task.completed).toBeFalsy;
  });

  test("remove task", () => {
    taskManager.addTask("pc");
    taskManager.removeTask("pc");

    expect(taskManager.listTasks().length).toBe(0);
  });

  test("complete task", () => {
    taskManager.addTask("teclado");

    const tarefa = taskManager.completeTask("teclado");

    expect(tarefa?.completed).toBeTruthy;
  });
});
