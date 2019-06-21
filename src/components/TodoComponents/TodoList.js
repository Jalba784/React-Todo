// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    // console.log("TodoList Props:", props);
    return (
        <div className='shopping-list'>
            {props.todoItems.map(item => {
                return (
                    <Item
                        groceryItem={item}
                        toggleItem={props.toggleItem}
                        key={item.id}
                    />
                );
            })}
        </div>
    );
};