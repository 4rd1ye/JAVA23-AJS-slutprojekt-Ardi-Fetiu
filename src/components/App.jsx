import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import TaskForm from './TaskForm';
import TaskColumn from './TaskColumn';
import FilterTasks from './FilterTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('assignments').onSnapshot(snapshot => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(fetchedTasks);
      setFilteredTasks(fetchedTasks);
    });
    return () => unsubscribe();
  }, []);

  const addTask = (task) => {
    db.collection('assignments').add(task);
  };

  const updateTask = (id, updatedTask) => {
    db.collection('assignments').doc(id).update(updatedTask);
  };

  const deleteTask = (id) => {
    db.collection('assignments').doc(id).delete();
  };

  const filterTasks = (category) => {
    if (category === 'all') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.category === category));
    }
  };

  const clearFilter = () => {
    setFilteredTasks(tasks);
  };

  const categorizeTasks = (status) => {
    return filteredTasks.filter(task => task.status === status);
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <TaskForm addTask={addTask} />
        </div>
        <div className="col">
          <FilterTasks filterTasks={filterTasks} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TaskColumn title="To Do" tasks={categorizeTasks('to do')} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
        <div className="col">
          <TaskColumn title="In Progress" tasks={categorizeTasks('in progress')} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
        <div className="col">
          <TaskColumn title="Done" tasks={categorizeTasks('done')} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
