import React, { useState } from 'react';
import "./TodoList.css"

function TodoList() {
  // State to track selected task and person
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Dropdown options for tasks and people
  const tasks = ["Header","First Section", "Second Section", "Third Section", "Four Section-R","Four Section-L", "Five Section-R", "Five Section-R","Six Section-R","Six Section-R", "Music", "iphone", "Support", "search","cart",  "Footer"];
  const people = ["Sami", "Esmael", "Adisu", "Mekidi", "Alemawit","Telele", "Kebe", "Meizan", "Rosa", "Yitbark","Lomi", "Esmael", "Yabu", "M.Bora", "Yoni","Abidela", "Sol", "Yo"];

  // Handle task and person selection
  const handleTaskChange = (e) => {
    setSelectedTask(e.target.value);
  };

  const handlePersonChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  // Handle adding the task to the list
  const handleAddTask = () => {
    if (selectedTask && selectedPerson) {
      setTaskList([...taskList, { task: selectedTask, person: selectedPerson }]);
      setSelectedTask('');
      setSelectedPerson('');
    }
  };
// savetask function
  const saveTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  // Delete task function
//   const deleteTask = (index) => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

  return (
    <div className='Task07'>
      <h2 className='Tasks'>Please Select task with assigned yourself</h2>
      
      {/* Task and Person Dropdowns */}
      <div>
        <select value={selectedTask} onChange={handleTaskChange}>
          <option value="" disabled>Select Task</option>
          {tasks.map((task, index) => (
            <option key={index} value={task}>
              {task}
            </option>
          ))}
        </select>

        <select value={selectedPerson} onChange={handlePersonChange}>
          <option value="" disabled>Select Your Name</option>
          {people.map((person, index) => (
            <option key={index} value={person}>
              {person}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask}>Add Task</button>
        
    <button onClick={handleAddTask}>If task completed</button>
          
        <button className='GitHub'>
         <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
             push to GitHub
            </a> 
        </button>
         

      </div>
      

      {/* Display Task List */}
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item.task} - Assigned to: {item.person}
            <button onClick={() => saveTask(index)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList
