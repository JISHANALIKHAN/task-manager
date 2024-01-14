import React, { useContext } from 'react';
import '../index.css';
import { GlobalContext } from '../context/GlobalState';
import { Task } from './Task';

export const Tasks = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <>
      <h4 className='m-0 uppercase sm:px-2 sm:py-2 md:text-2xl xl:text-3xl 2xl:text-4xl'>Your Tasks</h4> 
      <ul className='list list-none p-0 mb-10 opacity-100 sm:px-3 sm:py-3'>
        {tasks.map(task => (
          <Task key={task.id} task={task}/>
        ))}
      </ul>
    </> 
  )
}
