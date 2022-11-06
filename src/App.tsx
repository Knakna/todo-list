import React, {useState} from 'react';
import './App.css';
import {TaskArray, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
    // let task1:Array<TaskArray> = [
    //     {id: 1, title: "CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: false},
    //     {id: 3, title: "React", isDone: false}
    // ]
    // let task2: Array<TaskArray> = [
    //     {id: 1, title: "SCSS", isDone: false},
    //     {id: 2, title: "TS", isDone: true},
    //     {id: 3, title: "Redax", isDone: false},
    //     {id: 4, title: "SQL", isDone: false}
    // ]

    /*let tasks: Array<TaskArray> = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: false}
    ]*/

    /* let initTasks: Array<TaskArray> = [
         {id: 1, title: 'CSS', isDone: true},
         {id: 2, title: 'JS', isDone: false},
         {id: 3, title: 'React', isDone: false}
     ]*/

    /*let arr = useState(initTasks);
    let tasks = arr[0];
    let setTasks = arr[1];*/

    let [tasks, setTasks] = useState<Array<TaskArray>>([
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'SQL', isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>('all');

    function removeTask(id: number) {
        /*let resultTasks = tasks.filter((t) => {
            if (t.id !== id) {
                return true;
            } else {
                return false;
            }*/
        // tasks = tasks.filter(t => t.id !== id)

        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
// debugger
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    let tasksForTodolist = tasks;
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }


    return (
        <div className="App">
            {/*<Todolist title="What to learn" tasks={task1}/>
            <Todolist title="in progress" tasks={task2}/>*/}
            <Todolist title="in progress"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
