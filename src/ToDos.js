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
        e.preventDefault(); //tried not using e.preventDefault() but it reloads the page, tried to push to /api/todos but not working
        const newToDo = await createToDo(this.state.new_todo)
        this.setState({ todos: [...this.state.todos, ...newToDo], new_todo: ''});
        this.props.history.push(`${URL}/api/todos`)
        //errors out but then loads? says uncaught in promise type error newToDo is not iterable at todos.handleAddToDo
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