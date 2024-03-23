import { useState } from "react";
import {v4 as uuidv4} from  'uuid';

export default function TodoList(){
    // let [todos,setTodos]=useState([task:"sample task"]); //here todos is array 
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4()}]);  //here it has become array of  object
    let [newTodo,setnewTodo]= useState("");

    let addNewTask=() => {
        // console.log("we have to add new task in todo");
        setTodos((prevTodos) =>{
            [...todos,{task:newTodo, id:uuidv4()}] }); //detructuring todos by ...
        setnewTodo("");
    };

    let updateTodoValue=(event) => {
        console.log(event.target.value);
        setnewTodo(event.target.value);
    }
    return(<div>
        <input placehodler="add a task" type="text" value={newTodo}   onChange={updateTodoValue} />
        <br></br>
        <button onClick={addNewTask}>Add Task</button>
       <br></br>
       <br></br>
       <br></br>
        
        <hr></hr>
        <h4>Tasks Todo</h4>
        <ul>
            {
                todos.map((todo)=> {
                   return <li key={todo.id}>{todo.task}</li>
                })
            }
        </ul>
    </div>)
}