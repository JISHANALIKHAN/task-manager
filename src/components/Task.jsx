import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../index.css';

export const Task = ({ task }) => {
  const { deleteTask, toggleCompleted } = useContext(GlobalContext);

  const handleCheckBoxChange = () => {
    toggleCompleted(task.id);
  }

  return (
    <li className={`${task.completed ? 'Completed' : 'Active'} shadow-md bg-white flex justify-around relative py-6 gap-12 sm:text-xl sm:gap-10 md:text-2xl lg:text-3xl xl:text-4xl xl:mb-5 2xl:mb-10 2xl:h-[90px] 2xl:w-[1300px]`}>
      {task.text} <span>{task.completed ? 'Completed' : 'Active'}</span>
      <input 
        type='checkbox'
        checked={task.completed}
        onChange={handleCheckBoxChange}
      />
      <button 
        className='delete-btn absolute bg-red-500 border-0 text-white text-xl py-0 px-1 top-1/2 left-0 -translate-x-8 -translate-y-1/2 lg:text-3xl xl:text-4xl xl:opacity-0 2xl:text-5xl 2xl:opacity-0'
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </li>
  );
};