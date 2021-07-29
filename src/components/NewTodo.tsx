import React from 'react'
import { useRef } from 'react';
import classes from './NewTodo.module.css'
import { TodosContext } from '../store/todos-context';
import { useContext } from 'react';
// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

//     const todoTextInputRef = useRef<HTMLInputElement>(null)

//     const submitHandler = (event: React.FormEvent) => {
//         event.preventDefault();
//         // By adding this ! after the current means that you are sure that this ref is going to hold some value when is function is called
//         // const enteredText=todoTextInputRef.current!.value
//         // Whereas in this typescript making sure that the enteredText is not undeined and value is accessible
//         // const enteredText = todoTextInputRef.current?.value

//         const enteredText = todoTextInputRef.current!.value

//         if (enteredText.trim().length === 0) {
//             //throw an error
//             return;
//         }

//         props.onAddTodo(enteredText)

//     }

//     return (
//         <form onSubmit={submitHandler} className={classes.form}>
//             <label htmlFor='text'>Todo text</label>
//             <input type='text' id='text' ref={todoTextInputRef} />
//             <button>Add Todo</button>
//         </form>
//     )
// }

const NewTodo: React.FC = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const todosCtx = useContext(TodosContext)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // By adding this ! after the current means that you are sure that this ref is going to hold some value when is function is called
        // const enteredText=todoTextInputRef.current!.value
        // Whereas in this typescript making sure that the enteredText is not undeined and value is accessible
        // const enteredText = todoTextInputRef.current?.value

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        todosCtx.addTodo(enteredText)

    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
