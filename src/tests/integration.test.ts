import { TaskManager } from "../TaskManeger";

// descreve um conjunto ou suite de testes
describe("integration test", () => {
  let taskManager: TaskManager;

  // usado para limpar o teste
  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test("remove", () => {
    taskManager.addTask("teste");

    taskManager.completeTask("teste");

    taskManager.removeTask("teste");

    expect(taskManager.listTasks().length).toBe(0);
  });

  test("adicionar e completar uma tarefa", () => {
    taskManager.addTask("teste");

    taskManager.completeTask("teste");

    const task = taskManager.listTasks();

    expect(task[0].completed).toBeTruthy();
  });
});
