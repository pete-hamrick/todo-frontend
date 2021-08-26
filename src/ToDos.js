import React, { Component } from 'react';
import { createToDo, getToDos, updateToDo } from './fetch-utils';
import './ToDos.css';
class ToDos extends Component {
    state = { 
        todos: [],
        new_todo: '',

    }
    componentDidMount = () => {
        this.fetchToDos();
    }

    fetchToDos = async () => {
        const data = await getToDos(this.props.token);
        this.setState({todos: data});
    }


    handleAddToDo = async (e) => {
        e.preventDefault();
        const data = await createToDo(this.props.token, {
            todo: this.state.new_todo,
            completed: false,
        });
        this.setState({ new_todo: '' });
        this.fetchToDos();
    }

    handleCompleted = async (todo) => {
        todo.completed = !todo.completed;
        const data = await updateToDo(this.props.token, todo);
        this.fetchToDos();
    }
    render() { 
        return ( 
            <>
                <section className='todo-list'>
                    <h1>My To Do List</h1>
                    <article className='todos'>
                        {this.state.todos.map(todo => (
                            <div className='todo-item' key={todo.id}>
                                <input 
                                    id={todo.id} 
                                    type='checkbox'
                                    checked={todo.completed}
                                    onChange={() => this.handleCompleted(todo)}
                                    ></input>
                                <label htmlFor={todo.id}>{todo.todo}</label>
                            </div>
                        ))}
                    </article>
                </section>
                <section className='new-todo'>
                    <form onSubmit={this.handleAddToDo}>
                        <label>New To Do: </label>
                        <input 
                        value={this.state.new_todo}
                        type='text'
                        onChange={(e) => {
                            this.setState({ new_todo: e.target.value })
                        }}
                        ></input>
                        <button>Add To Do</button>
                    </form>
                </section>
            </>
        );
    }
}
 
export default ToDos;