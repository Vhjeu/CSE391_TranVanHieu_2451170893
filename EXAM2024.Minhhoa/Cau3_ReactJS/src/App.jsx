import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('High');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  const handleAddTask = () => {
    const trimmedName = taskName.trim();
    if (!trimmedName || trimmedName.length > 100) {
      setError('Tên Task không được để trống và không quá 100 kí tự!');
      return;
    }
    const newTask = {
      id: Date.now(),
      taskName: trimmedName,
      priority: priority,
      status: 'To Do'
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setPriority('High');
    setError('');
    setShowModal(false);
  };

  const getPriorityStyle = (level) => {
    if (level === 'High') return 'text-danger';
    if (level === 'Medium') return 'text-warning';
    return 'text-success';
  };

  const renderStatusIcon = (status) => {
    if (status === 'Done') return <i className="bi bi-circle text-purple fs-5"></i>;
    if (status === 'In Progress') return <div className="progress-arc"></div>;
    return <i className="bi bi-circle text-muted fs-5"></i>;
  };

  return (
    <div className="p-4">
      <div className="task-list-container border border-primary-subtle">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-dark mb-0">Task List</h2>
          <button className="btn btn-purple rounded-pill px-4" onClick={() => setShowModal(true)}>
            <i className="bi bi-plus fs-5 align-middle"></i> Add Task
          </button>
        </div>

        <div className="d-flex flex-column gap-3">
          {tasks.map(task => (
            <div key={task.id} className="card task-card p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div style={{ width: '25%' }}>
                  <small className="text-muted d-block mb-1">Task</small>
                  <span className="fw-semibold">{task.taskName}</span>
                </div>
                <div style={{ width: '20%' }}>
                  <small className="text-muted d-block mb-1">Priority</small>
                  <span className={`fw-bold small ${getPriorityStyle(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                  <span className="badge-status">{task.status}</span>
                </div>
                <div style={{ width: '10%', textAlign: 'center' }}>
                  {renderStatusIcon(task.status)}
                </div>
                <div className="action-icons d-flex justify-content-end" style={{ width: '15%' }}>
                  <i className="bi bi-pencil-square text-dark"></i>
                  <i className="bi bi-trash text-danger"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-4 border-1 border-primary-subtle">
                <div className="modal-header border-0 pb-0 mt-2 mx-2">
                  <h5 className="modal-title fw-bold">Add Task</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body px-4 pt-3 pb-4">

                  <div className="mb-4">
                    <label className="form-label text-muted small fw-semibold">Task</label>
                    <input
                      type="text"
                      className={`form-control rounded-3 py-2 ${error ? 'is-invalid' : ''}`}
                      placeholder="Type your task here..."
                      value={taskName}
                      onChange={(e) => {
                        setTaskName(e.target.value);
                        if (error) setError('');
                      }}
                    />
                    {error && <div className="invalid-feedback">{error}</div>}
                  </div>

                  <div className="mb-5">
                    <label className="form-label text-muted small fw-semibold d-block">Priority</label>
                    <div className="d-flex gap-3">
                      <button className={`btn px-4 rounded-3 ${priority === 'High' ? 'btn-danger' : 'btn-outline-danger bg-white'}`} onClick={() => setPriority('High')}>High</button>
                      <button className={`btn px-4 rounded-3 ${priority === 'Medium' ? 'btn-warning text-dark' : 'btn-outline-warning bg-white text-dark'}`} onClick={() => setPriority('Medium')}>Medium</button>
                      <button className={`btn px-4 rounded-3 ${priority === 'Low' ? 'btn-success' : 'btn-outline-success bg-white'}`} onClick={() => setPriority('Low')}>Low</button>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button className="btn text-white px-4 py-2 rounded-3" style={{ backgroundColor: '#6b7280' }} onClick={handleAddTask}>Add</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;