import { useState, useEffect } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-3"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={addTask}
      >
        Add
      </button>
      <ul className="mt-3">
        {tasks.map((task, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
