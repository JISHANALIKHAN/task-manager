import React from 'react'
import './index.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'
import { YourTasks } from './components/YourTasks'
import { TaskSummary } from './components/TaskSummary'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='my-8 mx-auto w-[100%] bg-slate-100 py-3 px-10 rounded-2xl sm:w-[550px] sm:h-[800px] md:w-[650px] md:h-[900px] lg:w-[900px] lg:h-[950px] xl:w-[1200px] xl:h-[1100px] 2xl:w-[1390px] 2xl:h-[1600px]'>
        <YourTasks/>
        <TaskSummary/>
        <Tasks/>
        <AddTask/>
      </div>
    </GlobalProvider>
  )
}

export default App
