import React from 'react';
import Todos from './Todos'
import AddForm from './addForm'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, content: 'buy some milk bitch'},
                {id: 2, content: 'play guitar and more'},
            ]
        }
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !==id;
        });
        this.setState({
            todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos: todos
        })
    }
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todos</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default App;
