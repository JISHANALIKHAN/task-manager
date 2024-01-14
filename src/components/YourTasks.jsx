import React, { useContext } from 'react';
import '../index.css';
import { GlobalContext } from '../context/GlobalState';

export const YourTasks = () => {
  const { tasks } = useContext(GlobalContext);

  const NumberOfTasks = tasks.length
  return (
    <>
    <h4 className='m-0 uppercase sm:py-2 md:py-3 2xl:text-3xl'>
      You Have 
    </h4>
    <h1 className='tracking-1px m-0 text-2xl font-bold md:pb-2 md:text-3xl 2xl:text-7xl'>
        {NumberOfTasks} tasks
    </h1>
    </>
  )
}
