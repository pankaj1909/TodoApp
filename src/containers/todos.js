import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addTodo, addNewCategory, deleteTodo, updateTodo, complete} from '../store/actions/actions';
import AddTodo from "../components/addTodo";
import TodoList from "../components/TodoList";


function Todos({addTodo, addNewCategory, deleteTodo, updateTodo, complete,todoData: {todosList, categories}}) {
    const [editData, setEditData] = useState({
        id: '',
        content: '',
        done: false,
        categoryData: '',
        edit: false
    })

    function onEdit(id, content, done, category, edit = true) {
        setEditData({id, content, done, categoryData: category, edit: edit})
    }

    return (
        <div className={'col d-flex justify-content-center'}>
            <div className="card border-dark mr-5 ml-5 mb-3 mt-3" style={{width: '600px'}}>
                <div className="card-header font-weight-bold text-center">Todo List</div>
                <div className="card-body">
                    <div className={'card-title'}>
                        {todosList && todosList.map((item, index) => (
                            <TodoList {...item} index={index} deleteTodo={deleteTodo} onEdit={onEdit}
                                      complete={complete}/>
                        ))}
                        {todosList && todosList.length === 0 && <div className={'text-center'}>No Todos</div>}
                    </div>
                    <AddTodo addTodo={addTodo} editData={editData} updateTodo={updateTodo}
                             addNewCategory={addNewCategory}
                             onEdit={onEdit}
                             categories={categories}/>
                </div>
            </div>
        </div>
    )

}


const mapStateToProps = state => {
    return {
        todoData: state.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: bindActionCreators(addTodo, dispatch),
        addNewCategory: bindActionCreators(addNewCategory, dispatch),
        deleteTodo: bindActionCreators(deleteTodo, dispatch),
        updateTodo: bindActionCreators(updateTodo, dispatch),
        complete: bindActionCreators(complete, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
