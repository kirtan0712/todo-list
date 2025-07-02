import './App.css';
import { useState } from 'react';
function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  function addTask() {
    if (task.trim() === '') return;
    setTaskList([...taskList, task]);
    setTask('');
  }

  function deleteTask(indexToRemove) {
    const updatedList = taskList.filter((_, index) => index !== indexToRemove);
    setTaskList(updatedList);
  }

  function startEdit(index) {
    setEditIndex(index);
    setEditText(taskList[index]);
  }

  function saveEdit(index) {
    const updatedList = [...taskList];
    updatedList[index] = editText;
    setTaskList(updatedList);
    setEditIndex(null);
    setEditText('');
  }

  function cancelEdit() {
    setEditIndex(null);
    setEditText('');
  }

  return (
    <div className="main">
     
      <h1>Todo List</h1>
     
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {taskList.map((t, index) => (
          <div key={index} className="task-item">
            {editIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className="btn-grp">
                  <button className="edit-btn" onClick={() => saveEdit(index)}>Save</button>
                  <button className="edit-btn" onClick={cancelEdit}>Cancel</button>
                </div>  
              </>
            ) : (
              <>
                <span>{t}</span>
                <div className="btn-grp">
                  <button className="delete-btn" onClick={() => deleteTask(index)}>❌</button>
                  <button className="edit-btn" onClick={() => startEdit(index)}>Edit</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default App;
