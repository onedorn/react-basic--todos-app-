import React from 'react';

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            content: ''
        })
        this.props.addTodo(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddForm;
