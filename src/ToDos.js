import React, { Component } from 'react';
import { createToDo, getToDos } from './fetch-utils';
import { URL } from './fetch-utils.js'

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
    render() { 
        return ( 
            <>
                <section className='todo-list'>
                    <article className='todos'>
                        {this.state.todos.map(todo => (
                            <div key={todo.id}>
                                <input id={todo.id} type='checkbox'></input>
                                <label for={todo.id}>{todo.todo}</label>
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