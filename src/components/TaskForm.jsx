import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const categories = ['ux', 'frontend', 'backend']; 

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '' || category.trim() === '') {
      setError('Task and category cannot be empty.');
    } else {
      setError('');
      addTask({ task, category, status: 'to do', comments: [], assigned: '' });
      setTask('');
      setCategory('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="taskFormTask">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleTaskChange}
        />
      </Form.Group>
      <Form.Group controlId="taskFormCategory" className="mt-2">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {error && (
        <div className="mt-2 alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <Button variant="primary" type="submit" className="mt-2">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
