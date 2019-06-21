import React from 'react';

class TodoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listItem: ""
        }
    }
}

submitHandler = event => {
    even.preventDefault();
    // console.log("LIST ITEM PROPS:", this.props.addNewItem);
    // console.log(this.state.listItem);
    this.props.addNewItem(this.state.listItem);
    this.setState({ listItem: "" });
};

render() {
    return (
        <form onSubmit={this.submitHandler}>
            <input value={this.state.listItem}
                   placeholder={'...todo'}
                   type={'text'}
                   onChange={this.changeHandler}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default TodoForm