import React, { Component } from 'react';
import AddTodo from "../components/addTodo";
import { connect } from 'react-redux';
import { add, complete, edit, update, deleteResult } from '../store/actions/actions';

class Todos extends Component {

    renderEditForm = () => {
        if (this.props.edit) {
            return (
                <form onSubmit={(e) => this.props.updateTodo(e)}>
                    <input type="text" name="updateTodo" className="item" defaultValue={this.props.content} />
                    <button className="ml-2">Update</button>
                </form>
            )
        }
    }

    render() {
        console.log(this.props)
        const list = this.props.todosList.length > 0 ? (
            this.props.todosList.map(todo => {
                return (
                    <div key={todo.id} className={todo.done ? 'done' : 'hidden'}>
                        <span >{todo.content}</span>
                        <button className="btn btn-primary ml-2 mt-2" onClick={this.props.deleteTodo.bind(this, todo.id)}>Delete</button>
                        <button className="btn btn-primary ml-2 mt-2" onClick={this.props.editTodo.bind(this, todo.id, todo.content)}>Edit</button>
                        <button className="btn btn-primary ml-2 mt-2" onClick={this.props.completeTodo.bind(this, todo.id)}>Complete</button>


                    </div>
                )
            })

        ) : (
                <p>You have zero Todos !</p>
            )

        return (
            <div className="container">
                <center>{this.renderEditForm()}</center>
                <center>
                    {list}
                    <AddTodo addTodo={this.props.addTodo} />
                </center>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todosList: state.todosList,
        edit: state.edit,
        id: state.id,
        content: state.content,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch(add(value)),
        deleteTodo: (id) => dispatch(deleteResult(id)),
        editTodo: (id, content) => dispatch(edit(id, content)),
        completeTodo: (id) => dispatch(complete(id)),
        updateTodo: (value) => dispatch(update(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
