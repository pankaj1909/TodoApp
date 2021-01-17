import React, {useState, Fragment, useEffect} from 'react';

function AddTodo({addTodo, addNewCategory, categories, updateTodo, onEdit, editData: {id, content, categoryData, edit}}) {
    const [todoValue, setTodoValue] = useState('')
    const [category, setCategory] = useState('')
    const [addNew, setAddNew] = useState(false)
    const [chooseExisting, setChooseExisting] = useState(false)
    const [inputGroupSelect01, setInputGroupSelect01] = useState(0)

    useEffect(() => {
        if (id) {
            setTodoValue(content)
            if (categoryData) {
                setCategory(categoryData)
                setChooseExisting(true)
                setInputGroupSelect01(2)
            } else {
                setChooseExisting(false)
                setInputGroupSelect01(2)
            }
        }

    }, [id])

    function onTodoAddAndEdit(e) {
        e.preventDefault()
        if (todoValue !== '') {
            if (!edit)
                addTodo({id: Math.random(), content: todoValue, done: false, category: category})
            else {
                updateTodo({id, content: todoValue, category: category})
                onEdit('', '', false, '', false)
            }

            if (addNew) {
                addNewCategory({id: Math.random(), name: category, value: category})
            }
            setTodoValue('')
            setCategory('')
            setAddNew(false)
            setChooseExisting(false)
            setInputGroupSelect01(0)
        }
    }

    const onSelectChange = (value) => {
        setInputGroupSelect01(value)
        setAddNew(value === '1')
        setChooseExisting(value === '2')
    }

    return (
        <Fragment>
            <div className={'col-sm-12 font-weight-bold text-center border-top'}>Adding a TODO</div>
            <div className={'col-sm-12 row mt-2'}>
                <div className={'col-sm-6'}>
                    <label>Name</label>
                </div>
                <div className={'col-sm-6'}>
                    <input type="text" className="form-control" placeholder="Add a Todo"
                           value={todoValue}
                           onChange={(e) => setTodoValue(e.target.value)}
                           id={'addTodo'}/>
                </div>
            </div>
            <div className={'col-sm-12 row mt-2'}>
                <div className={'col-sm-6'}>
                    <label>Choose Category Type</label>
                </div>
                <div className={'col-sm-6'}>
                    <select className="custom-select" id="inputGroupSelect01"
                            value={inputGroupSelect01}
                            onChange={(e) => onSelectChange(e.target.value)}>
                        <option value={0} selected>Choose...</option>
                        <option value="1">Add New</option>
                        <option value="2">Choose from Existing</option>
                    </select>
                </div>
            </div>
            {addNew && <div className={'col-sm-12 row mt-2'}>
                <div className={'col-sm-6'}>
                    <label>Add New Category</label>
                </div>
                <div className={'col-sm-6'}>
                    <input type="text" className="form-control" placeholder="Add a new category"
                           value={category}
                           onChange={(e) => setCategory(e.target.value)}
                           id={'addCategory'}/>
                </div>
            </div>}
            {chooseExisting && <div className={'col-sm-12 row mt-2'}>
                <div className={'col-sm-6'}>
                    <label>Choose Category</label>
                </div>
                <div className={'col-sm-6'}>
                    <select
                        className={"custom-select"}
                        name={'ChooseCategory'}
                        id={'ChooseCategory'}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories && categories.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>}
            <div className={'col-sm-12 row mt-2 justify-content-center'}>
                <button className="btn btn-secondary" type="button"
                        id={!edit ? 'addtodoClick' : 'edittodoClick'}
                        onClick={(e) => onTodoAddAndEdit(e)}>
                    {!edit ? <span>Add a Todo</span> : <span>Edit a Todo</span>}
                </button>
            </div>
        </Fragment>
    )
}


export default AddTodo;
