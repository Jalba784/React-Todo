import React from 'react';

const Todo = props => (
    const clickHandler = () => {
        props.toggleItem(props.groceryItem.id);
    };
    return (
        <div
            className={`item${props.groceryItem.purchased ? " purchased" : ""}`}
            onClick={clickHandler}
        >
            <p>
                {props.groceryItem.name}
            </p>
        </div>
    );
);