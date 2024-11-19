import { TaskManager } from "../TaskManeger";

describe("testes de regression", () => {
  let taskManager: TaskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test("não deve quebrar quando adicionarmos uma nova tafere", () => {
    taskManager.addTask("teste2");
    taskManager.completeTask("teste2");

    const newTask = taskManager.addTask("novatarefa2");

    expect(newTask.name).toBe("novatarefa2");
    expect(newTask.completed).toBeFalsy();
  });
});
