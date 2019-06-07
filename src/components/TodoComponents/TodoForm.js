import React from 'react'

const TodoForm = (props) => {
    return (
        <form>
            <input type='text' name='todo' placeholder='...todo' value={props.value} />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
};

export default TodoForm