import React, { Component } from 'react';
import { getToDos } from './fetch-utils';
//TODO
//write how a todo appears on the page
class ToDos extends Component {
    state = { 
        todos: [],
    }
    componentDidMount = async () => {
        const data = await getToDos();
        this.setState({ todos: data });
    }
    render() { 
        return ( 
            <ul className='todos'>
                {this.state.todos.map(todo => (
                    <li>
                        {todo.todo}
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default ToDos;