import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

import {FilterValuesType} from './App';


export type TaskArray = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskArray>
    // removeTask: Function
    removeTask: (id: string) => void
    // changeFilter: Function
    addTask: (title: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        // return console.log(e.key);
        /*  if (e.charCode === 13) {
              props.addTask(newTaskTitle);
              setNewTaskTitle('');
          }
         if (e.ctrlKey && e.charCode === 13) {
             props.addTask(newTaskTitle);
             setNewTaskTitle('');
         }*/
        if (e.key === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTitle('');
        }
    }

    const onClickAddTaskHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('');
    }

    const onAllClickHandler = () => {
        props.changeFilter('all')
    }

    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle} onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickAddTaskHandler}>+</button>
            </div>
            {/* <ul>
                {props.tasks.map(t => <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }}> x
                        </button>
                    </li>
                )
                }*/}
            <ul>
                {props.tasks.map((t) => {
                    const onClickRemoveTaskHandler = () => props.removeTask(t.id)

                    return (
                        <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickRemoveTaskHandler}> x
                            </button>
                        </li>
                    )
                })}


                {/* {
                    props.tasks.map((t) => {
                        return <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span></li>

                    } )
                }

                <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}