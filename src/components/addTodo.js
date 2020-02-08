import React, { Component } from 'react';

class addTodo extends Component {

    state = {
        con: ''
    }

    handleInputChange(e) {
        this.setState({
            con: e.target.value
        })
    }

     handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.con)
        this.setState({
            con: ''
        })
    }

    render() {
        return (
            <div className="container mt-4 border-top">
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <label>Add New Todo:</label>
                        <input className="ml-2" type="text" onChange={(e) => this.handleInputChange(e)} value={this.state.con} />
                        <button className="ml-2" type="submit">Add</button>
                    </form>
                </center>
            </div>
        );
    }
}


export default addTodo;
