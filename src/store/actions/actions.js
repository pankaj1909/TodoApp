export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const COMPLETE = 'COMPLETE';
export const EDIT = 'EDIT';
export const UPDATE = 'UPDATE';

export const add = (value) => {
    return {
        type: ADD,
        content: value
    }
}

export const deleteResult = (id) => {
    return {
        type: DELETE,
        ElementId: id
    }
}

export const complete = (id) => {
    return {
        type: COMPLETE,
        ElementId: id
    }
}

export const edit = (id, content) => {
    return {
        type: EDIT,
        id: id,
        content: content
    }
}

export const update = (value) => {
    return {
        type: UPDATE,
        value: value.target.updateTodo.value
    }
}