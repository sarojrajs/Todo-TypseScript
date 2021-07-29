import React from 'react'
// import Todo from '../models/todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'
import { TodosContext } from '../store/todos-context'
import { useContext } from 'react'


// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
//     return (
//         <div className={classes.todos}>
//             {props.items.map((item) => (
//                 <TodoItem key={item.id} todo={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
//             ))}
//         </div>
//     )
// }

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    return (
        <div className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} todo={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
            ))}
        </div>
    )
}

export default Todos
