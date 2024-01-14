import React, { useContext, useState } from 'react';
import '../index.css';
import { GlobalContext } from '../context/GlobalState';

export const AddTask = () => {
  const [text, setText]  = useState(""); 

  const { addTask } = useContext(GlobalContext);
   
  const onSubmit = e => {
    e.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 100000000),
      text,
    }

    addTask(newTask);
    setText('');
  }

  return (
    <>
      <h3 className='md:text-xl xl:text-2xl 2xl:text-5xl'>Add new Task</h3>
      <form onSubmit={onSubmit} className='sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl'>
        <div>
            <label htmlFor="text" className='inline-block my-3 mx-0'>Task name</label>
            <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter your task name...'
            className='border rounded-xl block text-base p-2 w-[100%] focus:outline-green-400 md:text-xl lg:text-2xl xl:text-xl xl:h-14 xl:mb-6 2xl:mb-9 2xl:text-4xl 2xl:h-[120px]'
            />
        </div>
        <button className='btn block text-base mx-0 mt-3 mb-8 p-3 w-[100%] cursor-pointer bg-green-500 hover:bg-green-600  rounded-2xl shadow-md shadow-gray-300 font-bold text-slate-100 md:text-2xl lg:text-3xl lg:h-[80px] lg:w-[840px] xl:text-3xl xl:w-[1120px] xl:py-6 xl:px-6 2xl:text-5xl 2xl:w-[1300px] 2xl:h-[120px]'>
            Add Task
        </button>
      </form>
    </>
  )
}
