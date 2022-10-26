import React from 'react';
import './App.css';
import {TaskArray, Todolist} from './Todolist';

function App() {
    let task1:Array<TaskArray> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: false}
    ]
    let task2: Array<TaskArray> = [
        {id: 1, title: "CSS", isDone: false},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={task1}/>
            <Todolist title="qqq" tasks={task2}/>
        </div>
    );
}

export default App;
