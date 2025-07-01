import './App.css';
import { useState } from 'react';
function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  function addTask() {
    if (task.trim() === '') return;
    setTaskList([...taskList, task]);
    setTask('');
  }
  function deleteTask(indexToRemove) {
    const updatedList = taskList.filter((_, index) => index !== indexToRemove);
    setTaskList(updatedList);
  }
  return (
    <>
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
              <span>{t}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>❌</button>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
export default App;