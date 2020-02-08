import * as actionTypes from '../actions/actions'

const initialState = {
    todosList: [
        { id: 1, content: 'Recharge Milk subscription', done: false },
        { id: 2, content: 'Pay Maid', done: false },
        { id: 3, content: 'Pay Rent', done: false }
    ],
    edit: false,
    id: null,
    content: ''
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                todosList: state.todosList.concat({ id: Math.random(), content: action.content, done: false })
            };
        case actionTypes.DELETE:
            const todo = state.todosList.filter(todo => todo.id !== action.ElementId)
            return {
                ...state,
                todosList: todo
            };
        case actionTypes.COMPLETE:
            return {
                ...state,
                todosList: state.todosList.map(item => {
                    if (item.id === action.ElementId) {
                        item['done'] = true;
                        return item;
                    }
                    return item;
                })
            };
        case actionTypes.EDIT:
            return {
                ...state,
                edit: true,
                id: action.id,
                content: action.content
            };
        case actionTypes.UPDATE:
            return {
                ...state,
                todosList: state.todosList.map(item => {
                    if (item.id === state.id) {
                        item['content'] = action.value;
                        return item;
                    }
                    return item;
                }),
                edit: false
            };
    }

    return state;
}

export default reducer;