import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Task = ({ task, updateTask, deleteTask }) => {
  const [assigned, setAssigned] = useState(task.assigned);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(task.comments || []);
  const [error, setError] = useState('');

  const handleAssign = () => {
    if (!assigned.trim()) {
      setError('Please enter a name to assign the task.');
      return;
    }

    updateTask(task.id, { ...task, status: 'in progress', assigned });
    setAssigned('');
    setError('');
  };

  const handleDone = () => {
    updateTask(task.id, { ...task, status: 'done' });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleAssignChange = (e) => {
    setAssigned(e.target.value);
  };

  const handleAssignKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAssign();
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      setError('Comment cannot be empty.');
      return;
    }

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    updateTask(task.id, { ...task, comments: updatedComments });
    setNewComment('');
    setError('');
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.task}</Card.Title>
        <Card.Text>Category: {task.category}</Card.Text>
        {task.status === 'to do' && (
          <div>
            <input
              type="text"
              className="form-control"
              value={assigned}
              onChange={handleAssignChange}
              onKeyPress={handleAssignKeyPress}
              placeholder="Assign to"
            />
            <Button className="mt-2 btn-primary" onClick={handleAssign}>Assign</Button>
          </div>
        )}
        {task.status === 'in progress' && (
          <div>
            <p>Assigned to: {task.assigned}</p>
            <Button className="mt-2 btn-success" onClick={handleDone}>Done</Button>
          </div>
        )}
        {task.status === 'done' && (
          <div>
            <p>Assigned to: {task.assigned}</p>
            <Button className="mt-2 btn-danger" onClick={handleDelete}>Remove</Button>
          </div>
        )}
        <div className="mt-3">
          <h6>Comments:</h6>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={1}
              value={newComment}
              onChange={handleCommentChange}
              onKeyPress={handleCommentKeyPress}
              placeholder="Add a comment"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddComment}>Add Comment</Button>
        </div>
        {error && (
          <div className="mt-2 alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Task;
