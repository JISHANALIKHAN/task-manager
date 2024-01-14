import React, { useContext } from 'react';
import '../index.css';
import { GlobalContext } from '../context/GlobalState';

export const TaskSummary = () => {
  const { tasks } = useContext(GlobalContext);

  const completedTasks = tasks.filter(task => task.completed);

  const activeTasks = tasks.filter(task => !task.completed);

  return (
    <div className='bg-white shadow-md shadow-gray-300 p-3 flex justify-between my-2 mx-0 sm:px-4 sm:mb-7 md:text-2xl xl:mb-6 xl:h-[100px] 2xl:h-[150px] 2xl:py-10'>
        <div className='flex-1 text-center border-r-2 border-gray-300  md:text-2xl'>
            <h4 className='uppercase m-0'>Completed</h4>
            <p className='text-base tracking-1px my-1 mx-0 text-green-500 md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl'>{completedTasks.length}</p>
        </div>
        <div className='flex-1 text-center  md:text-2xl'>
          <h4 className='uppercase m-0'>Active</h4>
          <p className='text-xl tracking-1px my-1 mx-0 text-cyan-400 md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl'>{activeTasks.length}</p>
        </div>
    </div>
  )
}
