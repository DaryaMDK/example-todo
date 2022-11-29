export const findAmountOfDoneTasks = (tasks) => {
  return tasks.reduce((doneTasks, task) => {
    return task.isDone ? doneTasks + 1 : doneTasks;
  }, 0);
};

export const setIsDoneToFalse = (tasks) =>
  tasks.map((task) => {
    task.isDone = false;
    return task;
  });
