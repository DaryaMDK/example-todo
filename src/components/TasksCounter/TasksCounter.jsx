import styles from "./styles.module.scss";

const TasksCounter = ({ completedTasks, tasksAmount }) => {
  return (
    <div className={styles.taskCounter}>
      {completedTasks}/{tasksAmount}
      <span className={styles.bg} style={{
        width: `${completedTasks / tasksAmount * 100}%`
      }}></span>
    </div>
  );
};

export default TasksCounter;
