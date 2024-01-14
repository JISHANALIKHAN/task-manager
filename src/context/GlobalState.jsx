import React, { createContext , useReducer } from "react";
import AppReducer from './AppReducer.jsx';


const initalState = {
    tasks: []
}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
    const [state , dispatch] = useReducer(AppReducer , initalState);


    function deleteTask(id) {
        dispatch({
            type: 'DELETE_TASK',
            payload: id,
        })
    }
    
    function addTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: task,
        })
    }
    
    function toggleCompleted(id) {
        const taskToToggle = state.tasks.find(task => task.id === id);

        if (taskToToggle && !taskToToggle.completed) {
            dispatch({
                type: 'TOGGLE_COMPLETED',
                payload: id
            })
        }
    }

    return (
    <GlobalContext.Provider value={{
        tasks: state.tasks,
        deleteTask,
        addTask,
        toggleCompleted
    }}>
        {children}
    </GlobalContext.Provider>
    )
}