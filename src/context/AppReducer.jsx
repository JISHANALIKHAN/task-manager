export default (state , action) => {
    switch (action.type) {
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(transaction => transaction.id !== action.payload)
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload , ...state.tasks]
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.map(
                    task => task.id == action.payload ? {...task, completed: !task.completed } : task
                )
            };
        default:
            return state;
    }
}