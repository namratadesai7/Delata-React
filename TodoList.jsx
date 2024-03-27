import { useState } from "react";
import {v4 as uuidv4} from  'uuid';

export default function TodoList(){
    // let [todos,setTodos]=useState([task:"sample task"]); //here todos is array 
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isdone:false}]);  //here it has become array of  object
    let [newTodo,setnewTodo]= useState("");

    let addNewTask=() => {
        // console.log("we have to add new task in todo");
        setTodos([...todos,{task:newTodo, id:uuidv4(), isdone:false }] ); //detructuring todos by ...
        setnewTodo("");
    };

    let updateTodoValue=(event) => {
        console.log(event.target.value);
        setnewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
      //  setTodos(todos.filter((todo)=> todo.id != id));
        setTodos((prevTodos) => todos.filter((prevTodos)=> prevTodos.id != id));
    };

    let upperCaseAll=()=> {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                }
            })
        ));
    }

    let UpperCaseOne=(id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id==id){
                    return{
                        ...todo,
                        task:todo.task.toUpperCase(),
                    }
                }else{
                    return todo;
                }
              
            })
        ));
    }
    let MarkasdoneOne=(id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id==id){
                    return{
                        ...todo,
                        isdone:true,
                    }
                }else{
                    return todo;
                }
              
            })
        ));
    }
    let MarkasdoneAll=() => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                
                    return{
                        ...todo,
                        isdone:true,
                    }
                
              
            })
        ));
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
                   return <li key={todo.id}>
                    <span style={todo.isdone ? {textDecoration:"line-through"}:{}} >{todo.task}</span>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    <button onClick={() => UpperCaseOne(todo.id)}>UpperCase one</button>
                    <button onClick={() => MarkasdoneOne(todo.id)}>Mark as done</button>
                    </li>
                })
            }
        </ul>
        <br></br>
        <button onClick={upperCaseAll}>Uppercase All</button>
        <button onClick={MarkasdoneAll}>Markasdone All</button>
    </div>)
}