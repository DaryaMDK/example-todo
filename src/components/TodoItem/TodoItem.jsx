import { useState } from "react";
import styles from "./styles.module.scss";

const TodoItem = ({ task, onDeleteTask, setTasks }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const onDoneChange = (e) => {
    setTasks((prevState) =>
      prevState.map((targetTask) => {
        if (targetTask.id !== task.id) return targetTask;
        return { ...targetTask, isDone: e.target.checked };
      })
    );
  };

  const editValueChange = (e) => {
    setEditValue(e.target.value);
  };

  const onEditEnterPress = (e) => {
    if (e.code !== "Enter") return;

    setIsEditMode(false);
    setTasks((prevState) =>
      prevState.map((targetTask) => {
        if (targetTask.id !== task.id) return targetTask;
        targetTask.text = editValue;
        return targetTask;
      })
    );
  };

  const onEdit = () => setIsEditMode(true);

  return (
    <li>
      <label>
        <input
          onChange={onDoneChange}
          checked={task.isDone}
          className={styles.checkboxItem}
          type="checkbox"
        />
      </label>
      {isEditMode ? (
        <input
          className={styles.inputEdit}
          onInput={editValueChange}
          onKeyPress={onEditEnterPress}
          value={editValue}
          type="text"
        />
      ) : (
        <p
          className={styles.textTask}
          style={{ textDecoration: task.isDone ? "line-through" : "none" }}
        >
          {task.text}
        </p>
      )}

      <div>
        {!isEditMode && (
          <button className={styles.edit} onClick={onEdit}>
            edit
          </button>
        )}

        <button
          className={styles.clearTasksBtn}
          onClick={() => onDeleteTask(task.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
