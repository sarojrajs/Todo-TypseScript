import React from 'react'
import classes from './TodoItem.module.css'


const TodoItem: React.FC<{ todo: string; onRemoveTodo: () => void }> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.todo}</li>
    )
}

export default TodoItem
