import React from 'react';
import Task from './Task';

const TaskColumn = ({ title, tasks, updateTask, deleteTask }) => {
  return (
    <div>
      <h3>{title}</h3>
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} assigned={task.assigned} />
      ))}
    </div>
  );
};

export default TaskColumn;